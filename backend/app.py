from fastapi import FastAPI, File, UploadFile, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
import logging
from pathlib import Path

logging.basicConfig(level=logging.INFO)

# TensorFlow is optional for starting the server; import if available
try:
    import tensorflow as tf
except Exception:
    tf = None
    logging.warning("TensorFlow not available; model loading disabled")

import numpy as np
from PIL import Image
import io

app = FastAPI()

# Enable CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Model will be loaded on startup; keep reference here
MODEL_CANDIDATES = [
    Path(__file__).parent / "models" / "mobilenet_model.h5",
    Path(__file__).parent / "models" / "resnet_model.h5",
    Path(__file__).parent / "models" / "googlenet_model.h5",
]
MODEL_PATH = None
model = None

MODEL_NAME = None
MODEL_INFO = {}


IMG_SIZE = (224, 224)

def preprocess_image(image: Image.Image):
    image = image.resize(IMG_SIZE)
    arr = np.array(image).astype(np.float32) / 255.0
    # Ensure 3 channels
    if arr.ndim == 2:
        arr = np.stack([arr, arr, arr], axis=-1)
    arr = np.expand_dims(arr, axis=0)
    return arr


@app.on_event("startup")
def load_model_on_startup():
    global model
    global MODEL_NAME, MODEL_INFO
    # If TF isn't available, set metadata from first candidate and return
    if tf is None:
        logging.warning("TensorFlow not installed; skipping model load")
        model = None
        MODEL_PATH = MODEL_CANDIDATES[0]
        MODEL_NAME = MODEL_PATH.stem
        MODEL_INFO = {"file": MODEL_PATH.name, "img_size": IMG_SIZE, "framework": None}
        return

    # Try loading candidate models until one succeeds
    for candidate in MODEL_CANDIDATES:
        try:
            logging.info(f"Attempting to load model from {candidate}")
            m = tf.keras.models.load_model(str(candidate), compile=False)
            model = m
            MODEL_PATH = candidate
            MODEL_NAME = candidate.stem
            MODEL_INFO = {"file": candidate.name, "img_size": IMG_SIZE, "framework": "tensorflow"}
            logging.info(f"Loaded model: {MODEL_NAME}")
            break
        except Exception:
            logging.exception(f"Failed to load model from {candidate}")
            continue

    if model is None:
        # No candidate loaded; pick first candidate for metadata
        MODEL_PATH = MODEL_CANDIDATES[0]
        MODEL_NAME = MODEL_PATH.stem
        MODEL_INFO = {"file": MODEL_PATH.name, "img_size": IMG_SIZE, "framework": "unknown"}


@app.get("/")
def root():
    return JSONResponse({
        "message": "Deepfake Detection API",
        "version": "1.0",
        "endpoints": {
            "health": "GET /health",
            "predict": "POST /predict",
            "docs": "GET /docs"
        }
    })


@app.get("/health")
def health():
    return JSONResponse({"status": "ok" if model is not None else "model_not_loaded"})


@app.post("/predict")
async def predict(file: UploadFile = File(...)):
    try:
        image_bytes = await file.read()
        image = Image.open(io.BytesIO(image_bytes)).convert("RGB")

        # If model isn't loaded, return a deterministic mock prediction
        if model is None:
            logging.warning("Model not loaded; returning mock prediction")
            # simple mock: random-ish based on image size
            w, h = image.size
            seed = (w * 13 + h * 7) % 100
            score = float((seed % 30) / 100.0 + 0.7)  # between 0.7 and 0.99
            label = "Fake" if score >= 0.5 else "Real"
            return {"prediction": label, "confidence": score, "model_name": MODEL_NAME, "model_info": MODEL_INFO, "model_loaded": False}

        processed = preprocess_image(image)
        preds = model.predict(processed)

        # Handle common output shapes
        if preds.ndim == 2:
            score = float(preds[0][0])
        else:
            score = float(np.max(preds))

        label = "Fake" if score >= 0.5 else "Real"

        return {"prediction": label, "confidence": score, "model_name": MODEL_NAME, "model_info": MODEL_INFO, "model_loaded": True}
    except Exception:
        logging.exception("Prediction error")
        raise HTTPException(status_code=500, detail="Prediction failed")
