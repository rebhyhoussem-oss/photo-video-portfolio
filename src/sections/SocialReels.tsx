import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { PlayIcon, MuteIcon, UnmuteIcon } from '@/icons'
import { reelsMedia, isVideoSrc } from '@/data/media'
import type { MediaItem } from '@/data/media'

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  },
}

function ReelCard({ item }: { item: MediaItem }) {
  const [mediaError, setMediaError] = useState(false)
  const [muted, setMuted] = useState(true)
  const videoRef = useRef<HTMLVideoElement>(null)
  const hasMedia = item.src && !mediaError
  const isVideo = isVideoSrc(item.src)

  const playPreview = () => {
    const v = videoRef.current
    if (!v) return
    v.currentTime = 0
    v.play().catch(() => {})
  }
  const stopPreview = () => {
    const v = videoRef.current
    if (!v) return
    v.pause()
    v.currentTime = 0
    setMuted(true)
  }
  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation()
    setMuted((m) => !m)
  }

  return (
    <motion.div
      variants={itemVariants}
      className="group relative aspect-[9/16] cursor-pointer overflow-hidden rounded-2xl bg-bg-card"
      onMouseEnter={isVideo ? playPreview : undefined}
      onMouseLeave={isVideo ? stopPreview : undefined}
      onClick={isVideo ? playPreview : undefined}
    >
      {hasMedia ? (
        isVideo ? (
          <video
            ref={videoRef}
            src={item.src}
            muted={muted}
            loop
            playsInline
            preload="metadata"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            onError={() => setMediaError(true)}
          />
        ) : (
          <img
            src={item.src}
            alt={item.alt}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
            onError={() => setMediaError(true)}
          />
        )
      ) : (
        <div className="flex h-full w-full items-center justify-center bg-teal/10 transition-transform duration-500 group-hover:scale-105">
          <div className="h-14 w-14 rounded-full border-2 border-teal/30" />
        </div>
      )}

      {/* Play button (image cards only — video cards autoplay preview on hover instead) */}
      {!isVideo && (
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100 [@media(hover:none)]:opacity-100">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/90 text-teal shadow-lg">
            <PlayIcon className="h-6 w-6 translate-x-0.5" />
          </div>
        </div>
      )}

      {/* Mute/unmute toggle (video cards only) */}
      {isVideo && hasMedia && (
        <button
          type="button"
          aria-label={muted ? 'Unmute video' : 'Mute video'}
          onClick={toggleMute}
          className="absolute bottom-3 right-3 flex h-9 w-9 items-center justify-center rounded-full bg-black/50 text-white opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100 hover:bg-black/70 [@media(hover:none)]:opacity-100"
        >
          {muted ? <MuteIcon className="h-4 w-4" /> : <UnmuteIcon className="h-4 w-4" />}
        </button>
      )}
    </motion.div>
  )
}

export function SocialReels() {
  return (
    <section id="reels" className="bg-bg py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="mb-10 md:mb-14">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-tangerine">01 — Short Form</p>
          <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-fg md:text-5xl">
            Social Media Reels
          </h2>
          <p className="mt-3 max-w-xl text-fg-muted">
            Punchy, scroll-stopping vertical video made for Instagram, TikTok, and beyond.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 md:gap-5"
        >
          {reelsMedia.map((item) => (
            <ReelCard key={item.title} item={item} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
