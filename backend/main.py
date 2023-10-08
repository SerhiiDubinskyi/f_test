import openai

from fastapi import FastAPI
from pydantic import BaseModel

from config import OPENAI_KEY, OPENAI_MODEL, ORIGINS, ALLOW_CREDENTIALS, ALLOW_METHODS, ALLOW_HEADERS

from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=ORIGINS,
    allow_credentials=ALLOW_CREDENTIALS,
    allow_methods=ALLOW_METHODS,
    allow_headers=ALLOW_HEADERS,
)

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
    return {"answer": completion.choices[0].message['content']}
