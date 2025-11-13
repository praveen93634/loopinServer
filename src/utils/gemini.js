import dotenv from 'dotenv';
dotenv.config();
import { GoogleGenAI } from "@google/genai";

// The client gets the API key from the environment variable `GEMINI_API_KEY`.
const ai = new GoogleGenAI(process.env.GEMINI_API_KEY);

export const main=async()=>{
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: "what is node.js",
  });
  console.log(response.text);
}

main();