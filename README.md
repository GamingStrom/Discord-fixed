# Discord Everything Bot — Railway Ready

This version is intentionally flat so Railway can start it with `node index.js`.

## Root files
package.json, index.js, config.js, store.js, ai.js, image.js, music.js, social.js, moderation.js, invites.js, tickets.js

## Railway
1. Upload these files to the root of the GitHub repository.
2. Railway -> New Project -> GitHub Repository.
3. Select this repository.
4. Railway runs `npm start`.
5. In Railway Variables add:
   DISCORD_TOKEN
   CLIENT_ID
   GUILD_ID
   OWNER_ID
6. Redeploy.

Never upload `.env` or real API keys to GitHub.
