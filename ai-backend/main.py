from fastapi import FastAPI
from pydantic import BaseModel
app=FastAPI()
class Prompt(BaseModel):
    prompt:str
@app.post("/ai")
def ask_ai(data:Prompt):
    return {"answer":f"Bedrock response for: {data.prompt}"}