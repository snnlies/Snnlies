import { NextResponse } from 'next/server';
import { GoogleGenerativeAI } from "@google/generative-ai";

export async function POST(req: Request) {
  try {
    const { message } = await req.json();
    if (!process.env.GEMINI_API_KEY) return NextResponse.json({ error: "Missing GEMINI_API_KEY in Vercel" }, { status: 500 });

    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    const systemPrompt = "You are Snnlies AI. You only answer questions related to Discord server setup, Snnlies templates, and Discord automation. Keep answers short, clean, and professional.";
    
    // Using the exact model from the error message
    const model = genAI.getGenerativeModel({ model: "gemini-3.8-flash", systemInstruction: systemPrompt });
    const result = await model.generateContent(message);
    const response = await result.response;

    return NextResponse.json({ reply: response.text() });
  } catch (error: any) {
    console.error("AI Error:", error);
    return NextResponse.json({ error: error.message || "AI failed to respond." }, { status: 500 });
  }
}
