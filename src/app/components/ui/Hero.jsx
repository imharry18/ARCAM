'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Spotlight } from './Spotlight';
import ColorBends from './ColorBends';

export default function Hero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.5 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-black antialiased">
      {/* Background Shader Effect */}
      <div className="absolute inset-0 z-0 opacity-40 [mask-image:linear-gradient(to_bottom,white_60%,transparent)]">
        <ColorBends
          colors={["#E7B366", "#B38728", "#E7B366"]}
          rotation={66}
          speed={0.05}
          scale={0.8}
          frequency={0.1}
          warpStrength={1}
          mouseInfluence={0.1}
          noise={0.24}
          parallax={0}
          iterations={1}
          intensity={1.8}
          bandWidth={6}
          transparent
          autoRotate={0}
        />
      </div>

      {/* Background Grid Accent */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:radial-gradient(white,transparent_85%)] opacity-[0.03] pointer-events-none" />

      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="rgba(231, 179, 102, 0.3)" // Warm Gold
      />
      
      {/* Animated Background Gradients */}
      <div className="absolute inset-0 -z-10 bg-black">
        <div className="absolute top-[20%] right-[10%] w-[70vw] h-[70vh] rounded-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#E7B366]/5 via-purple-900/5 to-transparent blur-[140px] mix-blend-screen" />
        <div className="absolute bottom-[10%] left-[10%] w-[60vw] h-[60vh] rounded-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-900/10 via-[#E7B366]/5 to-transparent blur-[120px] mix-blend-screen" />
      </div>

      <div className="relative z-10 container-max w-full pt-32 pb-20 flex flex-col items-center justify-center text-center min-h-screen">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={loaded ? "visible" : "hidden"}
          className="max-w-6xl mx-auto flex flex-col items-center"
        >
          {/* Badge */}
          <motion.div variants={itemVariants} className="mb-12 flex flex-col items-center gap-6">
            <span className="text-xs font-bold text-[#E7B366] tracking-[0.8em] uppercase">Digital Engineering Studio</span>
            <div className="w-px h-12 bg-gradient-to-b from-[#E7B366]/50 to-transparent" />
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            variants={itemVariants}
            className="text-7xl sm:text-8xl md:text-9xl lg:text-[10rem] font-light tracking-tighter mb-10 leading-[0.85] text-white"
            style={{ fontFamily: "'Cinzel', serif" }}
          >
            <span className="block mb-2">Bespoke</span>
            <span className="text-[#E7B366] italic not-italic">Digital</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="max-w-2xl text-lg md:text-xl text-white/30 font-light tracking-wide mb-14 leading-relaxed"
          >
            We architect elite digital ecosystems for world-class visionaries. Exceptional engineering, delivered with surgical precision.
          </motion.p>

          {/* CTA Group */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center gap-6"
          >
            <motion.button
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="px-10 py-5 rounded-2xl bg-white text-black font-black text-xs tracking-[0.3em] uppercase hover:bg-[#E7B366] hover:text-black transition-all duration-700 shadow-[0_20px_60px_rgba(255,255,255,0.1)]"
            >
              Start Project
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="px-10 py-5 rounded-2xl bg-white/[0.02] border border-white/5 text-white/40 font-bold text-xs tracking-[0.3em] uppercase hover:bg-white/[0.05] hover:text-white transition-all duration-700"
            >
              Examine Work
            </motion.button>
          </motion.div>

        </motion.div>
        
      </div>

    </section>
  );
}
