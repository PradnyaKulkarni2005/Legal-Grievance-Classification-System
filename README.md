# 🏛️ Legal Grievance Classification System (BERT-Based)

## 📌 Project Overview

This project is an **NLP-based automated grievance classification system** that categorizes citizen complaints into appropriate legal domains such as:

* Consumer Protection
* Cyber Crime
* Property Disputes
* Domestic Violence

The system uses **BERT (Bidirectional Encoder Representations from Transformers)** to understand the context of complaint text and classify it accurately.

---

## 🚨 Problem Statement

Government grievance portals receive thousands of complaints daily. Manual classification:

* ⏳ is slow
* 👨‍⚖️ requires domain experts
* ❌ leads to misclassification
* 🐢 delays legal action

### 💡 Solution

An automated system that:

* Takes complaint text as input
* Processes and understands it using NLP
* Classifies it into the correct legal category

---

## 🎯 Objectives

* Build a text classification model for grievance categorization
* Preprocess informal and noisy complaint text
* Use BERT for contextual understanding
* Improve classification accuracy
* Reduce manual effort and response time

---

## 🧠 System Architecture

```
User Input (Complaint)
        ↓
Text Preprocessing
        ↓
BERT Tokenization
        ↓
BERT Model (Embeddings)
        ↓
Classification Layer (Dense + Softmax)
        ↓
Predicted Legal Category
```

---

## ⚙️ Tech Stack

### 🔹 Frontend

* Next.js (React)

### 🔹 Backend

* FastAPI (Python)

### 🔹 Machine Learning

* Python
* PyTorch
* Transformers (HuggingFace BERT)
* Scikit-learn
* NLTK

---

## 📂 Project Structure

```
grievance-system/
│
├── data/
│   └── legal_grievance_dataset.csv
│
├── notebooks/
│   └── model_training.ipynb
│
├── backend/
│   ├── app.py
│   ├── model.py
│   └── utils.py
│
├── frontend/
│   └── (Next.js app)
│
├── saved_model/
│   └── model.pt
│
└── README.md
```

---

## 🔄 Workflow

### 1. Data Preprocessing

* Lowercasing
* Removing punctuation
* Stopword removal
* Lemmatization

### 2. Tokenization

* BERT tokenizer converts text into tokens
* Adds special tokens: `[CLS]`, `[SEP]`

### 3. Embedding Generation

* BERT converts tokens into contextual vectors (768 dimensions)

### 4. Classification

* `[CLS]` token embedding used as sentence representation
* Passed through Dense layer + Softmax

### 5. Output

* Predicted legal category returned to user

---

## 🧪 Example

**Input:**

```
Seller refused to refund my defective product
```

**Output:**

```
Consumer Protection Law
```

---

## 🚀 Setup Instructions

### 1️⃣ Clone Repository

```bash
git clone https://github.com/your-username/grievance-system.git
cd grievance-system
```

---

### 2️⃣ Install Dependencies

```bash
pip install pandas numpy scikit-learn transformers torch nltk fastapi uvicorn
```

---

### 3️⃣ Run Jupyter Notebook (Model Training)

```bash
jupyter notebook
```

Open:

```
notebooks/model_training.ipynb
```

---

### 4️⃣ Run Backend (FastAPI)

```bash
uvicorn app:app --reload
```

---

### 5️⃣ Run Frontend (Next.js)

```bash
cd frontend
npm install
npm run dev
```

---

## 📡 API Endpoint

### POST `/predict`

**Request:**

```json
{
  "text": "My online payment was hacked"
}
```

**Response:**

```json
{
  "category": "Cyber Crime"
}
```

---

## 👥 Team Members

* Member 1 → Data Preprocessing & Model Training
* Member 2 → Frontend & API Integration

---

## 🔮 Future Enhancements

* Multilingual support (Hindi, Marathi, etc.)
* Real-time complaint dashboard
* Integration with government portals
* Explainable AI (why prediction was made)

---

## 📚 Key Concepts Used

* Natural Language Processing (NLP)
* BERT (Transformer Model)
* Tokenization & Embeddings
* Deep Learning Classification

---

## 🏁 Conclusion

This system automates grievance classification using BERT, reducing manual effort and improving response time in government systems. It ensures faster and more accurate routing of complaints.

---

## 🙌 Acknowledgment

This project is developed as part of an academic initiative to explore real-world applications of NLP in governance systems.

---
