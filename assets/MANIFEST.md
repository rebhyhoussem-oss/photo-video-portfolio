# Asset Manifest

## Site Structure
Single-page site with 3 content sections: **Social Media Reels**, **Brand Campaigns**, **Photos**.
No separate About/Contact pages — a minimal contact touchpoint (phone + email) lives in the footer.

## Image Data Source
All image paths are centralized in `src/data/media.ts`.
See `IMAGE-SWAP-GUIDE.md` for how to replace with real content.

## Folder Structure
```
public/images/
├── hero/hero-background.png     → Hero section background
├── reels/                       → Social Media Reels (4 slots, 9:16 vertical)
│   ├── reel-01.jpg … reel-04.jpg
├── campaigns/                   → Brand Campaigns (3 slots, 16:9 widescreen)
│   ├── campaign-01.jpg … campaign-03.jpg
└── photos/                      → Photos gallery (6 slots, mixed aspect)
    ├── photo-01.jpg … photo-06.jpg
```

## Images
| File | Source comp | Purpose |
|---|---|---|
| `public/images/hero/hero-background.png` | edited from `verdent-design/stage1/comp-4-fresh-spectrum.png` | Hero image — bright commercial lifestyle scene |

## Style
**Fresh Spectrum** — warm off-white canvas (`#FAFAF7`), teal (`#00897B`) primary accent, tangerine (`#FF8A50`) secondary accent. Fonts: Poppins (display), Nunito (body).

## Icons
| File | Source | Purpose |
|---|---|---|
| `src/icons/index.tsx` (PlayIcon) | hand-authored SVG | Reel/campaign play button |
| `src/icons/index.tsx` (ArrowRightIcon) | hand-authored SVG | CTA button arrow |
| `src/icons/index.tsx` (MenuIcon / CloseIcon) | hand-authored SVG | Mobile nav toggle |
| `src/icons/index.tsx` (InstagramIcon / VimeoIcon / YoutubeIcon) | hand-authored SVG | Footer social links |
| `src/icons/index.tsx` (MailIcon) | hand-authored SVG | Footer contact email |
| `src/icons/index.tsx` (PhoneIcon) | hand-authored SVG | Footer contact phone (+965 55947036) |

## Logo
| File | Background | Purpose |
|---|---|---|
| `public/favicon.svg` | `#FAFAF7` | Browser favicon — HR initials in teal on warm-white |

## Notes
- All three content sections (reels, campaigns, photos) show styled placeholders until real media is dropped in
- All components gracefully fall back if an image file is missing (no broken images)
- Contact info: phone `+965 55947036` and email are in the footer only — no separate contact page/form
- CameraIcon and FilmIcon from the old Services section are unused but kept in icons file for potential future use
