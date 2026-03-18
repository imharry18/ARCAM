'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Meteors } from './Meteors';
import Image from 'next/image';
import TiltCard from './TiltCard';

const services = [
  {
    title: 'LaunchPad Site',
    subtitle: 'Strategic digital entry point',
    features: [
      '5–7 page bespoke architecture',
      'High-velocity performance',
      'Mobile-first optimization',
      'Lead conversion engine',
      'Core SEO framework',
    ],
  },
  {
    title: 'Growth Architecture',
    subtitle: 'Engineered for scalability',
    popular: true,
    features: [
      '10–20 page custom ecosystem',
      'Advanced conversion UX',
      'Strategic site architecture',
      'Seamless CMS integration',
      'Precision analytics stack',
    ],
  },
  {
    title: 'Authority System',
    subtitle: 'Market dominance infrastructure',
    features: [
      'Complete brand identity system',
      'Fully custom high-end UI/UX',
      'Cinematic motion design',
      'Strategic content structure',
      'CRM & automation protocols',
    ],
  },
  {
    title: 'Revenue Engine',
    subtitle: 'Aggressive scaling platform',
    features: [
      'End-to-end sales ecosystem',
      'Multi-channel frameworks',
      'A/B experimentation suite',
      'Advanced tracking & BI',
      'Full-funnel optimization',
    ],
  },
];

export default function Services() {
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

  const cardVariants = {
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
    <section ref={ref} id="services" className="relative py-20 md:py-32 bg-black overflow-hidden antialiased">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#E7B366]/5 via-transparent to-transparent opacity-30" />
      
      <div className="container-max relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-24 md:mb-32 text-center"
        >
          <div className="flex flex-col items-center gap-4 mb-10">
            <span className="text-[10px] font-bold text-[#E7B366] tracking-[0.6em] uppercase">Offering Suite</span>
            <div className="w-12 h-px bg-[#E7B366]/30" />
          </div>
          <h2 className="text-5xl md:text-7xl lg:text-9xl font-light tracking-tighter text-white pb-6" style={{ fontFamily: "'Cinzel', serif" }}>
            Our <em className="text-[#E7B366] italic not-italic">Capabilities</em>
          </h2>
          <p className="mt-6 text-base md:text-lg text-white/30 max-w-xl mx-auto font-light leading-relaxed">
            Fusing avant-garde design with high-velocity engineering to build the future of digital luxury.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="w-full relative"
            >
              <TiltCard className="h-full">
                <div className="relative shadow-2xl bg-white/[0.01] border border-white/5 px-8 py-12 h-full overflow-hidden rounded-[3rem] flex flex-col justify-start items-start hover:border-[#E7B366]/20 transition-colors duration-700 group backdrop-blur-3xl min-h-[550px]">
                  {service.popular && (
                    <div className="absolute top-8 right-10">
                      <span className="px-4 py-1.5 rounded-full bg-[#E7B366] text-black text-[9px] font-black uppercase tracking-[0.2em] shadow-2xl shadow-[#E7B366]/20">Most Popular</span>
                    </div>
                  )}

                  <div className="h-16 w-16 rounded-[1.5rem] border flex items-center justify-center mb-10 border-white/10 bg-white/[0.02] shadow-[0_0_30px_rgba(231,179,102,0.05)] group-hover:border-[#E7B366]/40 group-hover:bg-[#E7B366]/5 transition-all duration-700 overflow-hidden p-3.5">
                    <div className="relative w-full h-full brightness-0 invert opacity-30 group-hover:opacity-100 transition-all duration-700">
                      <Image
                        src="/logo.png"
                        alt="Arcam Logo"
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>

                  <h3 className="font-medium text-3xl text-white mb-3 relative z-50 tracking-tight" style={{ fontFamily: "'Cinzel', serif" }}>
                    {service.title}
                  </h3>

                  <p className="font-bold text-[10px] text-[#E7B366]/40 mb-10 relative z-50 leading-relaxed uppercase tracking-[0.3em]">
                    {service.subtitle}
                  </p>

                  <ul className="space-y-4 mb-12 relative z-50 flex-grow">
                    {service.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-start gap-4 text-white/40 text-sm font-light leading-snug group-hover:text-white/60 transition-colors duration-500">
                        <div className="w-1 h-1 rounded-full bg-[#E7B366]/30 mt-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <button className="w-full py-5 rounded-2xl border border-white/5 text-white/50 font-bold text-[9px] tracking-[0.3em] uppercase hover:bg-[#E7B366] hover:text-black hover:border-[#E7B366] transition-all duration-700 relative z-50">
                    Acquire Package
                  </button>

                  {/* Meteor effect */}
                  <Meteors number={12} />
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
