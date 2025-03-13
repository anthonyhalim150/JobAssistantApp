from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
from pydantic import BaseModel
import base64
from io import BytesIO
from pypdf import PdfReader
from pdf2image import convert_from_bytes
import pytesseract

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],  
    allow_headers=["*"],  
)

class PDFRequest(BaseModel):
    file: str  

@app.post("/extract-pdf-text")
async def extract_pdf_text(request: PDFRequest):
    try:
        pdf_bytes = base64.b64decode(request.file)
        pdf_reader = PdfReader(BytesIO(pdf_bytes))
        extracted_text = "\n".join(page.extract_text() or '' for page in pdf_reader.pages).strip()

        
        if not extracted_text:
            images = convert_from_bytes(pdf_bytes)
            extracted_text = "\n".join(pytesseract.image_to_string(img) for img in images)

        return {"text": extracted_text.strip() if extracted_text else "Could not extract text."}

    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
