'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Meteors } from './Meteors';
import Image from 'next/image';
import TiltCard from './TiltCard';
import { SERVICE_TIERS } from '@/app/lib/services-data';

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
      
      <div className="w-full px-4 md:px-10 relative z-10">
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
          <h2 className="text-5xl md:text-7xl lg:text-9xl font-light tracking-tighter text-white pb-6" style={{ fontFamily: "var(--font-serif)" }}>
            Our <em className="text-[#E7B366] italic">Capabilities</em>
          </h2>
          <p className="mt-6 text-base md:text-lg text-white/70 max-w-xl mx-auto font-light leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
            Fusing avant-garde design with high-velocity engineering to build the future of digital luxury.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 px-4 max-w-[115rem] mx-auto mb-20"
        >
          {SERVICE_TIERS.map((service, index) => {
            const shades = ['bg-[#060606]', 'bg-[#0A0A0A]', 'bg-[#080808]', 'bg-[#0C0C0C]'];
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                className="w-full relative"
              >
                <TiltCard className="h-full">
                <div className={`relative shadow-2xl ${shades[index % 4]} border border-white/5 px-6 py-12 h-full overflow-hidden rounded-[3rem] flex flex-col justify-start items-start hover:border-[#E7B366]/20 transition-colors duration-700 group backdrop-blur-3xl min-h-[600px]`}>
                  {service.popular && (
                    <div className="absolute top-8 right-10">
                      <span className="px-4 py-1.5 rounded-full bg-[#E7B366] text-black text-[9px] font-black uppercase tracking-[0.2em] shadow-2xl shadow-[#E7B366]/20">Most Popular</span>
                    </div>
                  )}

                  <div className="h-16 w-16 rounded-[1.5rem] border flex items-center justify-center mb-8 border-white/10 bg-white/[0.02] shadow-[0_0_30px_rgba(231,179,102,0.05)] group-hover:border-[#E7B366]/40 group-hover:bg-[#E7B366]/5 transition-all duration-700 overflow-hidden">
                    <service.icon 
                      size={28} 
                      strokeWidth={1.5} 
                      className="text-white/30 group-hover:text-[#E7B366] transition-all duration-700" 
                    />
                  </div>

                  <h3 className="font-medium text-2xl lg:text-3xl text-white mb-3 relative z-50 tracking-tight whitespace-nowrap" style={{ fontFamily: "var(--font-serif)" }}>
                    {service.title}
                  </h3>

                  <p className="font-semibold text-[10px] text-[#E7B366] mb-6 relative z-50 leading-relaxed uppercase tracking-[0.3em]">
                    {service.subtitle}
                  </p>

                  {service.description && (
                    <p className="text-sm text-white/50 mb-8 relative z-50 font-light leading-relaxed">
                      {service.description}
                    </p>
                  )}

                  <ul className="space-y-4 mb-12 relative z-50 flex-grow w-full">
                    {service.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-start gap-4 text-white/70 text-sm font-light leading-snug group-hover:text-white transition-colors duration-500">
                        <div className="w-1 h-1 rounded-full bg-[#E7B366] mt-2 flex-shrink-0" />
                        <span className="flex-1">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Pricing & CTA Section */}
                  <div className="mt-auto w-full pt-8 border-t border-white/5 relative z-50">
                    <div className="mb-6">
                      <p className="text-[10px] text-[#E7B366] uppercase tracking-[0.2em] font-semibold mb-1">Starting Investment</p>
                      <div className="flex items-baseline gap-1">
                        <span className="text-4xl font-light text-white" style={{ fontFamily: "var(--font-serif)" }}>₹{service.price.toLocaleString('en-IN')}</span>
                        <span className="text-white/30 text-[10px] uppercase tracking-widest font-medium">INR</span>
                      </div>
                    </div>

                    <motion.a
                      href={`/configure?tier=${service.id}`}
                      className="w-full group/btn relative py-5 rounded-xl border border-[#E7B366]/20 bg-white/5 overflow-hidden transition-all duration-500 hover:border-[#E7B366]/40 hover:shadow-[0_0_20px_rgba(231,179,102,0.1)] flex items-center justify-center"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-[#E7B366] to-[#C89B55] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <span className="relative z-10 text-white/80 group-hover:text-black font-semibold text-[10px] tracking-[0.4em] uppercase transition-all duration-500">
                        Acquire Package
                      </span>
                    </motion.a>
                  </div>

                  {/* Meteor effect */}
                  <Meteors number={12} />
                </div>
              </TiltCard>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Explore All Button */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="flex justify-center"
        >
          <motion.a
            href="/services"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="group relative px-12 py-6 rounded-full border border-white/10 bg-white/[0.02] text-white/60 hover:text-[#E7B366] hover:border-[#E7B366]/30 transition-all duration-500 overflow-hidden"
          >
            <span className="relative z-10 text-[10px] font-bold tracking-[0.4em] uppercase">Explore All Capabilities</span>
            <div className="absolute inset-0 bg-[#E7B366]/5 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
