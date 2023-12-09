import axios from "axios";
import type { serverResponse } from "~/types/response";

interface MessageType {
  email: string;
  name: string | null;
  message: string;
}

async function sendMessage(message: MessageType): Promise<serverResponse> {
  // calling  the serverless
  try {
    const response = await axios.post("/api/contact", { ...message });
    return response.data;
  } catch (e: any) {
    return {
      success: false,
      message: e.message,
      payload: null,
    };
  }
}

export default sendMessage;
