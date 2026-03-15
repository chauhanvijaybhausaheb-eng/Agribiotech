import React from 'react';
import { motion } from 'motion/react';
import { Leaf, Wind, Sun, Thermometer } from 'lucide-react';

const techniques = [
  {
    title: "Climate-Adaptive Maize",
    desc: "Engineered to withstand extreme temperature fluctuations and high salinity soil.",
    icon: Thermometer,
    image: "https://picsum.photos/seed/maize/400/300"
  },
  {
    title: "Pest-Resistant Rice",
    desc: "Natural bio-defenses integrated into the genetic structure, reducing pesticide use by 90%.",
    icon: Wind,
    image: "https://picsum.photos/seed/rice/400/300"
  },
  {
    title: "High-Yield Soybeans",
    desc: "Optimized photosynthesis pathways for faster growth and higher protein content.",
    icon: Sun,
    image: "https://picsum.photos/seed/soy/400/300"
  },
  {
    title: "Vertical Farming Grains",
    desc: "Dwarf varieties specifically designed for high-density indoor farming environments.",
    icon: Leaf,
    image: "https://picsum.photos/seed/vertical/400/300"
  }
];

export default function Crops() {
  return (
    <section id="crops" className="py-24 bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">Crops & <span className="gradient-text">Techniques</span></h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Explore our diverse portfolio of bio-engineered crops and the advanced farming techniques that support them.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {techniques.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              className="group relative rounded-3xl overflow-hidden glass"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-slate-950/40 to-transparent p-6 flex flex-col justify-end">
                <div className="w-10 h-10 rounded-xl bg-blue-500/20 backdrop-blur-md flex items-center justify-center text-blue-400 mb-4">
                  <item.icon size={20} />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-slate-400 text-xs leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
