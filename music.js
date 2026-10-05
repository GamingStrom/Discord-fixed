const { musicApiUrl, musicApiKey } = require("./config");

async function action(type, query) {
  if (!musicApiUrl || !musicApiKey) {
    return "Music integration is not configured.";
  }

  const response = await fetch(musicApiUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${musicApiKey}`
    },
    body: JSON.stringify({ action: type, query })
  });

  if (!response.ok) throw new Error(`Music API HTTP ${response.status}`);
  const json = await response.json();
  return json?.message || `Music action "${type}" completed.`;
}

module.exports = { action };
