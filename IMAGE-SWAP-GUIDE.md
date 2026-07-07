# How to Replace Images & Videos with Your Real Content

**The simplest way:** just name your files exactly as listed below and
upload them into the matching folder on GitHub. If you use the exact
filenames, **you don't need to edit any code at all** — the site will pick
them up automatically on the next deploy.

**Important — Reels & Campaigns are now VIDEO sections.** Upload actual
video files (`.mp4`) there, not images. Photos and Hero remain image-only.

Each folder also has its own `README.md` with the same instructions, in
case you land there directly from GitHub's file browser.

## How to Upload (no coding needed)

1. Go to the repo on GitHub: `github.com/rebhyhoussem-oss/photo-video-portfolio`
2. Open the folder you want (e.g. `public/images/reels`)
3. Click **"Add file" → "Upload files"**
4. Drag in your file(s), named exactly as shown in the table below
5. Click **"Commit changes"** — the live site updates automatically within
   about a minute (no further steps needed)

## Exact Filenames Expected

| Folder | Type | Files to upload |
|---|---|---|
| `public/images/hero/` | Image | `hero-background.png` |
| `public/images/reels/` | **Video** | `reel-01.mp4`, `reel-02.mp4`, `reel-03.mp4`, `reel-04.mp4` |
| `public/images/campaigns/` | **Video** | `campaign-01.mp4`, `campaign-02.mp4`, `campaign-03.mp4` |
| `public/images/photos/` | Image | `photo-01.jpg`, `photo-02.jpg`, `photo-03.jpg`, `photo-04.jpg`, `photo-05.jpg`, `photo-06.jpg` |

Uploading a file with one of these exact names **replaces** the existing
placeholder automatically — no code edits needed.

### How the video sections behave

- **Reels**: video plays automatically (muted, looping) when a visitor
  hovers over the card on desktop, or taps it on mobile — like a real
  social feed preview.
- **Campaigns**: clicking a card starts inline playback with normal video
  controls (play/pause, volume, fullscreen) — better for longer commercial
  videos.

---

## Advanced: Using Different Filenames or Adding More Items

If you'd rather use your own filenames, or want to add/remove items, all
image/video paths are controlled from **one file**: `src/data/media.ts`.
That file auto-detects whether a `src` is a video (`.mp4`, `.webm`, `.mov`,
`.m4v`) or an image and renders the right player automatically.

## Folder Structure

```
public/images/
├── hero/                  ← Hero section background (image)
│   └── hero-background.png
├── reels/                 ← Social Media Reels (vertical 9:16 VIDEO)
│   ├── reel-01.mp4
│   ├── reel-02.mp4
│   ├── reel-03.mp4
│   └── reel-04.mp4
├── campaigns/             ← Brand Campaigns (widescreen 16:9 VIDEO)
│   ├── campaign-01.mp4
│   ├── campaign-02.mp4
│   └── campaign-03.mp4
└── photos/                ← Photos gallery (mixed aspect ratio IMAGES)
    ├── photo-01.jpg
    ├── photo-02.jpg
    ├── photo-03.jpg
    ├── photo-04.jpg
    ├── photo-05.jpg
    └── photo-06.jpg
```

## Step-by-Step

### 1. Hero Background
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

### 2. Social Media Reels (video)
- Drop your reel video files into `public/images/reels/`
- Open `src/data/media.ts` and update the `reelsMedia` array:
  ```ts
  export const reelsMedia: MediaItem[] = [
    { title: 'Coffee Brand Reel', src: '/images/reels/your-reel.mp4', alt: 'Description' },
    // ...add or remove items freely
  ]
  ```

### 3. Brand Campaigns (video)
- Drop your campaign video files into `public/images/campaigns/`
- Open `src/data/media.ts` and update the `campaignsMedia` array:
  ```ts
  export const campaignsMedia: MediaItem[] = [
    { title: 'Summer Launch', src: '/images/campaigns/your-campaign.mp4', alt: 'Description' },
    // ...add or remove items freely
  ]
  ```

### 4. Photos (image)
- Drop your photos into `public/images/photos/`
- Open `src/data/media.ts` and update the `photosMedia` array:
  ```ts
  export const photosMedia: MediaItem[] = [
    { title: 'Editorial Portrait', src: '/images/photos/your-photo.jpg', alt: 'Description' },
    // ...add or remove items freely
  ]
  ```

**In every section, adding or removing array entries automatically adjusts the grid — no layout code changes needed.**

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

## Contact Info

The phone number and email in the footer are hardcoded in `src/sections/Footer.tsx`.
To update them, edit the `href="tel:..."` and `href="mailto:..."` values there.
<!-- auto-deploy test -->

