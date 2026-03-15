import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Zap, Shield, Microscope } from 'lucide-react';
import DNAAnimation from './DNAAnimation';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen pt-32 pb-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/20 blur-[120px] rounded-full -z-10" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/20 blur-[120px] rounded-full -z-10" />

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-wider mb-6">
            <Zap size={14} />
            Next-Gen Agricultural Solutions
          </div>
          <h1 className="text-5xl md:text-7xl font-bold font-display leading-tight mb-6">
            Engineering the <span className="gradient-text">Future of Food</span> Security
          </h1>
          <p className="text-lg text-slate-400 mb-8 max-w-lg leading-relaxed">
            Harnessing the power of biotechnology to create resilient, high-yield, and sustainable crops for a growing global population.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <button className="px-8 py-4 rounded-2xl bg-blue-600 hover:bg-blue-500 text-white font-bold transition-all flex items-center gap-2 group shadow-lg shadow-blue-600/20">
              Explore Innovations
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 rounded-2xl glass hover:bg-white/10 text-white font-bold transition-all">
              Our Research
            </button>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-8">
            <div>
              <div className="text-3xl font-bold text-white mb-1">98%</div>
              <div className="text-xs text-slate-500 uppercase tracking-widest">Yield Increase</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-1">45+</div>
              <div className="text-xs text-slate-500 uppercase tracking-widest">Patented Genes</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-1">12k</div>
              <div className="text-xs text-slate-500 uppercase tracking-widest">Global Partners</div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative"
        >
          <DNAAnimation />
          
          {/* Floating Info Cards */}
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute -top-4 -right-4 glass p-4 rounded-2xl flex items-center gap-3"
          >
            <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400">
              <Shield size={20} />
            </div>
            <div>
              <div className="text-sm font-bold text-white">Bio-Resilience</div>
              <div className="text-[10px] text-slate-500">Enhanced Immunity</div>
            </div>
          </motion.div>

          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 5, repeat: Infinity, delay: 1 }}
            className="absolute -bottom-4 -left-4 glass p-4 rounded-2xl flex items-center gap-3"
          >
            <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400">
              <Microscope size={20} />
            </div>
            <div>
              <div className="text-sm font-bold text-white">Precision Editing</div>
              <div className="text-[10px] text-slate-500">CRISPR-Cas9 Optimized</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
