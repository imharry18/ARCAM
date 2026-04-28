'use client';

import React from "react";
import { Carousel, Card } from "./AppleCardsCarousel";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Projects() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <section ref={ref} id="work" className="relative min-h-screen flex flex-col justify-center py-10 md:py-16 bg-black overflow-hidden antialiased">
      <div className="container-max relative z-10">
        {/* Section Header - Compact Editorial Style */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-4 md:mb-6 text-center"
        >
          <div className="flex flex-col items-center gap-4 mb-6">
            <span className="text-[10px] font-bold text-[#E7B366] tracking-[0.6em] uppercase">Selected Works</span>
            <div className="w-12 h-px bg-[#E7B366]/30" />
          </div>
          <h2 className="text-4xl md:text-6xl lg:text-8xl font-light tracking-tighter text-white" style={{ fontFamily: "'Cinzel', serif" }}>
            The <em className="text-[#E7B366] italic not-italic">Portfolio</em>
          </h2>
          <p className="mt-4 text-sm md:text-base text-white/30 max-w-xl mx-auto font-light leading-relaxed">
            A curated selection of high-velocity digital ecosystems engineered for the world's most ambitious brands.
          </p>
        </motion.div>

        <div className="w-full">
          <Carousel items={cards} />
        </div>
      </div>
    </section>
  );
}

const ProjectContent = ({ title, description, image }) => {
  return (
    <div className="bg-[#0A0A0A] p-8 md:p-14 rounded-3xl mb-4 border border-white/5">
      <p className="text-white/40 text-base md:text-2xl font-light max-w-3xl mx-auto leading-relaxed">
        <span className="font-bold text-[#E7B366] mb-4 block text-3xl md:text-5xl" style={{ fontFamily: "'Cinzel', serif" }}>
          {title}
        </span>
        {description}
      </p>
      <div className="mt-12 relative aspect-video w-full rounded-2xl overflow-hidden border border-white/10">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

const data = [
  {
    category: "Luxury Real Estate",
    title: "Aura Global Residences",
    website: "aura-global.studio",
    src: "/projects/1.jpg",
    content: <ProjectContent 
      title="Aura Global" 
      description="A high-performance digital ecosystem for elite global residences, featuring cinematic storytelling and seamless conversion architecture." 
      image="/projects/1.jpg" 
    />,
  },
  {
    category: "Fintech Elite",
    title: "Zenith Capital Systems",
    website: "zenith-systems.io",
    src: "/projects/2.jpeg",
    content: <ProjectContent 
      title="Zenith Capital" 
      description="Architecting the future of private wealth management with surgical precision and cutting-edge financial infrastructure." 
      image="/projects/2.jpeg" 
    />,
  },
  {
    category: "Digital Art",
    title: "Ether Nexus Gallery",
    website: "ether-nexus.art",
    src: "/projects/3.png",
    content: <ProjectContent 
      title="Ether Nexus" 
      description="A bespoke digital gallery engineered for high-fidelity art consumption and avant-garde interactive experiences." 
      image="/projects/3.png" 
    />,
  },
  {
    category: "Automotive Precision",
    title: "Velocity Motors Lab",
    website: "velocity-lab.tech",
    src: "/projects/4.jpg",
    content: <ProjectContent 
      title="Velocity Lab" 
      description="Engineering a high-velocity digital presence for the world's fastest automotive testing facility." 
      image="/projects/4.jpg" 
    />,
  },
];
