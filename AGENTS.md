# Instructions for Codex

## Project scope

This file applies to the Shitangwan literary website.

Repository: `encwgwg/2ndWebpageTrial`  
Working branch: `shitangwan-site`  
Live site: https://shitangwan-memories.onrender.com/

Do not modify or merge into the repository's `main` branch unless the user
explicitly requests it.

## Content rules

- The source of truth is the owner's Google Drive:
  `misc` → Google Doc `old_articles`.
- Compare the source document with the current website before updating.
- Preserve the author's original wording, spelling and punctuation.
- Never silently correct uncertain or apparently incorrect source text.
- Ask the user when the intended text, title, category or date is unclear.
- Use supplied images when available.
- Do not generate or source replacement images without user approval.

For every added or changed work, update all applicable elements:

- table of contents;
- poem or article count;
- HTML anchor and element ID;
- title and category;
- publication or writing date;
- image path, dimensions, caption and alternative text;
- metadata when appropriate.

## Design and accessibility

- Preserve the existing Jiangnan/石塘湾 visual style.
- Maintain large, readable Chinese text for elderly readers.
- Preserve the font-size controls.
- Maintain keyboard navigation, adequate contrast and semantic HTML.
- Check desktop and mobile layouts for clipping and horizontal scrolling.

## Technical restrictions

- Keep the website static unless the user explicitly requests a new
  server-side capability.
- Prefer HTML, CSS and plain JavaScript.
- Store required images, fonts and other assets within the repository.
- Do not add Google Fonts, Google Analytics, remote Google Drive assets,
  or runtime dependencies that may be blocked in mainland China.
- Do not add passwords, tokens, credentials or private personal information.
- Keep GitHub and Render entirely within their free tiers.
- Do not create paid services, databases or chargeable Render resources.

## Testing and publication

- Test internal links, anchors, image paths and font-size controls.
- Check representative desktop and mobile layouts before publication.
- Treat a push to `shitangwan-site` as a public release because Render may
  deploy it automatically.
- Do not push unless the user explicitly requests publishing or the current
  request clearly includes publication.
- Commit only to `shitangwan-site` with a descriptive commit message.
- After deployment, verify the live page and important navigation.
- If verification fails, diagnose the problem or restore the last verified
  Git commit.
- Update `README.md` and this file if the architecture or workflow changes.
