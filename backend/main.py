import os
import openai

from fastapi import FastAPI
from pydantic import BaseModel

from config import OPENAI_KEY, OPENAI_MODEL

app = FastAPI()
openai.api_key = OPENAI_KEY


class Question(BaseModel):
    question: str


@app.get("/")
async def root():
    return {"message": "Hello World"}


@app.post("/get-answer")
async def get_answer(question: Question):
    completion = openai.ChatCompletion.create(
        model=OPENAI_MODEL,
        messages=[
            {"role": "system", "content": "You are a bot that helps brokers."},
            {"role": "user", "content": question.question}
        ]
    )
    print(completion.choices[0].message)
    return {"answer": completion.choices[0].message}
