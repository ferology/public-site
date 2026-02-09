/**
 * Kinetic Editorial - Advanced Interaction Components
 * High-energy brutalist interactions with aggressive animations
 */

import React, { useEffect, useState, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

/**
 * Magnetic Button - Pulls cursor towards center
 */
export function MagneticButton({ children, className = '', ...props }) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 20, stiffness: 300 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const distanceX = (e.clientX - centerX) * 0.3;
    const distanceY = (e.clientY - centerY) * 0.3;
    x.set(distanceX);
    y.set(distanceY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      style={{ x: springX, y: springY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

/**
 * Tilt Card - 3D tilt effect on mouse move
 */
export function TiltCard({ children, className = '', intensity = 15, ...props }) {
  const ref = useRef(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;

    setRotateY((mouseX / rect.width) * intensity);
    setRotateX(-(mouseY / rect.height) * intensity);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{
        rotateX,
        rotateY,
      }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      style={{ transformStyle: 'preserve-3d' }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

/**
 * Glitch Text - Random character glitch effect on hover
 */
export function GlitchText({ children, className = '' }) {
  const [text, setText] = useState(children);
  const [isGlitching, setIsGlitching] = useState(false);
  const originalText = children;
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*';

  const glitch = () => {
    let iterations = 0;
    const interval = setInterval(() => {
      setText(prev =>
        prev.split('').map((char, index) => {
          if (index < iterations) {
            return originalText[index];
          }
          return chars[Math.floor(Math.random() * chars.length)];
        }).join('')
      );

      if (iterations >= originalText.length) {
        clearInterval(interval);
        setIsGlitching(false);
      }
      iterations += 1/3;
    }, 30);
  };

  const handleMouseEnter = () => {
    if (!isGlitching) {
      setIsGlitching(true);
      glitch();
    }
  };

  return (
    <span
      className={className}
      onMouseEnter={handleMouseEnter}
      style={{ cursor: 'pointer' }}
    >
      {text}
    </span>
  );
}

/**
 * Kinetic Cursor - Custom cursor follower with glow effect
 */
export function KineticCursor() {
  const cursorRef = useRef(null);
  const cursorGlowRef = useRef(null);
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    const cursor = cursorRef.current;
    const cursorGlow = cursorGlowRef.current;

    const handleMouseMove = (e) => {
      if (cursor && cursorGlow) {
        cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
        cursorGlow.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      }
    };

    const handleMouseOver = (e) => {
      if (e.target.tagName === 'BUTTON' || e.target.tagName === 'A' ||
          e.target.closest('button') || e.target.closest('a')) {
        setIsPointer(true);
      } else {
        setIsPointer(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <>
      <motion.div
        ref={cursorGlowRef}
        className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-screen"
        style={{
          width: '40px',
          height: '40px',
          marginLeft: '-20px',
          marginTop: '-20px',
        }}
        animate={{
          scale: isPointer ? 2 : 1,
          opacity: isPointer ? 0.3 : 0.15,
        }}
        transition={{ duration: 0.2 }}
      >
        <div className="w-full h-full bg-accent rounded-full blur-xl" />
      </motion.div>
      <motion.div
        ref={cursorRef}
        className="fixed top-0 left-0 pointer-events-none z-[9999]"
        style={{
          width: '8px',
          height: '8px',
          marginLeft: '-4px',
          marginTop: '-4px',
        }}
        animate={{
          scale: isPointer ? 1.5 : 1,
        }}
        transition={{ duration: 0.2 }}
      >
        <div className="w-full h-full bg-accent rounded-full" />
      </motion.div>
    </>
  );
}

/**
 * Scroll Progress Bar - Shows scroll progress with accent color
 */
export function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-accent origin-left z-50"
      style={{ scaleX: scrollProgress / 100 }}
      initial={{ scaleX: 0 }}
    />
  );
}

/**
 * Reveal on Scroll - Wrapper for scroll-triggered animations
 */
export function RevealOnScroll({
  children,
  direction = 'up',
  delay = 0,
  className = ''
}) {
  const directions = {
    up: { y: 60, x: 0 },
    down: { y: -60, x: 0 },
    left: { x: 60, y: 0 },
    right: { x: -60, y: 0 }
  };

  return (
    <motion.div
      className={className}
      initial={{
        opacity: 0,
        ...directions[direction]
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0
      }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.22, 1, 0.36, 1]
      }}
    >
      {children}
    </motion.div>
  );
}

/**
 * Stagger Container - Staggers children animations
 */
export function StaggerContainer({ children, staggerDelay = 0.1, className = '' }) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      variants={{
        visible: {
          transition: {
            staggerChildren: staggerDelay
          }
        }
      }}
    >
      {children}
    </motion.div>
  );
}

/**
 * Stagger Item - Child component for StaggerContainer
 */
export function StaggerItem({ children, className = '' }) {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y: 40 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1]
          }
        }
      }}
    >
      {children}
    </motion.div>
  );
}

/**
 * Split Text Animation - Animates text letter by letter
 */
export function SplitText({ text, className = '', delay = 0 }) {
  const letters = text.split('');

  return (
    <motion.span
      className={className}
      initial="hidden"
      animate="visible"
      variants={{
        visible: {
          transition: {
            staggerChildren: 0.03,
            delayChildren: delay
          }
        }
      }}
    >
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.4,
                ease: [0.22, 1, 0.36, 1]
              }
            }
          }}
          style={{ display: 'inline-block' }}
        >
          {letter === ' ' ? '\u00A0' : letter}
        </motion.span>
      ))}
    </motion.span>
  );
}

/**
 * Floating Element - Continuous floating animation
 */
export function FloatingElement({
  children,
  duration = 3,
  yOffset = 10,
  className = ''
}) {
  return (
    <motion.div
      className={className}
      animate={{
        y: [0, -yOffset, 0],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: 'easeInOut'
      }}
    >
      {children}
    </motion.div>
  );
}

/**
 * Ripple Effect - Click ripple animation
 */
export function RippleButton({ children, className = '', ...props }) {
  const [ripples, setRipples] = useState([]);

  const createRipple = (e) => {
    const button = e.currentTarget;
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;

    const newRipple = {
      x,
      y,
      size,
      id: Date.now()
    };

    setRipples(prev => [...prev, newRipple]);

    setTimeout(() => {
      setRipples(prev => prev.filter(r => r.id !== newRipple.id));
    }, 600);
  };

  return (
    <button
      className={`relative overflow-hidden ${className}`}
      onClick={createRipple}
      {...props}
    >
      {children}
      {ripples.map(ripple => (
        <motion.span
          key={ripple.id}
          className="absolute bg-accent/30 rounded-full pointer-events-none"
          style={{
            left: ripple.x,
            top: ripple.y,
            width: ripple.size,
            height: ripple.size,
          }}
          initial={{ scale: 0, opacity: 1 }}
          animate={{ scale: 2, opacity: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        />
      ))}
    </button>
  );
}
