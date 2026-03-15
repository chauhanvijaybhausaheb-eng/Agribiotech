import React from 'react';
import { motion } from 'motion/react';

export default function DNAAnimation() {
  const pairs = 15;
  
  return (
    <div className="relative w-full h-[400px] flex items-center justify-center perspective-1000">
      <div className="relative w-48 h-full flex flex-col justify-between py-10">
        {Array.from({ length: pairs }).map((_, i) => (
          <motion.div
            key={i}
            className="relative w-full h-2 flex items-center justify-center"
            animate={{
              rotateY: 360,
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "linear",
              delay: i * 0.2,
            }}
          >
            {/* Left Node */}
            <motion.div 
              className="absolute left-0 w-4 h-4 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]"
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            
            {/* Connecting Bar */}
            <div className="w-full h-0.5 bg-slate-700/50" />
            
            {/* Right Node */}
            <motion.div 
              className="absolute right-0 w-4 h-4 rounded-full bg-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.5)]"
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{ duration: 2, repeat: Infinity, delay: 1 }}
            />

            {/* Gene Insertion Animation (Center) */}
            {i === 7 && (
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ 
                  scale: [0, 1.5, 1], 
                  opacity: [0, 1, 1],
                  backgroundColor: ["#3b82f6", "#f43f5e", "#3b82f6"]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatDelay: 2
                }}
                className="absolute w-6 h-6 rounded-full bg-rose-500 blur-[2px] z-10"
              />
            )}
          </motion.div>
        ))}
      </div>
      
      {/* Decorative Glow */}
      <div className="absolute inset-0 bg-blue-500/10 blur-[100px] rounded-full" />
    </div>
  );
}
