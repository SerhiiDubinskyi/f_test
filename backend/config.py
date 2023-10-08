import os

# OPENAI
OPENAI_KEY = os.getenv("OPENAI_KEY")
OPENAI_MODEL = os.getenv("OPENAI_MODEL")

# CORS
ORIGINS = [
    "http://localhost",
    "http://localhost:3000",
]
ALLOW_CREDENTIALS = True
ALLOW_METHODS = ["*"]
ALLOW_HEADERS = ["*"]



