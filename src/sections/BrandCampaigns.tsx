import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { PlayIcon } from '@/icons'
import { campaignsMedia, isVideoSrc } from '@/data/media'
import type { MediaItem } from '@/data/media'

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  },
}

function CampaignCard({ item }: { item: MediaItem }) {
  const [mediaError, setMediaError] = useState(false)
  const [playing, setPlaying] = useState(false)
  const [loaded, setLoaded] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)
  const hasMedia = item.src && !mediaError
  const isVideo = isVideoSrc(item.src)

  const startPlayback = () => {
    if (!isVideo) return
    setPlaying(true)
    requestAnimationFrame(() => {
      videoRef.current?.play().catch(() => {})
    })
  }

  return (
    <motion.div
      variants={itemVariants}
      className="group relative aspect-video cursor-pointer overflow-hidden rounded-2xl bg-bg-card"
      onClick={!playing ? startPlayback : undefined}
    >
      {hasMedia ? (
        isVideo ? (
          <>
            <video
              ref={videoRef}
              src={item.src}
              controls={playing}
              playsInline
              preload="none"
              className="h-full w-full object-cover"
              onError={() => setMediaError(true)}
              onLoadedData={() => setLoaded(true)}
              onPause={() => setPlaying(false)}
              onEnded={() => setPlaying(false)}
            />
            {!loaded && (
              <div className="absolute inset-0 flex h-full w-full animate-pulse items-center justify-center bg-bg-card">
                <div className="h-10 w-10 rounded-full border-2 border-tangerine/30" />
              </div>
            )}
          </>
        ) : (
          <>
            <img
              src={item.src}
              alt={item.alt}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
              onLoad={() => setLoaded(true)}
              onError={() => setMediaError(true)}
            />
            {!loaded && (
              <div className="absolute inset-0 flex h-full w-full animate-pulse items-center justify-center bg-bg-card">
                <div className="h-10 w-10 rounded-full border-2 border-tangerine/30" />
              </div>
            )}
          </>
        )
      ) : (
        <div className="flex h-full w-full items-center justify-center bg-tangerine/10 transition-transform duration-500 group-hover:scale-105">
          <div className="h-16 w-16 rounded-full border-2 border-tangerine/30" />
        </div>
      )}

      {/* Play button */}
      {!playing && (
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100 [@media(hover:none)]:opacity-100">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/90 text-tangerine shadow-lg">
            <PlayIcon className="h-7 w-7 translate-x-0.5" />
          </div>
        </div>
      )}
    </motion.div>
  )
}

export function BrandCampaigns() {
  return (
    <section id="campaigns" className="bg-bg-alt py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="mb-10 md:mb-14">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-teal">02 — Long Form</p>
          <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-fg md:text-5xl">
            Brand Campaigns
          </h2>
          <p className="mt-3 max-w-xl text-fg-muted">
            Full commercial productions — concept, shoot, and edit for brands that want to stand out.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 gap-5 md:grid-cols-3"
        >
          {campaignsMedia.map((item) => (
            <CampaignCard key={item.title} item={item} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
