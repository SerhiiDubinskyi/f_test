<h1>Overview</h1>

This is a web application that utilizes React.js as the frontend and FastAPI as the backend. The primary purpose of this application is to facilitate communication between the frontend and backend, where the backend leverages a fine-tuned ChatGPT model for generating responses.

<h1>Features</h1>
User-Driven Conversations: Users can initiate conversations with the application by sending messages.


AI-Powered Responses: The backend of the application uses a ChatGPT fine-tuned model to generate responses based on user inputs.


Real-Time Interaction: Conversations are maintained in real-time, providing a dynamic and interactive user experience.


Easy Integration: The frontend and backend components can be easily integrated into other projects or extended to meet specific requirements.


<h1>How it Works</h1>
The React frontend provides a user-friendly interface for interacting with the application.

Users can type messages or questions into the frontend interface and send them to the backend.

The FastAPI backend receives user messages and processes them using the fine-tuned ChatGPT model.

The ChatGPT model generates intelligent responses based on the user's input and sends them back to the frontend.

The frontend displays the AI-generated responses in the conversation, creating a seamless chat-like experience.

<h1>Getting Started</h1>
Follow these steps to get the application up and running:

1. Install docker & docker-compose
2. Go to docker directory
3. Configure docker-compose.yml(described below) 
4. Run the command <code>[docker-compose up]</code>

<h1>Configuration</h1>
Set OPENAI_KEY, OPENAI_MODEL in docker/docker-compose.yml