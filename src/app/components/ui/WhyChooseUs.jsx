'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';

const benefits = [
  {
    title: 'Elite Quality',
    description: 'Production-grade engineering with rigorous standards.',
  },
  {
    title: 'High ROI',
    description: 'Strategic decisions driven by measurable business impact.',
  },
  {
    title: 'Precision Architecture',
    description: 'Deeply architected for exponential growth and evolution.',
  },
  {
    title: 'Tech Avant-Garde',
    description: 'Harnessing the latest industry-leading technologies.',
  },
  {
    title: 'Strategic Alliance',
    description: 'A deep-velocity partnership for market dominance.',
  },
  {
    title: 'Resilient Design',
    description: 'Timeless digital solutions built for market shifts.',
  },
];

export default function WhyChooseUs() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const benefitVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section ref={ref} className="relative py-20 md:py-24 bg-black overflow-hidden antialiased min-h-fit lg:min-h-screen flex flex-col justify-center">
      {/* Background Cinematic Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vh] bg-[#E7B366]/5 rounded-full blur-[160px] pointer-events-none opacity-30" />

      <div className="container-max relative z-10">
        {/* Section Header - Highly Compact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12 md:mb-16 text-center"
        >
          <div className="flex flex-col items-center gap-4 mb-10">
            <span className="text-[10px] font-bold text-[#E7B366] tracking-[0.6em] uppercase">Superiority Index</span>
            <div className="w-12 h-px bg-[#E7B366]/30" />
          </div>
          <h2 className="text-5xl md:text-7xl font-light tracking-tighter text-white" style={{ fontFamily: "'Cinzel', serif" }}>
            The <em className="text-[#E7B366] italic not-italic">Arcam</em> Edge
          </h2>
        </motion.div>

        {/* High-Density Benefits Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5 border border-white/5 rounded-[2rem] overflow-hidden"
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              variants={benefitVariants}
              className="group relative bg-black p-10 md:p-12 hover:bg-white/[0.02] transition-all duration-700 min-h-[260px] flex flex-col justify-center"
            >
              {/* Subtle Icon Background */}
              <div className="absolute top-8 right-8 w-12 h-12 opacity-5 group-hover:opacity-20 transition-opacity duration-700 pointer-events-none">
                <Image src="/logo.png" alt="Arcam" fill className="object-contain brightness-0 invert" />
              </div>

              <h3 className="font-medium text-2xl text-white mb-4 tracking-tight group-hover:text-[#E7B366] transition-colors duration-700" style={{ fontFamily: "'Cinzel', serif" }}>
                {benefit.title}
              </h3>
              <p className="text-white/30 text-sm font-light leading-relaxed group-hover:text-white/60 transition-colors duration-500 max-w-[280px]">
                {benefit.description}
              </p>

              {/* Bottom accent bar */}
              <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#E7B366]/40 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-12 text-center"
        >
          <div className="w-1 h-12 bg-gradient-to-b from-[#E7B366]/40 to-transparent mx-auto" />
        </motion.div>
      </div>
    </section>
  );
}
