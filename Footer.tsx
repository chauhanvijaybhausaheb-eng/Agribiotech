import React from 'react';
import { FlaskConical, Twitter, Linkedin, Github, Youtube, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="bg-slate-950 pt-20 pb-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-linear-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                <FlaskConical className="text-white w-6 h-6" />
              </div>
              <span className="text-xl font-bold font-display tracking-tight text-white">Agri<span className="text-blue-400">Bio</span>Tech</span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed">
              Leading the global transition to sustainable, resilient, and high-yield agriculture through advanced biotechnology and ethical genetic engineering.
            </p>
            <div className="flex gap-4">
              {[Twitter, Linkedin, Github, Youtube].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center text-slate-400 hover:text-blue-400 hover:border-blue-400/50 transition-all">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-sm text-slate-500">
              {['Home', 'About Us', 'Research', 'Crops', 'News'].map(link => (
                <li key={link}><a href={`#${link.toLowerCase()}`} className="hover:text-blue-400 transition-colors">{link}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Resources</h4>
            <ul className="space-y-4 text-sm text-slate-500">
              {['White Papers', 'Case Studies', 'Lab Reports', 'Privacy Policy', 'Terms of Service'].map(link => (
                <li key={link}><a href="#" className="hover:text-blue-400 transition-colors">{link}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Newsletter</h4>
            <p className="text-slate-500 text-sm mb-4">Stay updated with our latest breakthroughs.</p>
            <div className="flex gap-2">
              <input type="email" placeholder="Email" className="bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-blue-500 w-full" />
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-blue-500 transition-colors">Join</button>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-10 border-t border-white/5 gap-6">
          <div className="text-slate-600 text-xs">
            © 2026 AgriBioTech Inc. All rights reserved. Designed for the future.
          </div>
          <button 
            onClick={scrollToTop}
            className="group flex items-center gap-2 text-slate-500 hover:text-white transition-colors text-xs font-bold uppercase tracking-widest"
          >
            Back to Top
            <div className="w-8 h-8 rounded-full glass flex items-center justify-center group-hover:-translate-y-1 transition-transform">
              <ArrowUp size={14} />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
}
