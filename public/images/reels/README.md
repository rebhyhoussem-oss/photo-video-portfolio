# Social Media Reels — Drop Your Files Here

Upload your reel thumbnail images directly into this folder using GitHub's
web UI ("Add file" → "Upload files").

## Exact filenames expected (name your files exactly like this):

- `reel-01.jpg`
- `reel-02.jpg`
- `reel-03.jpg`
- `reel-04.jpg`

## Tips

- Recommended size: 1080×1920 (vertical 9:16, like a real Instagram/TikTok reel)
- Formats supported: `.jpg`, `.png`, `.webp` (`.webp` loads fastest)
- If your file is `.png` or `.webp` instead of `.jpg`, update the matching
  `src` path in `src/data/media.ts` to match (e.g. `reel-01.png`)
- Want more or fewer reels? Add/remove entries in `src/data/media.ts` — the
  layout adjusts automatically
- No layout code needs to change — just replace these files and push
