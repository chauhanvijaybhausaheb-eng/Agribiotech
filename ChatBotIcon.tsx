import React from 'react';
import { motion } from 'motion/react';
import { MessageSquareCode } from 'lucide-react';

export default function ChatBotIcon() {
  return (
    <motion.a
      href="/chat" // User will replace this link
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-8 right-8 z-50 group"
    >
      <div className="absolute -top-12 right-0 bg-blue-600 text-white text-[10px] font-bold px-3 py-1.5 rounded-full whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-lg">
        Ask CropGuard AI
      </div>
      <div className="w-16 h-16 rounded-2xl bg-linear-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white shadow-2xl shadow-blue-500/40 border border-white/20 relative overflow-hidden">
        <MessageSquareCode size={32} />
        <motion.div 
          animate={{ x: ['-100%', '100%'] }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent"
        />
      </div>
    </motion.a>
  );
}
