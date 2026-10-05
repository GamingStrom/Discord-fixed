const { aiApiUrl, aiApiKey, aiModel } = require("./config");

async function ask(prompt) {
  if (!aiApiUrl || !aiApiKey) {
    return `AI is not configured yet. Your prompt was: "${prompt}"`;
  }

  const response = await fetch(aiApiUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${aiApiKey}`
    },
    body: JSON.stringify({
      model: aiModel || undefined,
      messages: [
        {
          role: "system",
          content: "You are a helpful Discord community assistant. Help with questions, writing and spelling."
        },
        { role: "user", content: prompt }
      ]
    })
  });

  if (!response.ok) throw new Error(`AI HTTP ${response.status}`);
  const json = await response.json();
  return json?.choices?.[0]?.message?.content || "No answer returned.";
}

module.exports = { ask };
