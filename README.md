# Shitangwan Memories — 石塘湾旧事

## Purpose

This website preserves poems and articles written by a person born in
Shitangwan (石塘湾), Wuxi, Jiangsu, China, in 1941.

He grew up in Shitangwan and lived there until approximately 1965, when
he left to attend university. His writings mainly recall the people,
places and experiences of his early life in the Jiangnan countryside.

The website is intended as a readable, long-term family literary archive,
especially for older Chinese readers.

## Content source

The original poems, articles and available pictures are stored in the
owner's Google Drive:

`misc` → Google Doc `old_articles`

The Google Doc is the source of truth for the written content.

## Website and hosting

- GitHub repository: `encwgwg/2ndWebpageTrial`
- Website branch: `shitangwan-site`
- Published by: Render
- Live website: https://shitangwan-memories.onrender.com/
- Architecture: static HTML, CSS, JavaScript and locally stored images
- GitHub and Render must remain on their free tiers.

## Updating the website

1. Add a new poem, article or picture to the Google Doc `old_articles`.
2. Ask ChatGPT/Codex to update the Shitangwan website.
3. Compare the Google Doc with the existing website and identify only
   new or changed content.
4. Add the new text, writing date and available picture.
5. Update:
   - the table of contents;
   - poem and article counts;
   - page anchors and navigation;
   - image alternative text;
   - responsive and large-font layouts.
6. Preview and test the updated website.
7. Obtain publication confirmation unless the user has already explicitly
   requested publishing.
8. Commit only to the GitHub branch `shitangwan-site`.
9. Render will automatically redeploy if Auto-Deploy remains enabled.
10. Verify the live website after deployment.

## Editorial principles

- Preserve the author's original wording, spelling and punctuation.
- Do not silently correct questionable text.
- If the source is unclear, ask the user before changing it.
- Use supplied pictures when available.
- Ask before generating or sourcing a picture when none is supplied.
- Preserve the existing Jiangnan/Shitangwan visual character.
- Maintain large fonts, strong contrast and elderly-reader accessibility.
- Keep required website assets locally in the repository.
- Do not depend on Google Fonts, Google Analytics, Google Drive image URLs
  or other runtime services that may be inaccessible in mainland China.
- Do not store passwords, access tokens or other credentials in the repository.

## Version history and rollback

Every published update should have a clear Git commit message. If an update
causes a problem, restore the last verified commit and redeploy it.
