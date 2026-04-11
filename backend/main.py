from fastapi import FastAPI
from pydantic import BaseModel
import torch
import torch.nn as nn
from transformers import DistilBertTokenizerFast, DistilBertModel
from deep_translator import GoogleTranslator

app = FastAPI()
from fastapi.middleware.cors import CORSMiddleware

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

DEVICE = torch.device("cpu")

# Label mapping
ID2LABEL = {
    0: "Consumer Law",
    1: "Cyber Crime",
    2: "Property Disputes",
    3: "Domestic Violence",
    4: "Labour Law",
    5: "Environmental Law",
}

# Request schema
class InputText(BaseModel):
    text: str


# Model class
class Model(nn.Module):
    def __init__(self):
        super().__init__()
        self.bert = DistilBertModel.from_pretrained("distilbert-base-uncased")
        self.dropout = nn.Dropout(0.5)
        self.fc = nn.Linear(768, len(ID2LABEL))

    def forward(self, input_ids, attention_mask):
        out = self.bert(input_ids=input_ids, attention_mask=attention_mask)
        x = out.last_hidden_state[:, 0]
        x = self.dropout(x)
        return self.fc(x)


# Load tokenizer + model
tokenizer = DistilBertTokenizerFast.from_pretrained("./tokenizer")

model = Model()
model.load_state_dict(torch.load("./model.pt", map_location=DEVICE))
model.to(DEVICE)
model.eval()


# Translation
def translate(text):
    try:
        return GoogleTranslator(source='auto', target='en').translate(text)
    except:
        return text


# API route
@app.post("/predict")
def predict_api(input: InputText):
    text = input.text
    translated = translate(text)

    enc = tokenizer(
        translated,
        return_tensors="pt",
        truncation=True,
        padding=True,
        max_length=64
    )

    ids = enc["input_ids"].to(DEVICE)
    mask = enc["attention_mask"].to(DEVICE)

    with torch.no_grad():
        outputs = model(ids, mask)
        probs = torch.softmax(outputs, dim=1)
        pred = torch.argmax(probs).item()

    return {
        "original": text,
        "translated": translated,
        "category": ID2LABEL[pred],
        "confidence": float(probs[0][pred])
    }