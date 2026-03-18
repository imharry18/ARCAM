'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const processSteps = [
  {
    number: '01',
    title: 'Discover',
    description: 'Immersion into your brand DNA and vision.',
  },
  {
    number: '02',
    title: 'Strategy',
    description: 'Architecting a precision technology roadmap.',
  },
  {
    number: '03',
    title: 'Design',
    description: 'Crafting cinematic, high-fidelity interfaces.',
  },
  {
    number: '04',
    title: 'Build',
    description: 'Engineering robust, high-performance ecosystems.',
  },
  {
    number: '05',
    title: 'Deploy',
    description: 'Precision launch and recursive optimization.',
  },
];

export default function Process() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section ref={ref} id="process" className="relative py-20 md:py-24 bg-black overflow-hidden antialiased min-h-fit lg:min-h-screen flex flex-col justify-center">
      {/* Background Accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none opacity-20">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[1px] bg-gradient-to-r from-transparent via-[#E7B366]/30 to-transparent" />
      </div>

      <div className="container-max relative z-10">
        {/* Section Header - Compact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 md:mb-20 text-center"
        >
          <div className="flex flex-col items-center gap-4 mb-10">
            <span className="text-[10px] font-bold text-[#E7B366] tracking-[0.6em] uppercase">Execution Protocol</span>
            <div className="w-12 h-px bg-[#E7B366]/30" />
          </div>
          <h2 className="text-5xl md:text-7xl font-light tracking-tighter text-white" style={{ fontFamily: "'Cinzel', serif" }}>
            The <em className="text-[#E7B366] italic not-italic">Blueprint</em>
          </h2>
        </motion.div>

        {/* Horizontal Process Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-5 gap-px bg-white/5 border-y border-white/5"
        >
          {processSteps.map((step, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              className="group relative bg-black p-8 md:p-10 hover:bg-white/[0.02] transition-all duration-700 min-h-[320px] flex flex-col"
            >
              {/* Vertical accent on hover */}
              <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-gradient-to-b from-[#E7B366] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              <div className="mb-12">
                <span className="text-5xl font-light text-[#E7B366]/20 group-hover:text-[#E7B366] transition-all duration-700" style={{ fontFamily: "'Cinzel', serif" }}>
                  {step.number}
                </span>
              </div>

              <div className="mt-auto">
                <h3 className="text-2xl font-medium text-white mb-4 group-hover:translate-x-2 transition-transform duration-700" style={{ fontFamily: "'Cinzel', serif" }}>
                  {step.title}
                </h3>
                <p className="text-sm text-white/30 group-hover:text-white/60 transition-colors duration-700 leading-relaxed font-light">
                  {step.description}
                </p>
              </div>

              {/* Connecting line for desktop */}
              {index < processSteps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-px bg-[#E7B366]/10 z-20 group-hover:bg-[#E7B366]/30 transition-colors" />
              )}
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-16 text-center"
        >
          <p className="text-xs font-bold text-white/20 uppercase tracking-[0.5em]">Engineered for Velocity</p>
        </motion.div>
      </div>
    </section>
  );
}
