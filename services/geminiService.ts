import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || '';
// Initialize safe client
const ai = apiKey ? new GoogleGenAI({ apiKey }) : null;

/**
 * Uses Gemini Flash to generate a quick business strategy based on user input.
 */
export const generateStrategy = async (userGoal: string): Promise<string> => {
  if (!ai) {
    throw new Error("API Key not configured");
  }

  try {
    const model = 'gemini-2.5-flash';
    const systemPrompt = `You are the AI Assistant for NexusFlow, a premium digital transformation agency. 
    Our products are:
    1. Studio Pro (Design & Dev tools)
    2. Creator Suite (Content generation)
    3. Enterprise Cloud (Scalable infrastructure)
    
    The user will provide a business goal. You must recommend which NexusFlow products help them and suggest a 3-step strategy.
    Keep the tone professional, futuristic, and concise (max 150 words). Format with bullet points.`;

    const response = await ai.models.generateContent({
      model: model,
      contents: userGoal,
      config: {
        systemInstruction: systemPrompt,
        temperature: 0.7,
      }
    });

    return response.text || "Unable to generate strategy at this time.";
  } catch (error) {
    console.error("Gemini Error:", error);
    throw error;
  }
};
