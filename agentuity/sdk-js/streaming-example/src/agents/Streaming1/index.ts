import type { AgentRequest, AgentResponse, AgentContext } from "@agentuity/sdk";
import { streamText } from "ai";
import { openai } from "@ai-sdk/openai";

export default async function Agent(
	req: AgentRequest,
	resp: AgentResponse,
	ctx: AgentContext,
) {
	const res = await streamText({
		model: openai("gpt-4o"),
		system: "You are a friendly assistant!",
		prompt: await req.data.text() ?? "Why is the sky blue?",
	});
	
	return resp.stream(res.textStream);
}
