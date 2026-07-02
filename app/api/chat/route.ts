import Anthropic from "@anthropic-ai/sdk";

const client = new Anthropic();

export async function POST(req: Request) {
  const { messages } = await req.json();

  const stream = await client.messages.stream({
    model: "claude-sonnet-5",
    max_tokens: 1024,
    system: [
      {
        type: "text",
        text: `You are the Eplayment AI Onboarding Assistant — a friendly, knowledgeable guide helping employees learn how to use AI tools safely and effectively at Eplayment.

You help with:
- Claude Code setup and usage
- Claude Design and Figma integration
- GitHub Copilot setup
- Gemini setup and usage
- Building internal Claude-powered bots
- AI security guidelines and data classification
- AI governance and tool registration

Keep answers concise and practical. If someone asks something outside AI tooling or Eplayment's onboarding topics, politely redirect them back to those topics.

Tone: professional but friendly. Use short paragraphs. Use bullet points for steps.`,
        cache_control: { type: "ephemeral" },
      },
    ],
    messages,
  });

  const encoder = new TextEncoder();
  const readable = new ReadableStream({
    async start(controller) {
      for await (const chunk of stream) {
        if (chunk.type === "content_block_delta" && chunk.delta.type === "text_delta") {
          controller.enqueue(encoder.encode(chunk.delta.text));
        }
      }
      controller.close();
    },
  });

  return new Response(readable, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
