import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-[#0b0a0a]">
      {/* Spline 3D cover */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/MscgRj2doJR2RRa2/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Ambient gradients (non-blocking) */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-10 -top-10 h-72 w-72 rounded-full bg-amber-400/20 blur-3xl" />
        <div className="absolute right-0 top-1/4 h-80 w-80 rounded-full bg-rose-400/10 blur-3xl" />
        <div className="absolute -bottom-10 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-emerald-400/10 blur-3xl" />
      </div>

      {/* Content overlay */}
      <div className="relative z-10 flex min-h-[90vh] items-center justify-center px-6">
        <div className="mx-auto max-w-5xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-black/30 px-4 py-2 backdrop-blur-md"
          >
            <span className="h-2 w-2 animate-pulse rounded-full bg-amber-400" />
            <span className="text-xs font-medium tracking-wide text-amber-100/90">
              drummerBees • A family cafe is coming to Southend
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.8, ease: 'easeOut' }}
            className="mt-6 bg-gradient-to-br from-amber-200 via-amber-100 to-white bg-clip-text text-5xl font-extrabold tracking-tight text-transparent sm:text-6xl"
          >
            drummerBees
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8, ease: 'easeOut' }}
            className="mx-auto mt-5 max-w-2xl text-balance text-lg leading-relaxed text-amber-50/90"
          >
            Under construction, but soon full of smiles!
            <br />
            A family cafe in the heart of Southend is on the way!
          </motion.p>
        </div>
      </div>

      {/* Honey stripes accent */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-10">
        <div className="mx-auto mb-12 h-1 w-11/12 bg-gradient-to-r from-transparent via-amber-400/60 to-transparent blur-[2px]" />
      </div>
    </section>
  );
}
