/**
 * ============================================================
 *  MEDIA DATA — Single source of truth for all images & media
 * ============================================================
 *
 *  HOW TO SWAP IN REAL CONTENT:
 *
 *  1. Drop your files into the matching folder under public/images/
 *       public/images/hero/        → hero background (image)
 *       public/images/reels/       → Social Media Reels (VIDEO files, e.g. .mp4)
 *       public/images/campaigns/   → Brand Campaigns (VIDEO files, e.g. .mp4)
 *       public/images/photos/      → Photos gallery (image files)
 *
 *  2. Update the `src` paths below to match your filenames.
 *     Example:  src: '/images/reels/reel-01.mp4'
 *
 *  3. That's it — no layout code needs to change. The Reels and Campaigns
 *     cards auto-detect video vs. image based on the file extension
 *     (see `isVideoSrc` below) and render a <video> or <img> accordingly.
 *
 *  Reels & Campaigns: use real video files (.mp4, .webm, .mov). Reels
 *  autoplay muted + loop on hover/tap; Campaigns play inline with controls
 *  when clicked. If a .jpg/.png/.webp is used instead, it falls back to a
 *  static thumbnail with a play-button overlay.
 *
 *  GITHUB'S 25MB UPLOAD LIMIT — VIDEOS TOO BIG?
 *  GitHub's drag-and-drop web uploader caps files at 25MB, which many real
 *  video files exceed. You have two options — both documented in detail in
 *  IMAGE-SWAP-GUIDE.md at the project root:
 *    a) Compress the video to under 25MB and upload it into public/images/
 *       like normal (simplest, no new accounts — good for short reels).
 *    b) Upload the video to a free external host (Cloudinary or Bunny.net
 *       recommended) and paste the FULL https:// URL it gives you directly
 *       as the `src` below instead of a local /images/... path. No size
 *       limit, better streaming performance, and still just "paste a link,
 *       no code" for the client. `src` accepts either a local path or a
 *       full external URL — the video/image players work identically
 *       either way.
 *
 *  Photos: static images only (.jpg, .png, .webp) — unchanged.
 *
 *  Recommended sizes:
 *     Hero background:      1920×1080 or wider
 *     Reels video:          1080×1920 (9:16 vertical, like real reels)
 *     Campaign video:       1600×900 (16:9 widescreen)
 *     Photos:               1200×1500 minimum (any aspect ratio works)
 * ============================================================
 */

// ─── Helper: detect video files by extension ─────────────────
// Works for local paths (/images/reels/reel-01.mp4) AND full external URLs
// (e.g. https://res.cloudinary.com/.../reel-01.mp4) — query strings and
// hash fragments are stripped before checking the extension, so a
// Cloudinary/Bunny.net delivery URL with tracking params still matches.
const VIDEO_EXTENSIONS = ['.mp4', '.webm', '.mov', '.m4v']
export function isVideoSrc(src: string): boolean {
  const clean = src.split('?')[0].split('#')[0].toLowerCase()
  return VIDEO_EXTENSIONS.some((ext) => clean.endsWith(ext))
}

// ─── Hero Section ────────────────────────────────────────────
export const heroMedia = {
  background: {
    src: '/images/hero/hero-background.png',
    alt: 'Videographer flying a drone at dusk in an urban setting',
  },
}

// ─── Shared media item shape ─────────────────────────────────
export type MediaItem = {
  title: string
  src: string
  alt: string
}

// ─── Section 1: Social Media Reels ───────────────────────────
// Vertical (9:16) video files — autoplay muted+loop on hover. Add/remove
// items freely, the grid adapts.
export const reelsMedia: MediaItem[] = [
  { title: 'Reel — Coffee Brand', src: '/images/reels/reel-01.mp4', alt: 'Social media reel video 1' },
  { title: 'Reel — Fitness Studio', src: '/images/reels/reel-02.mp4', alt: 'Social media reel video 2' },
  { title: 'Reel — Restaurant Launch', src: '/images/reels/reel-03.mp4', alt: 'Social media reel video 3' },
  { title: 'Reel — Fashion Drop', src: '/images/reels/reel-04.mp4', alt: 'Social media reel video 4' },
]

// ─── Section 2: Brand Campaigns ──────────────────────────────
// Widescreen (16:9) video files — plays inline with controls on click.
// Add/remove items freely, the grid adapts.
export const campaignsMedia: MediaItem[] = [
  { title: 'Summer Collection Launch', src: '/images/campaigns/campaign-01.mp4', alt: 'Brand campaign video 1' },
  { title: 'Product Reveal Film', src: '/images/campaigns/campaign-02.mp4', alt: 'Brand campaign video 2' },
  { title: 'Retail Grand Opening', src: '/images/campaigns/campaign-03.mp4', alt: 'Brand campaign video 3' },
]

// ─── Section 3: Photos ────────────────────────────────────────
// Mixed aspect ratio photography — add/remove items freely, the grid adapts.
export const photosMedia: MediaItem[] = [
  { title: 'Editorial Portrait', src: '/images/photos/photo-01.jpg', alt: 'Photography 1' },
  { title: 'Product Still Life', src: '/images/photos/photo-02.jpg', alt: 'Photography 2' },
  { title: 'Lifestyle Shoot', src: '/images/photos/photo-03.jpg', alt: 'Photography 3' },
  { title: 'Fashion Editorial', src: '/images/photos/photo-04.jpg', alt: 'Photography 4' },
  { title: 'Event Coverage', src: '/images/photos/photo-05.jpg', alt: 'Photography 5' },
  { title: 'Brand Portrait', src: '/images/photos/photo-06.jpg', alt: 'Photography 6' },
]
