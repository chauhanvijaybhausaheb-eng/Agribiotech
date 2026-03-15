import React from 'react';
import { motion } from 'motion/react';
import { Target, Users, Globe, Award } from 'lucide-react';
import { cn } from '../lib/utils';

const values = [
  {
    icon: Target,
    title: "Our Mission",
    desc: "To eliminate global hunger through sustainable biotechnological advancements and ethical genetic engineering.",
    color: "text-blue-400",
    bg: "bg-blue-400/10"
  },
  {
    icon: Globe,
    title: "Global Reach",
    desc: "Partnering with farmers in over 50 countries to implement climate-resilient farming techniques.",
    color: "text-purple-400",
    bg: "bg-purple-400/10"
  },
  {
    icon: Users,
    title: "Expert Team",
    desc: "Over 500 world-class geneticists, agronomists, and data scientists working towards a common goal.",
    color: "text-teal-400",
    bg: "bg-teal-400/10"
  },
  {
    icon: Award,
    title: "Innovation First",
    desc: "Recipient of the Global Ag-Tech Excellence Award for three consecutive years.",
    color: "text-rose-400",
    bg: "bg-rose-400/10"
  }
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold font-display mb-4"
          >
            Pioneering <span className="gradient-text">Sustainable Agriculture</span>
          </motion.h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            AgriBioTech is at the forefront of the second green revolution, combining traditional wisdom with cutting-edge molecular biology.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="glass p-8 rounded-3xl hover:bg-white/10 transition-all group"
            >
              <div className={cn("w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform", item.bg, item.color)}>
                <item.icon size={28} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative rounded-3xl overflow-hidden aspect-video">
            <img 
              src="https://picsum.photos/seed/lab/800/600" 
              alt="Laboratory" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-linear-to-t from-slate-950/80 to-transparent" />
          </div>
          <div>
            <h3 className="text-3xl font-bold text-white mb-6 font-display">Our Commitment to Ethics</h3>
            <p className="text-slate-400 mb-6 leading-relaxed">
              We believe that biotechnology should be accessible and safe. Every gene we modify undergoes rigorous multi-year testing in controlled environments before field trials.
            </p>
            <ul className="space-y-4">
              {['Non-GMO cross-breeding techniques', 'Biodiversity preservation protocols', 'Open-source genetic data for researchers'].map((point) => (
                <li key={point} className="flex items-center gap-3 text-slate-200">
                  <div className="w-2 h-2 rounded-full bg-blue-500" />
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
