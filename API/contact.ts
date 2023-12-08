import axios from "axios";
import type { serverResponseType } from "~/types/response";

async function sendMessage(
  email: string,
  name: string | null,
  message: string
): Promise<serverResponseType> {
  // calling  the serverless
  const response = await axios.post("/api/contact", {
    email,
    name,
    message,
  });

  return response.data;
}

export default sendMessage;
