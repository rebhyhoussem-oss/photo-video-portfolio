# How to Add Images & Videos — Fully Automatic, Zero Code Edits

**The simplest way:** just upload your file into the matching folder on
GitHub, named the **next number in sequence**. The site scans these
folders automatically at build time — **there is no code to edit, ever**,
for local files. Push it, and it appears live after the next auto-deploy
(about a minute).

**Important — Reels & Campaigns are VIDEO sections.** Upload actual video
files (`.mp4`) there, not images. Photos and Hero remain image-only.

Each folder also has its own `README.md` with the same instructions, in
case you land there directly from GitHub's file browser.

## How to Upload (no coding needed)

1. Go to the repo on GitHub: `github.com/rebhyhoussem-oss/photo-video-portfolio`
2. Open the folder you want (e.g. `public/images/reels`)
3. Click **"Add file" → "Upload files"**
4. Drag in your file, named the next number in sequence (see table below)
5. Click **"Commit changes"** — the live site updates automatically within
   about a minute (no further steps needed, no `media.ts` edit needed)

## Filenames to Use (just pick the next number)

| Folder | Type | Naming pattern | Currently live |
|---|---|---|---|
| `public/images/hero/` | Image | `hero-background.png` (single file, no numbering) | 1 file |
| `public/images/reels/` | **Video** | `reel-01.mp4`, `reel-02.mp4`, `reel-03.mp4`... | 6 files (up to reel-06.mp4) |
| `public/images/campaigns/` | **Video** | `campaign-01.mp4`, `campaign-02.mp4`... | 0 files (add your first) |
| `public/images/photos/` | Image | `photo-01.jpg`, `photo-02.jpg`... | 0 files (add your first) |

**Any image/video file dropped into these folders is picked up
automatically** — the numbering above is just a friendly convention so
items appear in a predictable order (`reel-01`, `reel-02`, ... sorted
numerically). You don't have to fill in every number — uploading straight
to `reel-07.mp4` works fine too. Supported extensions: `.mp4`, `.webm`,
`.mov`, `.m4v` for video; `.jpg`, `.jpeg`, `.png`, `.webp`, `.gif` for
images.

### How the video sections behave

- **Reels**: video plays automatically (muted, looping) when a visitor
  hovers over the card on desktop, or taps it on mobile — like a real
  social feed preview.
- **Campaigns**: clicking a card starts inline playback with normal video
  controls (play/pause, volume, fullscreen) — better for longer commercial
  videos.

---

## Advanced: How Auto-Detection Works (for reference)

Local files are discovered automatically at build time by scanning the
`public/images/reels/`, `public/images/campaigns/`, and
`public/images/photos/` folders — there is no array in `src/data/media.ts`
to edit for local uploads anymore. The code (`src/data/media.ts`) just
detects whether a file is a video (`.mp4`, `.webm`, `.mov`, `.m4v`) or an
image and renders the right player automatically, sorted by filename.

**Removing a file** works the same way in reverse: delete it from the
GitHub folder and it disappears from the live site on the next deploy.

**The only manual editing left** is the optional external-URL lists
(`reelsMediaExternal` / `campaignsMediaExternal` in `src/data/media.ts`)
for oversized videos hosted on Cloudinary/Bunny.net — see the section
below.

## Folder Structure

```
public/images/
├── hero/                  ← Hero section background (image, single file)
│   └── hero-background.png
├── reels/                 ← Social Media Reels (vertical 9:16 VIDEO, auto-discovered)
│   ├── reel-01.mp4
│   ├── reel-02.mp4
│   ├── reel-03.mp4
│   ├── reel-04.mp4
│   ├── reel-05.mp4
│   └── reel-06.mp4
├── campaigns/             ← Brand Campaigns (widescreen 16:9 VIDEO, auto-discovered)
│   └── (drop campaign-01.mp4, campaign-02.mp4, ... here)
└── photos/                ← Photos gallery (mixed aspect ratio IMAGES, auto-discovered)
    └── (drop photo-01.jpg, photo-02.jpg, ... here)
```

## Step-by-Step

### 1. Hero Background (the one section that's still a single fixed file)
- Drop your image into `public/images/hero/`
- Open `src/data/media.ts` and update:
  ```ts
  export const heroMedia = {
    background: {
      src: '/images/hero/your-file-name.jpg',  // ← your filename
      alt: 'Description of the image',
    },
  }
  ```

### 2. Social Media Reels (video) — fully automatic
- Just drop your reel video file into `public/images/reels/`, named the
  next number in sequence (e.g. `reel-07.mp4`)
- Commit on GitHub — no `media.ts` edit needed, it appears on the next
  auto-deploy

### 3. Brand Campaigns (video) — fully automatic
- Just drop your campaign video file into `public/images/campaigns/`,
  named the next number in sequence (e.g. `campaign-01.mp4`)
