import { CloudClient } from "chromadb";
import { config } from "dotenv";
import { portfolioKnowledge } from "../src/app/api/knowledge/knowledge";
import { embedBatch } from "../src/app/api/trasnsformer/embed";

config();
const COLLECTION_NAME = "portfolio_knowledge";

async function seedChromaDB() {
  console.log("🚀 Starting ChromaDB seeding...");

  // Check for required environment variables
  if (!process.env.CHROMA_API_KEY) {
    throw new Error("CHROMA_API_KEY environment variable is required");
  }
  if (!process.env.HF_TOKEN) {
    throw new Error("HF_TOKEN environment variable is required");
  }

  try {
    // Initialize ChromaDB client
    const client = new CloudClient({
      apiKey: process.env.CHROMA_API_KEY,
      tenant: process.env.CHROMA_TENANT,
      database: process.env.CHROMA_DATABASE,
    });

    console.log("✅ Connected to ChromaDB");

    // Get or create collection
    const collection = await client.getOrCreateCollection({
      name: COLLECTION_NAME,
      metadata: {
        description: "Portfolio knowledge base for RAG",
        model: "sentence-transformers/all-MiniLM-L6-v2",
      },
    });

    console.log(`✅ Collection "${COLLECTION_NAME}" ready`);

    // Prepare data
    const ids = portfolioKnowledge.map((entry) => entry.id);
    const documents = portfolioKnowledge.map((entry) => entry.content);
    const metadatas = portfolioKnowledge.map((entry) => ({
      category: entry.category,
    }));

    console.log(`📝 Embedding ${documents.length} documents...`);

    // Generate embeddings using HuggingFace
    const embeddings = await embedBatch(documents);

    console.log(`✅ Generated ${embeddings.length} embeddings`);

    // Store in ChromaDB
    await collection.add({
      ids,
      embeddings,
      documents,
      metadatas,
    });

    console.log(
      `✅ Successfully seeded ${documents.length} documents to ChromaDB!`
    );
    console.log("\n📊 Summary:");
    console.log(`   - Collection: ${COLLECTION_NAME}`);
    console.log(`   - Documents: ${documents.length}`);
    console.log(`   - Model: sentence-transformers/all-MiniLM-L6-v2`);

    // Verify by counting
    const count = await collection.count();
    console.log(`   - Verified count: ${count}`);
  } catch (error) {
    console.error("❌ Error seeding ChromaDB:", error);
    throw error;
  }
}

// Run the seeding
seedChromaDB()
  .then(() => {
    console.log("\n✨ Seeding completed successfully!");
    process.exit(0);
  })
  .catch((error) => {
    console.error("\n💥 Seeding failed:", error);
    process.exit(1);
  });
