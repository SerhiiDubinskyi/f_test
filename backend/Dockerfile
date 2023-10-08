# Use an official Python runtime as the base image
FROM python:3.9-slim

# Set the working directory in the container
WORKDIR /app

# Copy the requirements file into the container
COPY requirements.txt .

# Install FastAPI and any other dependencies
RUN pip install -r requirements.txt

# Copy the rest of the FastAPI application source code into the container
COPY . .

# Expose port 80 to the outside world (the default FastAPI port)
EXPOSE 8000

# Define the command to run your FastAPI application
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]
