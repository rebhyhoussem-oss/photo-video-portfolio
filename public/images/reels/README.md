# Social Media Reels — Drop Your Video Files Here

This section now plays **real video**, not static images. Upload your reel
video files directly into this folder using GitHub's web UI ("Add file" →
"Upload files").

## Exact filenames expected (name your files exactly like this):

- `reel-01.mp4`
- `reel-02.mp4`
- `reel-03.mp4`
- `reel-04.mp4`

## How it plays

- Videos autoplay muted and loop when the visitor hovers (desktop) or taps
  (mobile) the card — no controls shown, just a clean preview like a real
  social feed.

## Tips

- Recommended size: 1080×1920 (vertical 9:16, like a real Instagram/TikTok reel)
- Formats supported: `.mp4` (recommended), `.webm`, `.mov`, `.m4v`
- Keep file size reasonable (under ~30MB per video) for fast loading
- If your file has a different extension, update the matching `src` path in
  `src/data/media.ts` to match (e.g. `reel-01.webm`)
- Want more or fewer reels? Add/remove entries in `src/data/media.ts` — the
  layout adjusts automatically
- No layout code needs to change — just replace these files and push

## Video too big to upload here? (GitHub's 25MB limit)

GitHub's web upload rejects files over 25MB. See **"Videos Bigger Than
25MB?"** in the root `IMAGE-SWAP-GUIDE.md` for two easy fixes: compress the
video, or host it free on Cloudinary/Bunny.net and paste the link into
`src/data/media.ts` instead of uploading the file here.
