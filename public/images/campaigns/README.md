# Brand Campaigns — Drop Your Video Files Here

This section plays **real video**, not static images, and is **fully
automatic**: any video file dropped into this folder shows up on the live
site after the next deploy — no code edits needed. Upload your campaign
video files directly into this folder using GitHub's web UI ("Add file" →
"Upload files").

## Naming convention (just pick the next number)

No campaigns uploaded yet. To add your first, upload:

- `campaign-01.mp4`
- `campaign-02.mp4`
- ...and so on

Any video file works (it doesn't have to match this exact pattern), but
numbering keeps them in a predictable order on the site.

## How it plays

- Clicking a card starts inline playback with standard video controls
  (play/pause, volume, fullscreen) — good for longer commercial-style videos.

## Tips

- Recommended size: 1600×900 (widescreen 16:9)
- Formats supported: `.mp4` (recommended), `.webm`, `.mov`, `.m4v`
- Keep file size reasonable (under ~50MB per video) for fast loading
- Adding, renaming, or removing a file in this folder automatically
  updates the live site on the next deploy — no `media.ts` edit needed
- Want more or fewer campaigns? Just add/remove files here — the layout
  adjusts automatically

## Video too big to upload here? (GitHub's 25MB limit)

GitHub's web upload rejects files over 25MB — likely for longer campaign
videos. See **"Videos Bigger Than 25MB?"** in the root
`IMAGE-SWAP-GUIDE.md` for two easy fixes: compress the video, or host it
free on Cloudinary/Bunny.net and paste the link into the
`campaignsMediaExternal` list in `src/data/media.ts` instead of uploading
the file here.
