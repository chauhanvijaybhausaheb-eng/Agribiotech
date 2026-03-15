import React from 'react';
import { motion } from 'motion/react';
import { ShoppingCart, Star } from 'lucide-react';

const products = [
  {
    name: "Bio-Boost Nutrient Serum",
    price: "$89.99",
    rating: 4.9,
    image: "https://picsum.photos/seed/prod1/400/400",
    desc: "Concentrated genetic catalyst for root development."
  },
  {
    name: "Resili-Seed Wheat Pack",
    price: "$124.50",
    rating: 4.8,
    image: "https://picsum.photos/seed/prod2/400/400",
    desc: "Drought-resistant wheat seeds for arid climates."
  },
  {
    name: "Nano-Sensor Soil Kit",
    price: "$210.00",
    rating: 5.0,
    image: "https://picsum.photos/seed/prod3/400/400",
    desc: "Real-time genetic health monitoring for your soil."
  },
  {
    name: "Aqua-Save Polymer",
    price: "$45.00",
    rating: 4.7,
    image: "https://picsum.photos/seed/prod4/400/400",
    desc: "Bio-degradable water retention crystals."
  }
];

export default function Products() {
  return (
    <section id="products" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">Our <span className="gradient-text">Products</span></h2>
          <p className="text-slate-400">Professional-grade biotechnology tools for the modern farmer.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="glass p-4 rounded-3xl group"
            >
              <div className="aspect-square rounded-2xl overflow-hidden mb-6 relative">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <button className="absolute bottom-4 right-4 w-12 h-12 rounded-xl bg-blue-600 text-white flex items-center justify-center shadow-lg translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all">
                  <ShoppingCart size={20} />
                </button>
              </div>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-1 text-amber-400">
                  <Star size={14} fill="currentColor" />
                  <span className="text-xs font-bold">{item.rating}</span>
                </div>
                <span className="text-blue-400 font-bold">{item.price}</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{item.name}</h3>
              <p className="text-slate-500 text-xs leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
