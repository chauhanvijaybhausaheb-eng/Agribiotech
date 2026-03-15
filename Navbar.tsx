import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Leaf, FlaskConical, Sprout, Newspaper, Image as ImageIcon, ShoppingBag, Mail, Info } from 'lucide-react';
import { cn } from '../lib/utils';

const navItems = [
  { name: 'Home', href: '#home', icon: Sprout },
  { name: 'About', href: '#about', icon: Info },
  { name: 'Research', href: '#research', icon: FlaskConical },
  { name: 'Crops', href: '#crops', icon: Leaf },
  { name: 'News', href: '#news', icon: Newspaper },
  { name: 'Gallery', href: '#gallery', icon: ImageIcon },
  { name: 'Products', href: '#products', icon: ShoppingBag },
  { name: 'Contact', href: '#contact', icon: Mail },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 py-4",
      scrolled ? "bg-slate-950/80 backdrop-blur-md py-2" : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto flex items-center justify-between glass rounded-2xl px-6 py-3">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-xl bg-linear-to-br from-blue-500 to-purple-600 flex items-center justify-center">
            <FlaskConical className="text-white w-6 h-6" />
          </div>
          <span className="text-xl font-bold font-display tracking-tight text-white">Agri<span className="text-blue-400">Bio</span>Tech</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-slate-300 hover:text-blue-400 transition-colors"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-slate-300"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-20 left-4 right-4 glass rounded-2xl p-6 flex flex-col gap-4"
          >
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-3 text-slate-300 hover:text-blue-400 transition-colors py-2"
              >
                <item.icon size={18} />
                {item.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
