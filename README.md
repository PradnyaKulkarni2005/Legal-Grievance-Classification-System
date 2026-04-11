# 🏛️ Legal Grievance Classifier

A full-stack AI-powered web application that classifies user complaints into relevant legal categories using Natural Language Processing (NLP).

---

## 🚀 Features

* 🌐 **Multilingual Support** (English, Hindi, Hinglish, Marathi, Gujarati, etc.)
* 🤖 **AI-Based Classification** using DistilBERT
* ⚖️ Categorizes complaints into:

  * Cyber Crime
  * Consumer Law
  * Labour Law
  * Domestic Violence
  * Property Disputes
  * Environmental Law
* 🔄 Automatic **translation to English**
* 📊 Provides **prediction confidence**
* 🖥️ Full-stack app (FastAPI + React)

---

## 🧠 How It Works

1. User enters complaint (any language)
2. Text is translated to English
3. Tokenizer processes the text
4. DistilBERT model predicts category
5. Result is returned with confidence score

---

## 🏗️ Project Structure

```
Legal_Grievance_Classifier/
│
├── backend/
│   ├── main.py
│   ├── model.pt
│   ├── tokenizer/
│
├── frontend/
│   ├── src/
│   ├── App.jsx
│
├── model_training.ipynb
└── README.md
```

---

## ⚙️ Backend Setup (FastAPI)

### 1. Navigate to backend

```bash
cd backend
```

### 2. Install dependencies

```bash
pip install fastapi uvicorn torch transformers deep-translator
```

### 3. Run server

```bash
uvicorn main:app --reload
```

### 4. Open API docs

```
http://127.0.0.1:8000/docs
```

---

## 💻 Frontend Setup (React + Vite)

### 1. Navigate to frontend

```bash
cd frontend
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run frontend

```bash
npm run dev
```

### 4. Open app

```
http://localhost:5173
```

---

## 🔌 API Endpoint

### POST `/predict`

**Request:**

```json
{
  "text": "mera account hack ho gaya"
}
```

**Response:**

```json
{
  "original": "mera account hack ho gaya",
  "translated": "my account has been hacked",
  "category": "Cyber Crime",
  "confidence": 0.84
}
```

---

## 🧪 Example Inputs

* "माझ्या खात्यातून पैसे चोरी झाले"
* "મારા પગાર મળ્યો નથી"
* "my company is not paying salary"

---

## 🛠️ Tech Stack

* **Backend:** FastAPI
* **Frontend:** React (Vite)
* **Model:** DistilBERT (Transformers)
* **Language Translation:** deep-translator
* **ML Framework:** PyTorch

---

## 📈 Model Details

* Architecture: DistilBERT + Classification Head
* Training Data: Synthetic + augmented dataset (~2000 samples)
* Accuracy: ~84% (realistic performance after regularization)

---

## ⚠️ Notes

* Model is trained on synthetic data, so real-world performance may vary
* Internet connection required for translation API
* Ensure correct file paths for model and tokenizer

---

## 🌟 Future Improvements

* Add voice input (speech-to-text)
* Improve dataset with real-world complaints
* Deploy on cloud (Render / Vercel)
* Add authentication system

---

## 📌 Conclusion

This project demonstrates a complete end-to-end AI system that:

* Handles multilingual input
* Performs intelligent classification
* Provides a user-friendly interface

---

⭐ If you like this project, feel free to star the repository!
