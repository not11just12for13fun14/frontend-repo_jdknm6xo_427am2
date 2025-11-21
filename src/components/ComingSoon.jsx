import { motion } from 'framer-motion';
import { Clock, MapPin } from 'lucide-react';

export default function ComingSoon() {
  return (
    <section className="relative w-full bg-black px-6 py-16">
      <div className="mx-auto grid max-w-5xl items-center gap-10 md:grid-cols-2">
        {/* Promo image placeholder - user can replace later */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-2xl border border-amber-500/20 bg-gradient-to-br from-zinc-900 to-zinc-800 p-3 shadow-2xl"
        >
          <div className="aspect-[4/3] w-full rounded-xl bg-[url('/coffee-placeholder.jpg')] bg-cover bg-center" />
          <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10" />
        </motion.div>

        {/* Text + CTA */}
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-amber-200 to-white bg-clip-text text-3xl font-bold text-transparent md:text-4xl"
          >
            Under construction, but soon full of smiles!
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="mt-4 text-amber-50/80"
          >
            A family cafe in the heart of Southend is on the way!
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="mt-6 space-y-3 text-amber-50/90"
          >
            <div className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-5 w-5 text-amber-300" />
              <p>
                123 High Street, Southend-on-Sea, SS1 — Final address to be confirmed. If you share the exact address, I'll update it here and on the map.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <Clock className="mt-0.5 h-5 w-5 text-amber-300" />
              <p>Opening date: TBA — we can add a live countdown timer here once confirmed.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
