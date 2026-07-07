import { motion } from 'framer-motion'
import { ArrowRightIcon, PlayIcon } from '@/icons'
import { heroMedia } from '@/data/media'

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-bg pt-28 pb-16 md:pt-36 md:pb-20">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="mb-4 inline-block rounded-full bg-teal/10 px-4 py-1.5 text-sm font-bold uppercase tracking-wide text-teal">
              Videographer &amp; Photographer
            </p>
            <h1 className="font-display text-5xl font-bold leading-[1.05] tracking-tight text-fg sm:text-6xl md:text-7xl">
              Stories that
              <br />
              <span className="text-tangerine">move</span> &amp; images
              <br />
              that <span className="text-teal">shine</span>
            </h1>
            <p className="mt-6 max-w-md text-base leading-relaxed text-fg-muted md:text-lg">
              Commercial photography and videography with a bold, colorful edge —
              from social reels to full brand campaigns.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
              <a
                href="#campaigns"
                className="group inline-flex items-center justify-center gap-3 rounded-full bg-teal px-7 py-3.5 font-bold text-white transition-all duration-200 hover:bg-teal-hover hover:gap-4"
              >
                See the Work
                <ArrowRightIcon className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-0.5" />
              </a>
              <a
                href="#reels"
                className="group inline-flex items-center justify-center gap-3 rounded-full border-2 border-fg/10 px-7 py-3.5 font-bold text-fg transition-all duration-200 hover:border-tangerine hover:text-tangerine"
              >
                <PlayIcon className="h-5 w-5" />
                Watch Reels
              </a>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="aspect-[4/3] w-full overflow-hidden rounded-3xl">
              <img
                src={heroMedia.background.src}
                alt={heroMedia.background.alt}
                className="h-full w-full object-cover"
                fetchPriority="high"
                width={1536}
                height={1024}
              />
            </div>
            {/* Accent blobs */}
            <div className="absolute -bottom-5 -left-5 h-20 w-20 rounded-2xl bg-tangerine/25 md:-bottom-6 md:-left-6 md:h-28 md:w-28" />
            <div className="absolute -top-5 -right-5 h-16 w-16 rounded-full bg-teal/20 md:-top-6 md:-right-6 md:h-24 md:w-24" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
