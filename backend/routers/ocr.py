from fastapi import APIRouter, UploadFile, File
from services.ocr_service import ocr_image, ocr_pdf

router = APIRouter()

@router.post("/image")
async def extract_text_from_image(file: UploadFile = File(...)):
    text = await ocr_image(file)
    return {"text": text}

@router.post("/pdf")
async def extract_text_from_pdf(file: UploadFile = File(...)):
    text = await ocr_pdf(file)
    return {"text": text}
