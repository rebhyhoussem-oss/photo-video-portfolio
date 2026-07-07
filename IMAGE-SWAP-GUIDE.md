# How to Replace Images with Your Real Content

All images are controlled from **one file**: `src/data/media.ts`.
No layout code needs to change — just drop in your files and update the paths.

---

## Folder Structure

```
public/images/
├── hero/                  ← Hero section background
│   └── hero-background.png
├── reels/                 ← Social Media Reels (vertical 9:16 thumbnails)
│   ├── reel-01.jpg
│   ├── reel-02.jpg
│   ├── reel-03.jpg
│   └── reel-04.jpg
├── campaigns/             ← Brand Campaigns (widescreen 16:9 thumbnails)
│   ├── campaign-01.jpg
│   ├── campaign-02.jpg
│   └── campaign-03.jpg
└── photos/                ← Photos gallery (mixed aspect ratios)
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

### 2. Social Media Reels
- Drop your reel thumbnails/covers into `public/images/reels/`
- Open `src/data/media.ts` and update the `reelsMedia` array:
  ```ts
  export const reelsMedia: MediaItem[] = [
    { title: 'Coffee Brand Reel', src: '/images/reels/your-reel.jpg', alt: 'Description' },
    // ...add or remove items freely
  ]
  ```

### 3. Brand Campaigns
- Drop your campaign thumbnails into `public/images/campaigns/`
- Open `src/data/media.ts` and update the `campaignsMedia` array:
  ```ts
  export const campaignsMedia: MediaItem[] = [
    { title: 'Summer Launch', src: '/images/campaigns/your-campaign.jpg', alt: 'Description' },
    // ...add or remove items freely
  ]
  ```

### 4. Photos
- Drop your photos into `public/images/photos/`
- Open `src/data/media.ts` and update the `photosMedia` array:
  ```ts
  export const photosMedia: MediaItem[] = [
    { title: 'Editorial Portrait', src: '/images/photos/your-photo.jpg', alt: 'Description' },
    // ...add or remove items freely
  ]
  ```

**In every section, adding or removing array entries automatically adjusts the grid — no layout code changes needed.**

## Recommended Image Sizes

| Section | Recommended Size | Aspect Ratio | Format |
|---------|------------------|--------------|--------|
| Hero background | 1792×1024 or wider | 16:9-ish | .jpg or .webp |
| Social Media Reels | 1080×1920 | 9:16 (vertical) | .jpg or .webp |
| Brand Campaigns | 1600×900 | 16:9 (widescreen) | .jpg or .webp |
| Photos | 1200×1500 minimum | Any (grid adapts) | .jpg or .webp |

**Tip:** Use `.webp` format for best performance. All common formats (.jpg, .png, .webp) work.

## If an Image is Missing

The site gracefully falls back to a styled color placeholder — no broken images.
You can swap files in at any time without breaking the layout.

## Contact Info

The phone number and email in the footer are hardcoded in `src/sections/Footer.tsx`.
To update them, edit the `href="tel:..."` and `href="mailto:..."` values there.
<!-- auto-deploy test -->
