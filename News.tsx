import React from 'react';
import { motion } from 'motion/react';
import { Calendar, ArrowRight } from 'lucide-react';

const news = [
  {
    date: "March 12, 2026",
    title: "Breakthrough in Salt-Tolerant Rice Varieties",
    category: "Research",
    image: "https://picsum.photos/seed/news1/600/400"
  },
  {
    date: "March 08, 2026",
    title: "AgriBioTech Partners with UN Food Program",
    category: "Partnership",
    image: "https://picsum.photos/seed/news2/600/400"
  },
  {
    date: "March 01, 2026",
    title: "New Vertical Farming Facility Opens in Dubai",
    category: "Expansion",
    image: "https://picsum.photos/seed/news3/600/400"
  }
];

export default function News() {
  return (
    <section id="news" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-4xl font-bold font-display">News & <span className="gradient-text">Updates</span></h2>
          <button className="hidden md:flex items-center gap-2 text-slate-400 hover:text-white transition-colors">
            View All News <ArrowRight size={18} />
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {news.map((item, i) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-video rounded-3xl overflow-hidden mb-6">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-blue-600 text-[10px] font-bold text-white uppercase tracking-wider">
                  {item.category}
                </div>
              </div>
              <div className="flex items-center gap-2 text-slate-500 text-xs mb-3">
                <Calendar size={14} />
                {item.date}
              </div>
              <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors leading-tight">
                {item.title}
              </h3>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
