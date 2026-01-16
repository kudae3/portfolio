import { InferenceClient } from "@huggingface/inference";
import { config } from "dotenv";

config();
const client = new InferenceClient(process.env.HF_TOKEN);

/**
 * Embed a single text string using HuggingFace sentence-transformers
 */
export async function embedText(text: string): Promise<number[]> {
  try {
    const embedding = await client.featureExtraction({
      model: "sentence-transformers/all-MiniLM-L6-v2",
      inputs: text,
    });

    // Handle different response formats
    if (Array.isArray(embedding)) {
      // If it's already a flat array of numbers
      if (typeof embedding[0] === "number") {
        return embedding as number[];
      }
      // If it's a nested array, flatten it
      return embedding.flat() as number[];
    }

    throw new Error("Unexpected embedding format");
  } catch (error) {
    console.error("Error embedding text:", error);
    throw error;
  }
}

/**
 * Embed multiple texts in batch
 */
export async function embedBatch(texts: string[]): Promise<number[][]> {
  const embeddings = await Promise.all(texts.map((text) => embedText(text)));
  return embeddings;
}
