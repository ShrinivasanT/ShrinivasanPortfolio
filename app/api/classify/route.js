import { ROUTER } from "@/data/router";

// Sorts a typed question into a portfolio section with Jev (via OpenRouter).
// Replies { intent } on success, or { intent: null } so the client falls back
// to keyword matching when Jev is unavailable.
export async function POST(req) {
  let text;
  try {
    ({ text } = await req.json());
  } catch {
    return Response.json({ error: "Invalid JSON" }, { status: 400 });
  }
  if (typeof text !== "string" || !text.trim()) return Response.json({ error: "Missing text" }, { status: 400 });
  if (text.length > ROUTER.maxChars) return Response.json({ error: `Keep it under ${ROUTER.maxChars} characters` }, { status: 413 });

  const key = process.env.OPENROUTER_KEY;
  if (!key) return Response.json({ intent: null, reason: "no-key" });

  try {
    const res = await fetch("https://openrouter.ai/api/v1/systemone", {
      method: "POST",
      headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        model: ROUTER.model,
        state: text.trim(),
        questions: { section: { type: "choice", instructions: ROUTER.instructions, criteria: ROUTER.criteria } },
      }),
      signal: AbortSignal.timeout(ROUTER.timeoutMs),
    });
    if (!res.ok) return Response.json({ intent: null, reason: `jev-${res.status}` });

    const answer = (await res.json())?.answers?.section;
    if (!answer?.choice || !(answer.choice in ROUTER.criteria)) return Response.json({ intent: null, reason: "bad-answer" });

    const confidence = answer.confidence ?? 0;
    const intent = answer.choice === "vague" || confidence < ROUTER.threshold ? "vague" : answer.choice;
    return Response.json({ intent, choice: answer.choice, confidence });
  } catch (e) {
    return Response.json({ intent: null, reason: e?.name === "TimeoutError" ? "timeout" : "error" });
  }
}
