'use client';

import { CuboidIcon as Cube, Square } from 'lucide-react';
import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

import { cn } from '@/lib/utils';

interface ViewModeToggleProps {
  value: '2D' | '3D';
  onChange: (value: '2D' | '3D') => void;
}

export function ViewModeToggle({ value, onChange }: ViewModeToggleProps) {
  // Track hover state for glow effect
  const [isHovered, setIsHovered] = useState(false);

  // Track if we should show the glow animation
  const [showGlow, setShowGlow] = useState(false);

  // Start the glow animation after component mounts
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowGlow(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div
      className='relative flex rounded-lg bg-white/90 p-1.5 shadow-lg backdrop-blur-sm'
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 0.2 }}
    >
      {/* Glow effect */}
      {showGlow && (
        <motion.div
          className={cn(
            'absolute inset-0 rounded-lg opacity-0',
            value === '3D' ? 'bg-blue-400' : 'bg-emerald-400',
          )}
          animate={{
            boxShadow: isHovered
              ? value === '3D'
                ? '0 0 15px 2px rgba(96, 165, 250, 0.7)'
                : '0 0 15px 2px rgba(52, 211, 153, 0.7)'
              : '0 0 0px 0px rgba(0, 0, 0, 0)',
            opacity: isHovered ? 0.15 : 0,
          }}
          transition={{ duration: 0.3 }}
        />
      )}
      {/* Background pill that moves */}
      <motion.div
        className={cn(
          'absolute z-0 h-9 rounded-md transition-colors',
          value === '3D' ? 'bg-blue-50' : 'bg-emerald-50',
        )}
        initial={false}
        animate={{
          width: 56,
          x: value === '3D' ? 58 : 0,
        }}
        transition={{
          type: 'spring',
          stiffness: 300,
          damping: 25,
          mass: 0.5,
        }}
      />
      {/* 2D Button */}
      <motion.button
        className={cn(
          'relative z-10 flex h-9 w-14 items-center justify-center rounded-md transition-colors',
          value === '2D' ? 'text-emerald-600' : 'text-gray-400 hover:text-gray-500',
        )}
        whileTap={{ scale: 0.95 }}
        onClick={() => onChange('2D')}
      >
        <Square className='mr-1 h-4 w-4' />
        <span className='text-xs font-medium'>2D</span>
      </motion.button>
      {/* 3D Button */}
      <motion.button
        className={cn(
          'relative z-10 flex h-9 w-14 items-center justify-center rounded-md transition-colors',
          value === '3D' ? 'text-blue-600' : 'text-gray-400 hover:text-gray-500',
        )}
        whileTap={{ scale: 0.95 }}
        onClick={() => onChange('3D')}
      >
        <Cube className='mr-1 h-4 w-4' />
        <span className='text-xs font-medium'>3D</span>
      </motion.button>
    </motion.div>
  );
}
