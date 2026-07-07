import { useState } from 'react'
import { motion } from 'framer-motion'
import { photosMedia } from '@/data/media'
import type { MediaItem } from '@/data/media'

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  },
}

// Slight aspect ratio variation for visual rhythm — index-based, no data change needed
const aspects = ['aspect-[4/5]', 'aspect-square', 'aspect-[4/5]', 'aspect-square', 'aspect-[4/5]', 'aspect-square']

function PhotoCard({ item, index }: { item: MediaItem; index: number }) {
  const [imgError, setImgError] = useState(false)
  const hasImage = item.src && !imgError
  const aspect = aspects[index % aspects.length]

  return (
    <motion.div
      variants={itemVariants}
      className={`group relative ${aspect} cursor-pointer overflow-hidden rounded-2xl bg-bg-card`}
    >
      {hasImage ? (
        <img
          src={item.src}
          alt={item.alt}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
          onError={() => setImgError(true)}
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center bg-teal/10 transition-transform duration-500 group-hover:scale-105">
          <div className="h-14 w-14 rounded-full border-2 border-teal/30" />
        </div>
      )}

      {/* Label */}
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <p className="text-sm font-semibold text-white">{item.title}</p>
      </div>
    </motion.div>
  )
}

export function Photos() {
  return (
    <section id="photos" className="bg-bg py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="mb-10 md:mb-14">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-tangerine">03 — Stills</p>
          <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-fg md:text-5xl">
            Photos
          </h2>
          <p className="mt-3 max-w-xl text-fg-muted">
            Editorial, product, and lifestyle photography with a fresh, colorful eye.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="columns-2 gap-4 sm:columns-3 md:gap-5 [&>*]:mb-4 md:[&>*]:mb-5"
        >
          {photosMedia.map((item, i) => (
            <PhotoCard key={item.title} item={item} index={i} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
