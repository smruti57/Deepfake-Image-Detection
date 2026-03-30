#  Deepfake Image Detection using Ensemble Deep Learning

A full-stack AI-based web application that detects whether an image is **REAL or FAKE (Deepfake)** using an ensemble of deep learning models.

---

## 📌 Introduction

Deepfake refers to AI-generated images or videos that appear highly realistic but are artificially created. These can be misused for:

* 📰 Fake news & misinformation
* 🔐 Identity fraud & cybercrime
* 📱 Social media manipulation
* ⚠️ Security & privacy threats

This project provides an automated system to detect such manipulated images using deep learning.

---

## 🧠 Problem Statement

Build an intelligent system that classifies an input image as:

* ✅ **REAL** — authentic image
* ❌ **FAKE** — AI-generated deepfake

Modern deepfakes are visually indistinguishable, making automated detection essential.

---

## 🎯 Objectives

* Preprocess deepfake image dataset
* Train multiple CNN models using transfer learning
* Implement **weighted ensemble learning**
* Classify images based on prediction probability
* Evaluate using accuracy, precision, recall, and F1-score

---

## 📊 Dataset

**Source:** Kaggle – Deepfake and Real Images

* Training: ~140,000 images
* Validation: ~10,000 images
* Testing: ~10,000 images

Balanced dataset with REAL and FAKE classes.

---

## ⚙️ Methodology

1. Load dataset using ImageDataGenerator
2. Resize images to **224 × 224**
3. Normalize pixel values to **[0,1]**
4. Train 3 CNN models
5. Generate predictions
6. Combine results using weighted ensemble

---

## 🧹 Preprocessing

* 📐 Resize: 224×224 pixels
* 🔢 Normalize: [0–255] → [0–1]
* 📦 Batch Size: 32
* 🏷️ Labels:

  * 0 → REAL
  * 1 → FAKE

---

## 🧠 Models Used (Transfer Learning)

### 🔹 MobileNetV2 (Weight: 0.3)

* Lightweight and fast
* Good for quick feature extraction

### 🔹 ResNet50 (Weight: 0.4)

* Deep residual network
* Main backbone for detection

### 🔹 InceptionV3 (Weight: 0.3)

* Multi-scale feature extraction
* Detects fine artifacts

---

## ⚡ Ensemble Learning (Core Feature)

Final prediction is computed using weighted average:

[
P = 0.3 \cdot P_{MobileNet} + 0.4 \cdot P_{ResNet} + 0.3 \cdot P_{Inception}
]

* If **P ≥ 0.5 → FAKE ❌**
* Else → **REAL ✅**

---

## 🛠️ Tech Stack

### 🔹 Backend

* FastAPI
* Uvicorn
* TensorFlow / Keras
* NumPy
* Pillow

### 🔹 Frontend

* React.js (with Vite)
* TypeScript
* Tailwind CSS

### 🔹 Tools

* Git & GitHub
* Postman

---

## 🌐 Working of the System

1. User uploads an image via frontend
2. Image sent to backend API (`/predict`)
3. Image preprocessing (resize + normalize)
4. Passed through 3 CNN models
5. Predictions combined using ensemble
6. JSON response returned:

   ```json
   { "label": "FAKE", "confidence": 0.82 }
   ```
7. Result displayed on UI

---

## 📂 Project Structure

```
deepfake/
│
├── backend/
│   ├── app.py
│   ├── models/              # (Download separately)
│   ├── requirements.txt
│
├── frontend/
│   ├── src/
│   ├── package.json
│
├── test_post.py
├── test.png
└── README.md
```

---

## 📈 Results

* ✅ Accuracy: **73.16%**
* 🔍 Recall (FAKE): **0.90**
* 📊 F1 Score: **0.73**

Confusion Matrix:

```
TN: 3130 | FP: 2362
FN:  565 | TP: 4848
```

---

## ⚠️ Note on ML Models

Due to GitHub size limitations, `.h5` model files are not included.

---

## 📥 Download Models

👉 [Paste Google Drive Link Here]

Place inside:

```
backend/models/
```

Required files:

* mobilenet_model.h5
* resnet_model.h5
* googlenet_model.h5

---

## ⚙️ Setup Instructions

### 1️⃣ Clone Repository

```bash
git clone https://github.com/your-username/deepfake-detection.git
cd deepfake-detection
```

### 2️⃣ Backend Setup

```bash
cd backend
pip install -r requirements.txt
```

### 3️⃣ Add Models

Download and place in `backend/models/`

### 4️⃣ Run Backend

```bash
uvicorn app:app --reload
```

### 5️⃣ Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

---

## 🧪 Testing

```bash
python test_post.py
```

---

## 🚀 Future Scope

* Grad-CAM visualization
* Video deepfake detection
* Cloud deployment
* Model fine-tuning
* Adversarial robustness

---

## 👩‍💻 Authors

* **Smruti Mistry**
* Teesha Gokulgandhi

Department of Information Technology
G H Patel College of Engineering & Technology

---

## ⭐ Support

If you found this project useful, give it a ⭐ on GitHub!
