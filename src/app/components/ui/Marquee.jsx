'use client';

import { motion } from 'framer-motion';

export default function Marquee({ items, speed = 40, reverse = false }) {
  return (
    <div className="relative overflow-hidden whitespace-nowrap border-y border-white/5 py-8 md:py-12 bg-black/50 backdrop-blur-sm">
      <motion.div
        animate={{
          x: reverse ? [ '-33.33%', '0%' ] : [ '0%', '-33.33%' ],
        }}
        transition={{
          duration: speed,
          repeat: Infinity,
          ease: "linear",
        }}
        className="inline-flex gap-12 md:gap-24 px-12 md:px-24"
      >
        {[...items, ...items, ...items].map((item, i) => (
          <span
            key={i}
            className="text-sm md:text-lg font-bold tracking-[0.4em] uppercase text-white/20 flex items-center gap-12 md:gap-24"
            style={{ fontFamily: "'Cinzel', serif" }}
          >
            {item}
            <span className="text-[#E7B366] text-xl md:text-2xl opacity-50">✦</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}
