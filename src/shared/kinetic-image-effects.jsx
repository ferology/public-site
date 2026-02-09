/**
 * Kinetic Editorial - Brutalist Image Effects
 * Aggressive image filters and animations for the kinetic aesthetic
 */

import React, { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

/**
 * Duotone Image - High contrast black/lime brutalist filter
 */
export function DuotoneImage({ src, alt, className = '' }) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <motion.img
        src={src}
        alt={alt}
        className="w-full h-full object-cover"
        style={{
          filter: 'contrast(1.2) saturate(0)',
          mixBlendMode: 'normal',
        }}
        whileHover={{
          filter: 'contrast(1.5) saturate(0.3)',
          scale: 1.05,
        }}
        transition={{ duration: 0.3 }}
      />
      {/* Lime overlay for duotone effect */}
      <div
        className="absolute inset-0 mix-blend-screen opacity-40"
        style={{
          background: 'linear-gradient(135deg, #cdff00 0%, transparent 100%)',
        }}
      />
    </div>
  );
}

/**
 * Glitch Image - Distortion effect on hover
 */
export function GlitchImage({ src, alt, className = '' }) {
  const [isGlitching, setIsGlitching] = useState(false);

  return (
    <div
      className={`relative overflow-hidden ${className}`}
      onMouseEnter={() => setIsGlitching(true)}
      onMouseLeave={() => setIsGlitching(false)}
    >
      {/* Main image */}
      <motion.img
        src={src}
        alt={alt}
        className="w-full h-full object-cover relative z-10"
        animate={isGlitching ? {
          x: [0, -2, 2, -1, 1, 0],
          filter: ['grayscale(0)', 'grayscale(0.8)', 'grayscale(0)'],
        } : {}}
        transition={{ duration: 0.4, repeat: isGlitching ? Infinity : 0 }}
      />

      {/* Red channel glitch */}
      <motion.img
        src={src}
        alt={alt}
        className="absolute inset-0 w-full h-full object-cover mix-blend-screen opacity-0"
        style={{ filter: 'brightness(2) sepia(1) hue-rotate(-50deg)' }}
        animate={isGlitching ? {
          opacity: [0, 0.3, 0],
          x: [0, -5, 0],
        } : { opacity: 0 }}
        transition={{ duration: 0.2, repeat: isGlitching ? Infinity : 0 }}
      />

      {/* Cyan channel glitch */}
      <motion.img
        src={src}
        alt={alt}
        className="absolute inset-0 w-full h-full object-cover mix-blend-screen opacity-0"
        style={{ filter: 'brightness(2) sepia(1) hue-rotate(100deg)' }}
        animate={isGlitching ? {
          opacity: [0, 0.3, 0],
          x: [0, 5, 0],
        } : { opacity: 0 }}
        transition={{ duration: 0.2, delay: 0.1, repeat: isGlitching ? Infinity : 0 }}
      />
    </div>
  );
}

/**
 * Pixelated Image - Lo-fi pixelation effect
 */
export function PixelatedImage({ src, alt, className = '', pixelSize = 10 }) {
  const [isPixelated, setIsPixelated] = useState(true);

  return (
    <motion.div
      className={`relative overflow-hidden ${className}`}
      onMouseEnter={() => setIsPixelated(false)}
      onMouseLeave={() => setIsPixelated(true)}
    >
      <motion.img
        src={src}
        alt={alt}
        className="w-full h-full object-cover"
        animate={{
          filter: isPixelated
            ? `contrast(1.2) saturate(1.5) url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='pixelate'%3E%3CfeFlood x='0' y='0' height='2' width='2'/%3E%3CfeComposite width='${pixelSize}' height='${pixelSize}'/%3E%3CfeTile result='a'/%3E%3CfeComposite in='SourceGraphic' in2='a' operator='in'/%3E%3CfeMorphology operator='dilate' radius='${pixelSize/2}'/%3E%3C/filter%3E%3C/svg%3E#pixelate")`
            : 'contrast(1.2) saturate(1.5)',
        }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
}

/**
 * Halftone Image - Dot pattern brutalist effect
 */
export function HalftoneImage({ src, alt, className = '' }) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <motion.img
        src={src}
        alt={alt}
        className="w-full h-full object-cover"
        style={{
          filter: 'contrast(1.3) brightness(1.1)',
        }}
        whileHover={{
          scale: 1.1,
          filter: 'contrast(1.5) brightness(1.2)',
        }}
        transition={{ duration: 0.4 }}
      />
      {/* Halftone overlay */}
      <div
        className="absolute inset-0 opacity-30 mix-blend-multiply pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle, black 1px, transparent 1px)`,
          backgroundSize: '4px 4px',
        }}
      />
    </div>
  );
}

