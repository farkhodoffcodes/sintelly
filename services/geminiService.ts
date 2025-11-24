import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";

const API_KEY = process.env.API_KEY || '';

let client: GoogleGenAI | null = null;
let chatSession: Chat | null = null;

export const initializeGemini = () => {
  if (!client && API_KEY) {
    client = new GoogleGenAI({ apiKey: API_KEY });
  }
};

export const getChatSession = (): Chat => {
  if (!client) initializeGemini();
  if (!client) throw new Error("Gemini API Key not found");

  if (!chatSession) {
    chatSession = client.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: `You are Sintelly, a compassionate, warm, and professional mental health AI assistant. 
        Your goal is to listen to the user, provide empathetic support, suggest simple cognitive behavioral therapy (CBT) techniques when appropriate, and maintain a positive, non-judgmental tone. 
        Keep responses concise (under 100 words unless asked for more) and conversational. 
        Do not provide medical diagnoses. If the user expresses self-harm or severe crisis, gently encourage them to seek professional help immediately.`,
        temperature: 0.7,
      },
    });
  }
  return chatSession;
};

export const sendMessageToGemini = async (message: string): Promise<string> => {
  try {
    const chat = getChatSession();
    const result: GenerateContentResponse = await chat.sendMessage({ message });
    return result.text || "I'm listening, please go on.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm having trouble connecting right now. Please try again in a moment.";
  }
};