import React from 'react';
import { motion } from 'motion/react';
import { FlaskConical, Dna, Cpu, Droplets } from 'lucide-react';

const innovations = [
  {
    icon: Dna,
    title: "Genome Mapping",
    desc: "Complete sequencing of drought-resistant wild grains to transfer resilience to commercial wheat.",
    tags: ["Genetics", "Wheat"]
  },
  {
    icon: Cpu,
    title: "AI-Driven Breeding",
    desc: "Using machine learning to predict the most successful genetic combinations for nutrient density.",
    tags: ["AI", "Data Science"]
  },
  {
    icon: Droplets,
    title: "Hydro-Efficiency",
    desc: "Developing crops that require 40% less water while maintaining optimal growth rates.",
    tags: ["Sustainability", "Water"]
  },
  {
    icon: FlaskConical,
    title: "Bio-Fortification",
    desc: "Enhancing staple crops with essential vitamins and minerals to combat malnutrition.",
    tags: ["Nutrition", "Health"]
  }
];

export default function Research() {
  return (
    <section id="research" className="py-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-blue-500/10 blur-[100px] -z-10" />
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">Research & <span className="gradient-text">Innovations</span></h2>
            <p className="text-slate-400">
              Our laboratories are constantly pushing the boundaries of what's possible in plant science.
            </p>
          </div>
          <button className="text-blue-400 font-bold flex items-center gap-2 hover:text-blue-300 transition-colors">
            View All Papers <Dna size={18} />
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {innovations.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="glass p-8 rounded-3xl flex flex-col md:flex-row gap-8 hover:border-blue-500/30 transition-all"
            >
              <div className="w-16 h-16 shrink-0 rounded-2xl bg-linear-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white shadow-lg shadow-blue-500/20">
                <item.icon size={32} />
              </div>
              <div>
                <div className="flex gap-2 mb-3">
                  {item.tags.map(tag => (
                    <span key={tag} className="text-[10px] font-bold uppercase tracking-widest text-blue-400 bg-blue-400/10 px-2 py-1 rounded-md">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-slate-400 leading-relaxed mb-4">
                  {item.desc}
                </p>
                <div className="w-full h-1 bg-slate-800 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: '70%' }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="h-full bg-linear-to-r from-blue-500 to-purple-500"
                  />
                </div>
                <div className="flex justify-between mt-2">
                  <span className="text-[10px] text-slate-500 uppercase">Progress</span>
                  <span className="text-[10px] text-blue-400 font-bold">70% Complete</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
