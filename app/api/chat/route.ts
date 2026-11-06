import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { message } = await req.json();
    
    // Check if API key exists
    if (!process.env.GEMINI_API_KEY) {
      return NextResponse.json({ error: "Gemini API key not configured in Vercel." }, { status: 500 });
    }

    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    // System prompt to make the AI act like a server architect
    const prompt = `You are Snnlies AI, an expert Discord server architect. The user is asking you to build a server. Respond professionally and concisely. If they ask for a specific type of server (like gaming, crypto, etc.), confirm you have generated the layout. Do not output raw JSON, just respond naturally.\n\nUser: ${message}`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    return NextResponse.json({ reply: text });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "AI failed to respond." }, { status: 500 });
  }
}
