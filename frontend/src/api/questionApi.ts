import axios, { AxiosInstance, AxiosResponse, AxiosError } from 'axios';

type QuestionPostResponse = {
    answer: string;
}

type QuestionPostRequest = {
    question: string;
}

type QuestionGetResponse = {
    message: string;
}

class ApiClient {
  private axiosInstance: AxiosInstance;

  constructor() {
    this.axiosInstance = axios.create({
      baseURL: 'http://localhost:8000',
    });

    // Add any default headers or interceptors here
  }

  async healthcheck(): Promise<QuestionGetResponse> {
    try {
      const response: AxiosResponse = await this.axiosInstance.get("/");
      return response.data;
    } catch (error: any) {
      this.handleApiError(error);
      throw error;
    }
  }

  // Example POST request
  async getAnswer(data: QuestionPostRequest): Promise<QuestionPostResponse> {
    try {
      const response: AxiosResponse = await this.axiosInstance.post("/get-answer", data);
      return response.data;
    } catch (error: any) {
      this.handleApiError(error);
      throw error;
    }
  }


  private handleApiError(error: AxiosError) {
    console.error('API Error:', error);
  }
}

export default new ApiClient();
