'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            transition: { duration: 1, ease: [0.76, 0, 0.24, 1] }
          }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#000000]"
        >
          {/* Background Glow */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#E7B366]/5 blur-[140px] rounded-full" />
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="relative z-10 flex flex-col items-center gap-10"
          >
            {/* Animated Logo Name */}
            <div className="overflow-hidden">
              <motion.div
                initial={{ y: 120 }}
                animate={{ y: 0 }}
                transition={{
                  duration: 1.5,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                <h1 
                  className="text-7xl md:text-9xl font-light tracking-[0.4em] text-[#E7B366] leading-tight text-center"
                  style={{ fontFamily: "'Cinzel', serif" }}
                >
                  ARCAM
                </h1>
              </motion.div>
            </div>

            {/* Progress/Subtext Container */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 1 }}
              className="flex flex-col items-center gap-6"
            >
              <div className="h-px w-64 bg-gradient-to-r from-transparent via-[#E7B366]/20 to-transparent" />
              <p className="text-[#E7B366]/30 text-[10px] tracking-[0.8em] font-bold uppercase">
                Digital Legacy · Est. 2026
              </p>
            </motion.div>
          </motion.div>

          {/* Bottom Loading Indicator */}
          <div className="absolute bottom-24 left-1/2 -translate-x-1/2 w-64">
            <div className="h-px w-full bg-white/[0.05] relative overflow-hidden">
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-transparent via-[#E7B366]/40 to-transparent"
                initial={{ x: '-100%' }}
                animate={{ x: '100%' }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
