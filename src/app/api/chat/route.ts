import { NextRequest, NextResponse } from "next/server";
import { HfInference } from "@huggingface/inference";

export async function POST(request: NextRequest) {
  try {
    const { message } = await request.json();

    if (!message || typeof message !== "string") {
      return NextResponse.json(
        { error: "Message is required" },
        { status: 400 }
      );
    }

    if (!process.env.HF_TOKEN) {
      return NextResponse.json(
        { error: "HF_TOKEN not configured" },
        { status: 500 }
      );
    }

    const client = new HfInference(process.env.HF_TOKEN);

    // System prompt to make the bot knowledgeable about Kudae
    const systemPrompt = `You are KudaeBot, an AI assistant for Kudae's portfolio website. 
You are helpful, friendly, and knowledgeable about Kudae's work and projects. 
Keep responses concise and professional. If you don't know something specific about Kudae, 
be honest and suggest they can contact Kudae directly for more information.`;

    const chatCompletion = await client.chatCompletion({
      model: "meta-llama/Llama-3.2-1B-Instruct",
      messages: [
        {
          role: "system",
          content: systemPrompt,
        },
        {
          role: "user",
          content: message,
        },
      ],
      max_tokens: 500,
      temperature: 0.7,
    });

    const reply =
      chatCompletion.choices[0]?.message?.content ||
      "I'm sorry, I couldn't generate a response.";

    return NextResponse.json({ reply });
  } catch (error: unknown) {
    console.error("Chat API Error:", error);
    const errorMessage =
      error instanceof Error ? error.message : "Failed to generate response";
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}
