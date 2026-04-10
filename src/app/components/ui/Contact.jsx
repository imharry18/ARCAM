'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, MapPin, Phone, ArrowRight, MessageSquare, Send } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formState, setFormState] = useState('idle'); // idle, sending, success

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormState('sending');
    // Simulate API call
    setTimeout(() => {
      setFormState('success');
      setTimeout(() => setFormState('idle'), 3000);
    }, 1500);
  };

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
    hidden: { opacity: 0, y: 20 },
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
    <section ref={ref} id="contact" className="relative py-24 md:py-32 bg-black overflow-hidden antialiased">
      {/* Background Accents */}
      <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-[#E7B366]/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4" />
      <div className="absolute bottom-0 left-0 w-[40vw] h-[40vw] bg-[#E7B366]/3 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/4" />

      <div className="container-max relative z-10 px-4 md:px-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-start"
        >
          {/* Left Column: Info */}
          <div className="flex flex-col">
            <motion.div variants={itemVariants} className="mb-12">
              <div className="flex items-center gap-4 mb-6">
                <span className="text-[10px] font-bold text-[#E7B366] tracking-[0.6em] uppercase">Inquiries</span>
                <div className="w-24 h-px bg-gradient-to-r from-[#E7B366]/40 to-transparent" />
              </div>
              <h2 className="text-5xl md:text-7xl font-light tracking-tighter text-white mb-6" style={{ fontFamily: "var(--font-serif)" }}>
                Start your <br />
                <em className="text-[#E7B366] italic not-italic">Transformation</em>
              </h2>
              <p className="text-white/50 text-lg font-light leading-relaxed max-w-md">
                Ready to redefine your digital presence? Reach out to our advisory team to discuss your next high-impact project.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-10">
              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center transition-colors duration-500 group-hover:border-[#E7B366]/30">
                  <Mail size={20} className="text-[#E7B366]/70 group-hover:text-[#E7B366] transition-colors" />
                </div>
                <div>
                  <p className="text-[10px] text-[#E7B366] uppercase tracking-widest font-bold mb-1">Email Advisory</p>
                  <a href="mailto:hello@arcam.project" className="text-xl text-white/80 hover:text-white transition-colors tracking-tight">hello@arcam.project</a>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center transition-colors duration-500 group-hover:border-[#E7B366]/30">
                  <MapPin size={20} className="text-[#E7B366]/70 group-hover:text-[#E7B366] transition-colors" />
                </div>
                <div>
                  <p className="text-[10px] text-[#E7B366] uppercase tracking-widest font-bold mb-1">HQ Location</p>
                  <p className="text-xl text-white/80 tracking-tight">Silicon Valley, CA & Remote Global</p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center transition-colors duration-500 group-hover:border-[#E7B366]/30">
                  <MessageSquare size={20} className="text-[#E7B366]/70 group-hover:text-[#E7B366] transition-colors" />
                </div>
                <div>
                  <p className="text-[10px] text-[#E7B366] uppercase tracking-widest font-bold mb-1">Direct Connect</p>
                  <a href="#" className="text-xl text-white/80 hover:text-white transition-colors tracking-tight">Schedule a Discovery Call</a>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Form */}
          <motion.div variants={itemVariants} className="relative">
            <div className="p-8 md:p-12 rounded-[2.5rem] bg-white/[0.02] border border-white/5 backdrop-blur-3xl shadow-2xl relative overflow-hidden group">
              {/* Subtle glass effect highlight */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              <form onSubmit={handleSubmit} className="relative z-10 space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-[10px] text-[#E7B366] uppercase tracking-widest font-bold ml-1">Full Name</label>
                    <input 
                      type="text" 
                      required 
                      placeholder="John Doe"
                      className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-white/20 focus:outline-none focus:border-[#E7B366]/40 transition-all duration-300"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] text-[#E7B366] uppercase tracking-widest font-bold ml-1">Email Address</label>
                    <input 
                      type="email" 
                      required 
                      placeholder="john@example.com"
                      className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-white/20 focus:outline-none focus:border-[#E7B366]/40 transition-all duration-300"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] text-[#E7B366] uppercase tracking-widest font-bold ml-1">Service Tier</label>
                  <select 
                    className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-6 py-4 text-white appearance-none focus:outline-none focus:border-[#E7B366]/40 transition-all duration-300"
                  >
                    <option className="bg-neutral-900">LaunchPad Site (Tier I)</option>
                    <option className="bg-neutral-900">Growth Engine (Tier II)</option>
                    <option className="bg-neutral-900">Authority Builder (Tier III)</option>
                    <option className="bg-neutral-900">Revenue Architecture (Tier IV)</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] text-[#E7B366] uppercase tracking-widest font-bold ml-1">Project Brief</label>
                  <textarea 
                    required 
                    rows={4}
                    placeholder="Tell us about your vision..."
                    className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-white/20 focus:outline-none focus:border-[#E7B366]/40 transition-all duration-300 resize-none"
                  />
                </div>

                <button 
                  disabled={formState !== 'idle'}
                  className="w-full group/btn relative py-6 rounded-2xl border border-[#E7B366]/20 bg-white/5 overflow-hidden transition-all duration-500 hover:border-[#E7B366]/40 flex items-center justify-center gap-3"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-[#E7B366] to-[#C89B55] opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500" />
                  
                  {formState === 'idle' && (
                    <>
                      <span className="relative z-10 text-white/80 group-hover/btn:text-black font-semibold text-[10px] tracking-[0.4em] uppercase transition-all duration-500">
                        Dispatch Inquiry
                      </span>
                      <Send size={14} className="relative z-10 text-[#E7B366] group-hover/btn:text-black transition-all duration-500" />
                    </>
                  )}

                  {formState === 'sending' && (
                    <span className="relative z-10 text-[#E7B366] font-semibold text-[10px] tracking-[0.4em] uppercase animate-pulse">
                      Processing...
                    </span>
                  )}

                  {formState === 'success' && (
                    <span className="relative z-10 text-[#E7B366] font-semibold text-[10px] tracking-[0.4em] uppercase">
                      Inquiry Received
                    </span>
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
