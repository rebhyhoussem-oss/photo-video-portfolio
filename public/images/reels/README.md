# Social Media Reels — Drop Your Video Files Here

This section plays **real video**, not static images, and is **fully
automatic**: any video file dropped into this folder shows up on the live
site after the next deploy — no code edits needed. Upload your reel video
files directly into this folder using GitHub's web UI ("Add file" →
"Upload files").

## Naming convention (just pick the next number)

Currently live: `reel-01.mp4` through `reel-06.mp4`. To add a new reel,
just upload the next number in sequence:

- `reel-07.mp4`
- `reel-08.mp4`
- ...and so on

Any video file works (it doesn't have to match this exact pattern), but
numbering keeps them in a predictable order on the site.

## How it plays

- Videos autoplay muted and loop when the visitor hovers (desktop) or taps
  (mobile) the card — no controls shown, just a clean preview like a real
  social feed.

## Tips

- Recommended size: 1080×1920 (vertical 9:16, like a real Instagram/TikTok reel)
- Formats supported: `.mp4` (recommended), `.webm`, `.mov`, `.m4v`
- Keep file size reasonable (under ~30MB per video) for fast loading
- Adding, renaming, or removing a file in this folder automatically
  updates the live site on the next deploy — no `media.ts` edit needed
- Want more or fewer reels? Just add/remove files here — the layout
  adjusts automatically

## Video too big to upload here? (GitHub's 25MB limit)

GitHub's web upload rejects files over 25MB. See **"Videos Bigger Than
25MB?"** in the root `IMAGE-SWAP-GUIDE.md` for two easy fixes: compress the
video, or host it free on Cloudinary/Bunny.net and paste the link into the
`reelsMediaExternal` list in `src/data/media.ts` instead of uploading the
file here.
