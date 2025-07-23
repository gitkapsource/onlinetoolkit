import pytesseract
from PIL import Image
import fitz  # PyMuPDF
import tempfile

async def ocr_image(file):
    contents = await file.read()
    with tempfile.NamedTemporaryFile(delete=False, suffix=".png") as tmp:
        tmp.write(contents)
        tmp_path = tmp.name
    img = Image.open(tmp_path)
    text = pytesseract.image_to_string(img)
    return text

async def ocr_pdf(file):
    contents = await file.read()
    with tempfile.NamedTemporaryFile(delete=False, suffix=".pdf") as tmp:
        tmp.write(contents)
        tmp_path = tmp.name
    text_output = []
    pdf = fitz.open(tmp_path)
    for page in pdf:
        pix = page.get_pixmap(dpi=300)
        img = Image.frombytes("RGB", [pix.width, pix.height], pix.samples)
        text_output.append(pytesseract.image_to_string(img))
    return "\n".join(text_output)
