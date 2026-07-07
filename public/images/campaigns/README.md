# Brand Campaigns — Drop Your Video Files Here

This section now plays **real video**, not static images. Upload your
campaign video files directly into this folder using GitHub's web UI
("Add file" → "Upload files").

## Exact filenames expected (name your files exactly like this):

- `campaign-01.mp4`
- `campaign-02.mp4`
- `campaign-03.mp4`

## How it plays

- Clicking a card starts inline playback with standard video controls
  (play/pause, volume, fullscreen) — good for longer commercial-style videos.

## Tips

- Recommended size: 1600×900 (widescreen 16:9)
- Formats supported: `.mp4` (recommended), `.webm`, `.mov`, `.m4v`
- Keep file size reasonable (under ~50MB per video) for fast loading
- If your file has a different extension, update the matching `src` path in
  `src/data/media.ts` to match (e.g. `campaign-01.webm`)
- Want more or fewer campaigns? Add/remove entries in `src/data/media.ts` —
  the layout adjusts automatically
- No layout code needs to change — just replace these files and push
