import type { AgentRequest, AgentResponse, AgentContext } from "@agentuity/sdk";
import { generateText } from "ai";
import { openai } from "@ai-sdk/openai";

export default async function Agent(
  req: AgentRequest,
  resp: AgentResponse,
  ctx: AgentContext,
) {
  try {
    // Get the prompt from the request or use a default
    const prompt = await req.data.text() ?? "Why is the sky blue?";
    
    // Log the incoming prompt
    ctx.logger.info(`Processing prompt: ${prompt}`);
    
    // Generate text using OpenAI via Vercel AI SDK
    const res = await generateText({
      model: openai("gpt-4o-mini"),
      system: "You are a helpful, friendly assistant that provides accurate and concise information.",
      prompt: prompt,
    });
    
    // Log the completion of the request
    ctx.logger.info("Successfully generated response");
    
    // Return the generated text
    return resp.text(res.text);
  } catch (error) {
    // Log any errors
    ctx.logger.error("Error generating text with OpenAI", error);
    
    // Return an error message
    return resp.status(500).text(
      "Sorry, I encountered an error while generating a response. Please try again later."
    );
  }
}