/**
 * Split RGB Image - Color channel separation effect
 */
export function SplitRGBImage({ src, alt, className = '', intensity = 5 }) {
  const [offset, setOffset] = useState(0);

  return (
    <div
      className={`relative overflow-hidden ${className}`}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const centerX = rect.width / 2;
        const offsetX = ((x - centerX) / centerX) * intensity;
        setOffset(offsetX);
      }}
      onMouseLeave={() => setOffset(0)}
    >
      {/* Red channel */}
      <motion.img
        src={src}
        alt={alt}
        className="absolute inset-0 w-full h-full object-cover opacity-50"
        style={{ filter: 'brightness(1.5) sepia(1) hue-rotate(-30deg)' }}
        animate={{ x: -offset }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      />

      {/* Green channel */}
      <img
        src={src}
        alt={alt}
        className="relative w-full h-full object-cover opacity-50"
        style={{ filter: 'brightness(1.5) sepia(1) hue-rotate(60deg)' }}
      />

      {/* Blue channel */}
      <motion.img
        src={src}
        alt={alt}
        className="absolute inset-0 w-full h-full object-cover opacity-50"
        style={{ filter: 'brightness(1.5) sepia(1) hue-rotate(180deg)' }}
        animate={{ x: offset }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      />
    </div>
  );
}

/**
 * Brutalist Frame Image - Sharp borders with accent color
 */
export function BrutalistFrame({ src, alt, className = '', children }) {
  return (
    <motion.div
      className={`relative ${className}`}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      {/* Accent border layers */}
      <div className="absolute -inset-2 bg-accent opacity-20" />
      <div className="absolute -inset-1 bg-accent opacity-40" />

      {/* Main image container */}
      <div className="relative border-4 border-accent overflow-hidden">
        <motion.img
          src={src}
          alt={alt}
          className="w-full h-full object-cover"
          style={{ filter: 'contrast(1.2) grayscale(0.2)' }}
          whileHover={{
            filter: 'contrast(1.4) grayscale(0)',
            scale: 1.05,
          }}
          transition={{ duration: 0.3 }}
        />

        {/* Optional content overlay */}
        {children && (
          <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
            {children}
          </div>
        )}
      </div>
    </motion.div>
  );
}

/**
 * Scanline Image - Retro CRT scanline effect
 */
export function ScanlineImage({ src, alt, className = '' }) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <motion.img
        src={src}
        alt={alt}
        className="w-full h-full object-cover"
        style={{ filter: 'contrast(1.2)' }}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      />

      {/* Scanlines */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, black 2px, black 4px)',
        }}
      />

      {/* Animated scan */}
      <motion.div
        className="absolute inset-x-0 h-32 bg-gradient-to-b from-transparent via-accent/10 to-transparent"
        animate={{
          y: ['-100%', '100%'],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'linear',
        }}
      />
    </div>
  );
}

/**
 * Parallax Image - Scroll-based parallax effect
 */
export function ParallaxImage({ src, alt, className = '', speed = 0.5 }) {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', `${speed * 100}%`]);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <motion.img
        src={src}
        alt={alt}
        style={{ y }}
        className="w-full h-full object-cover scale-110"
      />
    </div>
  );
}
