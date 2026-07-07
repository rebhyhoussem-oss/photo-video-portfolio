/**
 * ============================================================
 *  MEDIA DATA — Single source of truth for all images & media
 * ============================================================
 *
 *  HOW TO SWAP IN REAL CONTENT:
 *
 *  1. Drop your images/video-thumbnails into the matching folder
 *     under  public/images/
 *       public/images/hero/        → hero background
 *       public/images/reels/       → Social Media Reels thumbnails
 *       public/images/campaigns/   → Brand Campaigns thumbnails
 *       public/images/photos/      → Photos gallery images
 *
 *  2. Update the `src` paths below to match your filenames.
 *     Example:  src: '/images/reels/reel-01.jpg'
 *
 *  3. That's it — no layout code needs to change.
 *
 *  Supported formats: .jpg, .png, .webp (use .webp for best performance)
 *  Recommended sizes:
 *     Hero background:      1920×1080 or wider
 *     Reels thumbnails:     1080×1920 (9:16 vertical, like real reels)
 *     Campaign thumbnails:  1600×900 (16:9 widescreen)
 *     Photos:               1200×1500 minimum (any aspect ratio works)
 * ============================================================
 */

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
// Vertical (9:16) thumbnails — add/remove items freely, the grid adapts.
export const reelsMedia: MediaItem[] = [
  { title: 'Reel — Coffee Brand', src: '/images/reels/reel-01.jpg', alt: 'Social media reel thumbnail 1' },
  { title: 'Reel — Fitness Studio', src: '/images/reels/reel-02.jpg', alt: 'Social media reel thumbnail 2' },
  { title: 'Reel — Restaurant Launch', src: '/images/reels/reel-03.jpg', alt: 'Social media reel thumbnail 3' },
  { title: 'Reel — Fashion Drop', src: '/images/reels/reel-04.jpg', alt: 'Social media reel thumbnail 4' },
]

// ─── Section 2: Brand Campaigns ──────────────────────────────
// Widescreen (16:9) thumbnails — add/remove items freely, the grid adapts.
export const campaignsMedia: MediaItem[] = [
  { title: 'Summer Collection Launch', src: '/images/campaigns/campaign-01.jpg', alt: 'Brand campaign thumbnail 1' },
  { title: 'Product Reveal Film', src: '/images/campaigns/campaign-02.jpg', alt: 'Brand campaign thumbnail 2' },
  { title: 'Retail Grand Opening', src: '/images/campaigns/campaign-03.jpg', alt: 'Brand campaign thumbnail 3' },
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