- Commit on GitHub — no `media.ts` edit needed, it appears on the next
  auto-deploy

### 4. Photos (image) — fully automatic
- Just drop your photo into `public/images/photos/`, named the next
  number in sequence (e.g. `photo-01.jpg`)
- Commit on GitHub — no `media.ts` edit needed, it appears on the next
  auto-deploy

**In every section, adding or removing files automatically adjusts the grid — no code changes needed.**

## Recommended Sizes & Formats

| Section | Type | Recommended Size | Aspect Ratio | Format |
|---------|------|------------------|--------------|--------|
| Hero background | Image | 1792×1024 or wider | 16:9-ish | .jpg, .png, or .webp |
| Social Media Reels | Video | 1080×1920 | 9:16 (vertical) | .mp4 (recommended), .webm, .mov |
| Brand Campaigns | Video | 1600×900 | 16:9 (widescreen) | .mp4 (recommended), .webm, .mov |
| Photos | Image | 1200×1500 minimum | Any (grid adapts) | .jpg, .png, or .webp |

**Tips:**
- Keep video files reasonably sized (reels under ~30MB, campaigns under
  ~50MB) so the site loads fast.
- Use `.webp` for images and `.mp4` (H.264) for video — best performance
  and broadest browser support.

## If a File is Missing

The site gracefully falls back to a styled color placeholder — no broken
media. You can swap files in at any time without breaking the layout.

## Videos Bigger Than 25MB? (GitHub's Upload Limit)

GitHub's drag-and-drop web uploader **rejects files over 25MB**. Real video
files — especially longer Brand Campaign videos — often exceed that. Here
are your two options, easiest first:

### Option A — Compress the video (simplest, no new accounts)

If your video is only slightly over 25MB, compress it and upload as normal:

1. Use a free tool like [Handbrake](https://handbrake.fr/) (desktop app) or
   [FreeConvert](https://www.freeconvert.com/video-compressor) (in-browser,
   no install) — no technical skill needed, just drag your file in and
   download the compressed result.
2. Target under ~20MB for reels (shorter, vertical) and ~25MB for campaigns.
3. Upload the compressed file into `public/images/reels/` or `.../campaigns/`
   using the normal GitHub "Add file → Upload files" steps above.

**Best for:** short/medium clips where a little quality loss is fine.

### Option B — Host the video externally (recommended for longer/higher-quality videos)

Instead of storing the raw video file in GitHub, upload it to a free video
hosting service and use the **link it gives you** as the `src` value in
`src/data/media.ts` — no file size limit, faster loading (proper video
streaming), and still no coding beyond pasting one line.

**Recommended: [Cloudinary](https://cloudinary.com/users/register/free)**
(free tier includes 25 video credits/month, generous for a portfolio site)

1. Create a free Cloudinary account.
2. In the Cloudinary dashboard, click **Media Library → Upload** and upload
   your video file (no size limit on the free tier for individual files
   this size).
3. Click the uploaded video, then copy its **delivery URL** — it looks like:
   ```
   https://res.cloudinary.com/your-cloud-name/video/upload/v1234567890/reel-01.mp4
   ```
4. Open `src/data/media.ts` and paste that full URL into the
   `reelsMediaExternal` (or `campaignsMediaExternal`) list near the bottom
   of the file:
   ```ts
   export const reelsMediaExternal: MediaItem[] = [
     { title: 'Coffee Brand Reel', src: 'https://res.cloudinary.com/your-cloud-name/video/upload/v1234567890/reel-01.mp4', alt: 'Description' },
   ]
   ```
5. Commit that change on GitHub (edit the file directly in GitHub's web UI
   with the pencil icon, or ask us to make the edit) — the site
   auto-deploys and now streams the video from Cloudinary instead of
   storing it in the repo. This is the **only** case where a `media.ts`
   edit is still needed — local file uploads never require it.

**Alternative:** [Bunny.net Stream](https://bunny.net/stream/) works the
same way (upload → copy MP4/HLS URL → paste into `media.ts`) and is a good
option if you outgrow Cloudinary's free tier or want purpose-built video
CDN streaming.

**Why this works with the existing site:** `src/data/media.ts` doesn't care
whether `src` is a local file path or a full `https://...` URL — both
render correctly, since the code just checks the file extension. You can
mix and match: some reels stored locally, others hosted externally.

**Best for:** longer campaign videos, higher-quality/larger files, or if
you plan to update videos often (no need to push to GitHub each time —
just replace the file on Cloudinary and update the URL once).

## Contact Info

The phone number and email in the footer are hardcoded in `src/sections/Footer.tsx`.
To update them, edit the `href="tel:..."` and `href="mailto:..."` values there.
<!-- auto-deploy test -->

