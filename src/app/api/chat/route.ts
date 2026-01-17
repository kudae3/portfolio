import { NextRequest, NextResponse } from "next/server";
import { HfInference } from "@huggingface/inference";
import { CloudClient } from "chromadb";
import { embedText } from "../trasnsformer/embed";

const COLLECTION_NAME = "portfolio_knowledge";

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

    // Initialize clients
    const hfClient = new HfInference(process.env.HF_TOKEN);
    const chromaClient = new CloudClient({
      apiKey: process.env.CHROMA_API_KEY,
      tenant: process.env.CHROMA_TENANT,
      database: process.env.CHROMA_DATABASE,
    });

    // Step 1: Embed the user's question using the same model
    console.log("🔍 Embedding user question...");
    const queryEmbedding = await embedText(message);

    // Step 2: Query ChromaDB for relevant documents
    console.log("📚 Searching knowledge base...");
    const collection = await chromaClient.getCollection({
      name: COLLECTION_NAME,
    });

    const results = await collection.query({
      queryEmbeddings: [queryEmbedding],
      nResults: 5, // Get top 5 most relevant documents
    });

    // Step 3: Build context from retrieved documents
    const relevantDocs = results.documents[0].filter((doc) => doc !== null);
    const context = relevantDocs.join("\n\n");

    console.log(`✅ Found ${relevantDocs.length} relevant documents`);

    // Step 4: Create RAG-enhanced system prompt with context
    const systemPrompt = `You are KudaeBot, Kudae Sithu's AI assistant. Answer questions using the context below.

CONTEXT:
${context}

RULES:
- Keep answers SHORT (1-2 sentences max)
- End with ONE short, natural follow-up question (max 8 words)
- If context doesn't have the info, say "I don't have that info, but you can contact Kudae via the form on this site"
- Be conversational and friendly
- Never say "Here's a follow-up question"

FOLLOW-UP EXAMPLES:
"Want to know about his projects?"
"Curious about his tech stack?"
"Interested in his experience?"
"Would you like to see his work?"`;

    const chatCompletion = await hfClient.chatCompletion({
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

    return NextResponse.json({
      reply,
      sourcesCount: relevantDocs.length,
    });
  } catch (error: unknown) {
    console.error("Chat API Error:", error);
    const errorMessage =
      error instanceof Error ? error.message : "Failed to generate response";
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}
