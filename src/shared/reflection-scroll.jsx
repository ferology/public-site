import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

/**
 * ReflectionScroll Component
 * Creates a reflection effect that reveals on scroll
 * Inspired by Codrops Reflection Scroll effect
 */
export function ReflectionImage({ src, alt, className = '' }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  // Transform scroll progress to opacity for reflection
  const reflectionOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 0.6, 0]);
  const reflectionY = useTransform(scrollYProgress, [0, 0.5, 1], [20, 0, -20]);

  return (
    <div ref={ref} className={`relative overflow-visible ${className}`}>
      {/* Main Image */}
      <div className="relative">
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Reflection */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          opacity: reflectionOpacity,
          y: reflectionY,
        }}
      >
        <div
          className="w-full h-full"
          style={{
            background: `linear-gradient(
              to bottom,
              transparent 0%,
              rgba(205, 255, 0, 0.1) 40%,
              rgba(205, 255, 0, 0.2) 60%,
              rgba(205, 255, 0, 0.3) 100%
            )`,
            maskImage: 'linear-gradient(to bottom, transparent 0%, black 100%)',
            WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 100%)',
          }}
        >
          <img
            src={src}
            alt=""
            className="w-full h-full object-cover opacity-40"
            style={{
              transform: 'scaleY(-1)',
              filter: 'blur(2px)',
            }}
          />
        </div>
      </motion.div>
    </div>
  );
}

/**
 * ReflectionSection Component
 * Adds reflection effect to entire section
 */
export function ReflectionSection({ children, className = '' }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const reflectionOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 0.4, 0.4, 0]);
  const glowIntensity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);

  return (
    <div ref={ref} className={`relative ${className}`}>
      {children}

      {/* Reflection glow overlay */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          opacity: reflectionOpacity,
          background: `radial-gradient(
            ellipse at center,
            rgba(205, 255, 0, 0.15) 0%,
            transparent 70%
          )`,
        }}
      />

      {/* Edge glow */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-1 bg-accent"
        style={{
          opacity: glowIntensity,
          boxShadow: '0 0 20px rgba(205, 255, 0, 0.5)',
        }}
      />
    </div>
  );
}

/**
 * GlossyCard Component
 * Card with reflection effect
 */
export function GlossyCard({ children, className = '' }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const shine = useTransform(scrollYProgress, [0, 0.5, 1], [-100, 0, 100]);

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      {children}

      {/* Animated shine/reflection */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          x: shine,
          background: 'linear-gradient(90deg, transparent 0%, rgba(205, 255, 0, 0.2) 50%, transparent 100%)',
          width: '200%',
        }}
      />
    </div>
  );
}

/**
 * ScrollReflectionText Component
 * Text with reflection that follows scroll
 */
export function ScrollReflectionText({ children, className = '' }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const reflectionY = useTransform(scrollYProgress, [0, 1], [10, -10]);
  const reflectionOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 0.5, 0]);

  return (
    <div ref={ref} className={`relative inline-block ${className}`}>
      {/* Main text */}
      <div className="relative z-10">
        {children}
      </div>

      {/* Reflection */}
      <motion.div
        className="absolute top-full left-0 right-0 pointer-events-none"
        style={{
          y: reflectionY,
          opacity: reflectionOpacity,
        }}
      >
        <div
          style={{
            transform: 'scaleY(-1)',
            maskImage: 'linear-gradient(to bottom, black 0%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to bottom, black 0%, transparent 100%)',
          }}
        >
          <div className="text-accent opacity-30">
            {children}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
