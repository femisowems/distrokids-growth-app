import OpenAI from 'openai';
import { z } from 'zod';

const generationSchema = z.object({
  title: z.string(),
  body: z.string(),
  tone: z.string(),
  cta: z.string().optional()
});

export type AIRequest = {
  prompt: string;
  tone: string;
  outputType: 'caption' | 'seo' | 'email' | 'hook' | 'strategy';
  audience: string;
};

export async function generateMarketingAsset(request: AIRequest) {
  if (!process.env.OPENAI_API_KEY) {
    return {
      title: `AI ${request.outputType} draft`,
      body: `Mock output for ${request.outputType} targeting ${request.audience}. Prompt: ${request.prompt}`,
      tone: request.tone,
      cta: 'Refine and publish'
    };
  }

  const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

  const response = await client.responses.create({
    model: 'gpt-4.1-mini',
    input: [
      {
        role: 'system',
        content: 'You are a growth strategist for music marketing systems. Return concise, conversion-aware copy.'
      },
      {
        role: 'user',
        content: `Create a ${request.outputType} in a ${request.tone} tone for ${request.audience}. ${request.prompt}`
      }
    ],
    text: {
      format: {
        type: 'json_schema',
        name: 'marketing_asset',
        schema: {
          type: 'object',
          additionalProperties: false,
          properties: {
            title: { type: 'string' },
            body: { type: 'string' },
            tone: { type: 'string' },
            cta: { type: 'string' }
          },
          required: ['title', 'body', 'tone', 'cta']
        }
      }
    }
  });

  const raw = response.output_text ?? '{}';
  return generationSchema.parse(JSON.parse(raw));
}

export function buildPrompt(outputType: AIRequest['outputType'], subject: string, angle: string) {
  return `${outputType.toUpperCase()}: ${subject}. Angle: ${angle}. Focus on conversion and fan intent.`;
}
