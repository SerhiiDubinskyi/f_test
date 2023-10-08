import os
import openai

from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()
key = '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'
openai.api_key = key


class Question(BaseModel):
    question: str


@app.get("/")
async def root():
    return {"message": "Hello World"}


@app.post("/get-answer")
async def get_answer(question: Question):
    completion = openai.ChatCompletion.create(
        model="ft:gpt-3.5-turbo-0613:personal::877QkFKt",
        messages=[
            {"role": "system", "content": "You are a bot that helps brokers."},
            {"role": "user", "content": question.question}
        ]
    )
    print(completion.choices[0].message)
    return {"answer": completion.choices[0].message}
