# OCR Toolkit Clone

This project is a full-featured open-source clone of [imagetotext.info](https://www.imagetotext.info), focused on OCR and text extraction from images and PDFs.

## 🔧 Features
- Image to Text (OCR)
- PDF to Text (multi-page OCR)
- Clean UI with file upload, tool selection, and extracted text display

## 📦 Stack
- **Frontend:** React + Tailwind CSS
- **Backend:** FastAPI (Python)
- **OCR:** Tesseract + PyMuPDF

## 🚀 Getting Started

### 1. Backend Setup
```bash
cd backend
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
uvicorn main:app --reload
```

### 2. Frontend Setup
```bash
cd frontend
npm install
npm start
```

### 3. Test the App
Visit `http://localhost:3000` and upload an image or PDF.

## 📁 Project Structure
backend/         # FastAPI OCR endpoints
frontend/        # React frontend with OCR tools

## 🧠 Next Tools Coming Soon
- PDF to Word, JPG to PDF, Word to JPG
- Summarizer, Rewriter, Grammar Checker, PDF Translator

## 📜 License
MIT License