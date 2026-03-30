# Backend (FastAPI) — Setup & Run

Quick steps to get the backend running on Windows. The backend exposes `/health` and `/predict` endpoints.

Prerequisites
- Python 3.10 is recommended (3.8–3.10 have best Windows wheel support for TensorFlow).
- Git (optional)

Option A — venv + pip (recommended for simple setups)

1. Create and activate a virtual environment (PowerShell):

```powershell
python -m venv .venv
.\.venv\Scripts\Activate.ps1
python -m pip install --upgrade pip setuptools wheel
```

2. Install dependencies:

```powershell
pip install -r requirements.txt
```

3. Run the server:

```powershell
uvicorn app:app --reload --host 127.0.0.1 --port 8000
```

Option B — Conda (recommended if `pip install tensorflow` fails or for GPU support)

Use the provided `environment.yml` to create a reproducible Conda environment (recommended on Windows):

```powershell
# If you don't have Miniconda/Conda, install Miniconda from https://docs.conda.io/en/latest/miniconda.html
conda env create -f environment.yml
conda activate deepfake
# If you prefer to install TensorFlow separately (explicit version):
pip install --upgrade pip
pip install tensorflow==2.20.0
```

If you prefer manual steps instead of the YAML file:

```powershell
conda create -n deepfake python=3.10 -y
conda activate deepfake
pip install --upgrade pip
pip install tensorflow==2.20.0
pip install -r requirements.txt --no-deps
# (the --no-deps prevents pip from re-installing tensorflow)
```

Health & quick tests
- Health: `GET http://127.0.0.1:8000/health`
- Predict (replace `image.jpg`):

```powershell
curl -X POST "http://127.0.0.1:8000/predict" -F "file=@image.jpg"
```

Notes & Troubleshooting
- If `/health` returns `model_not_loaded`, check the server logs for the model-load traceback. The server tries to load `models/mobilenet_model.h5` relative to this folder.
- If your model was trained with a different TensorFlow major version, load errors can occur — either install the matching TensorFlow version or re-export the model with a compatible version.
- For faster local iteration, use smaller image files and ensure the images are RGB.

If you'd like, I can:
- pin dependency versions (already done),
- run the install and start commands here (I can prepare a script), or
- add a simple unit test to verify the `/predict` endpoint.
