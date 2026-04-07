"use server";

import {
  assertWallArtQuotaAvailable,
  recordWallArtGeneration,
  type WallArtQuotaPublic,
} from "@/lib/wall-art-quota";
import { z } from "zod";

const wallArtSchema = z.object({
  prompt: z
    .string()
    .trim()
    .min(15, "Describe your idea in at least 15 characters.")
    .max(3500, "Keep the prompt under 3,500 characters."),
  size: z.enum(["1792x1024", "1024x1024", "1024x1792"]),
  styleHint: z.string().trim().max(300).optional(),
});

export type WallArtState =
  | { status: "idle" }
  | { status: "success"; imageUrl: string; revisedPrompt?: string; quota: WallArtQuotaPublic }
  | { status: "error"; message: string };

type OpenAIImageResponse = {
  data?: Array<{ url?: string; revised_prompt?: string }>;
  error?: { message?: string };
};

export async function generateWallArtImage(
  _prev: WallArtState,
  formData: FormData,
): Promise<WallArtState> {
  const hp = String(formData.get("_art_hp") ?? "");
  if (hp.length > 0) {
    return { status: "idle" };
  }

  const parsed = wallArtSchema.safeParse({
    prompt: formData.get("prompt"),
    size: formData.get("size") ?? "1792x1024",
    styleHint: formData.get("styleHint") || undefined,
  });

  if (!parsed.success) {
    return {
      status: "error",
      message: parsed.error.issues.map((i) => i.message).join(" "),
    };
  }

  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    return {
      status: "error",
      message:
        "This idea tool isn’t available right now. Use the contact form with a short description—we’ll help with artwork.",
    };
  }

  const quotaCheck = await assertWallArtQuotaAvailable();
  if (!quotaCheck.ok) {
    return { status: "error", message: quotaCheck.message };
  }

  const { prompt, size, styleHint } = parsed.data;
  const styled = styleHint ? `${prompt}\n\nStyle / mood: ${styleHint}` : prompt;
  const muralPrompt =
    `Large-format interior wall mural or feature-wall graphic for a professional space in Seattle. ` +
    `Print-inspired, cohesive composition, suitable for wide-format UV or direct wall printing. ` +
    `Avoid small illegible text or cluttered borders unless requested. ` +
    `Concept:\n${styled}`.slice(0, 4000);

  let res: Response;
  try {
    res = await fetch("https://api.openai.com/v1/images/generations", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "dall-e-3",
        prompt: muralPrompt,
        n: 1,
        size,
        quality: "standard",
        response_format: "url",
      }),
    });
  } catch {
    return {
      status: "error",
      message: "Could not reach the image service. Try again in a moment.",
    };
  }

  const json = (await res.json().catch(() => ({}))) as OpenAIImageResponse;

  if (!res.ok) {
    const msg = json.error?.message ?? "Generation failed. Try simplifying or reframing your prompt.";
    return { status: "error", message: msg };
  }

  const url = json.data?.[0]?.url;
  const revisedPrompt = json.data?.[0]?.revised_prompt;
  if (!url) {
    return { status: "error", message: "No image was returned. Try again with a different description." };
  }

  const quota = await recordWallArtGeneration();

  return {
    status: "success",
    imageUrl: url,
    revisedPrompt: revisedPrompt ?? undefined,
    quota,
  };
}
