/**
 * ============================================================
 *  MEDIA DATA — Single source of truth for all images & media
 * ============================================================
 *
 *  HOW TO ADD REAL CONTENT (fully automatic — no code edits needed):
 *
 *  1. Just drop your file into the matching folder under public/images/
 *       public/images/hero/        → hero background (image)
 *       public/images/reels/       → Social Media Reels (VIDEO files, e.g. .mp4)
 *       public/images/campaigns/   → Brand Campaigns (VIDEO files, e.g. .mp4)
 *       public/images/photos/      → Photos gallery (image files)
 *
 *  2. Name it the next number in sequence, e.g. `reel-05.mp4`,
 *     `campaign-04.mp4`, `photo-07.jpg`. Any image/video file dropped into
 *     these folders is picked up AUTOMATICALLY at build time via Vite's
 *     `import.meta.glob` — there is no array to edit anymore for local
 *     files. Push to GitHub and the next auto-deploy shows it live.
 *
 *  3. Files are sorted numerically/alphabetically by filename, so
 *     `reel-01`, `reel-02`, `reel-03`... appear in that order.
 *
 *  Reels & Campaigns: use real video files (.mp4, .webm, .mov, .m4v). Reels
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
 *       recommended) and paste the FULL https:// URL it gives you into the
 *       small `reelsMediaExternal` / `campaignsMediaExternal` lists near
 *       the bottom of this file. No size limit, better streaming
 *       performance, still no local file needed for that item.
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
const IMAGE_EXTENSIONS = ['.jpg', '.jpeg', '.png', '.webp', '.gif']
const MEDIA_EXTENSIONS = [...VIDEO_EXTENSIONS, ...IMAGE_EXTENSIONS]

export function isVideoSrc(src: string): boolean {
  const clean = src.split('?')[0].split('#')[0].toLowerCase()
  return VIDEO_EXTENSIONS.some((ext) => clean.endsWith(ext))
}

// ─── Shared media item shape ─────────────────────────────────
export type MediaItem = {
  title: string
  src: string
  alt: string
}

// ─── Helper: turn "reel-01.mp4" into "Reel 01" for a11y/title text ───
function titleFromFilename(filename: string): string {
  const withoutExt = filename.replace(/\.[^.]+$/, '')
  return withoutExt
    .split(/[-_]+/)
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}

// ─── Helper: auto-discover files dropped into a public/images/* folder ───
// Uses Vite's import.meta.glob (build-time file-system scan) so any
// image/video file placed in the folder shows up automatically — no
// hardcoded array to maintain. Non-media files (README.md, .gitkeep) are
// filtered out. Results are sorted alphabetically/numerically by filename
// so reel-01, reel-02, ... appear in upload order.
function discoverLocalMedia(
  globResult: Record<string, string>,
  altPrefix: string,
): MediaItem[] {
  return Object.keys(globResult)
    .filter((path) => MEDIA_EXTENSIONS.some((ext) => path.toLowerCase().endsWith(ext)))
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))
    .map((path) => {
      const filename = path.split('/').pop() ?? path
      const title = titleFromFilename(filename)
      return {
        title,
        src: path.replace(/^\/public/, ''),
        alt: `${altPrefix} — ${title}`,
      }
    })
}

// ─── Hero Section ────────────────────────────────────────────
export const heroMedia = {
  background: {
    src: '/images/hero/hero-background.png',
    alt: 'Videographer flying a drone at dusk in an urban setting',
  },
}

// ─── Section 1: Social Media Reels ───────────────────────────
// Vertical (9:16) video files, auto-discovered from public/images/reels/.
// Just drop a new file (e.g. reel-05.mp4) into that folder — no code
// changes needed.
const reelsGlob = import.meta.glob('/public/images/reels/*', {
  eager: true,
  query: '?url',
  import: 'default',
}) as Record<string, string>

// Optional: paste external (Cloudinary/Bunny.net) video URLs here for
// oversized files that don't fit GitHub's 25MB upload limit. Appended
// after the auto-discovered local files.
export const reelsMediaExternal: MediaItem[] = []

export const reelsMedia: MediaItem[] = [
  ...discoverLocalMedia(reelsGlob, 'Social media reel'),
  ...reelsMediaExternal,
]

// ─── Section 2: Brand Campaigns ──────────────────────────────
// Widescreen (16:9) video files, auto-discovered from
// public/images/campaigns/. Just drop a new file (e.g. campaign-04.mp4)
// into that folder — no code changes needed.
const campaignsGlob = import.meta.glob('/public/images/campaigns/*', {
  eager: true,
  query: '?url',
  import: 'default',
}) as Record<string, string>

// Optional: paste external (Cloudinary/Bunny.net) video URLs here for
// oversized files that don't fit GitHub's 25MB upload limit. Appended
// after the auto-discovered local files.
export const campaignsMediaExternal: MediaItem[] = []

export const campaignsMedia: MediaItem[] = [
  ...discoverLocalMedia(campaignsGlob, 'Brand campaign video'),
  ...campaignsMediaExternal,
]

// ─── Section 3: Photos ────────────────────────────────────────
// Mixed aspect ratio photography, auto-discovered from
// public/images/photos/. Just drop a new file (e.g. photo-07.jpg) into
// that folder — no code changes needed.
const photosGlob = import.meta.glob('/public/images/photos/*', {
  eager: true,
  query: '?url',
  import: 'default',
}) as Record<string, string>

export const photosMedia: MediaItem[] = discoverLocalMedia(photosGlob, 'Photography')
