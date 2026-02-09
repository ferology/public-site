/**
 * Kinetic Editorial Motion System
 * Animation presets for Framer Motion with brutalist kinetic easing
 */

// ========== EASING CURVES ==========
export const kineticEasing = [0.22, 1, 0.36, 1];
export const snapEasing = [0.86, 0, 0.07, 1];
export const bounceEasing = [0.68, -0.55, 0.265, 1.55];

// ========== DURATION PRESETS ==========
export const duration = {
  instant: 0.1,
  fast: 0.2,
  base: 0.3,
  slow: 0.4,
};

// ========== ANIMATION VARIANTS ==========

/**
 * Slide in from left with snap
 */
export const slideInLeft = {
  initial: { opacity: 0, x: -60 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -60 },
  transition: { duration: duration.base, ease: snapEasing }
};

/**
 * Slide in from right with snap
 */
export const slideInRight = {
  initial: { opacity: 0, x: 60 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 60 },
  transition: { duration: duration.base, ease: snapEasing }
};

/**
 * Slide up with kinetic easing
 */
export const slideUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 40 },
  transition: { duration: duration.base, ease: kineticEasing }
};

/**
 * Fade in with scale (pop effect)
 */
export const popIn = {
  initial: { opacity: 0, scale: 0.9 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.9 },
  transition: { duration: duration.fast, ease: snapEasing }
};

/**
 * Sharp scale on hover
 */
export const scaleOnHover = {
  whileHover: { scale: 1.05 },
  whileTap: { scale: 0.98 },
  transition: { duration: duration.fast, ease: kineticEasing }
};

/**
 * Lift on hover (translateY)
 */
export const liftOnHover = {
  whileHover: { y: -4 },
  whileTap: { y: 0 },
  transition: { duration: duration.fast, ease: kineticEasing }
};

/**
 * Stagger children with aggressive timing
 */
export const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    }
  }
};

/**
 * Page transition (full fade)
 */
export const pageTransition = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: duration.base, ease: kineticEasing }
};

/**
 * Snap to position (no easing)
 */
export const snapTo = {
  transition: { duration: duration.instant, ease: snapEasing }
};

// ========== SCROLL REVEAL ==========

/**
 * Reveal element when it enters viewport
 */
export const scrollReveal = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: duration.base, ease: kineticEasing }
};

/**
 * Reveal with slide from left
 */
export const scrollRevealLeft = {
  initial: { opacity: 0, x: -40 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: duration.base, ease: snapEasing }
};

/**
 * Reveal with scale
 */
export const scrollRevealScale = {
  initial: { opacity: 0, scale: 0.95 },
  whileInView: { opacity: 1, scale: 1 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: duration.base, ease: kineticEasing }
};

// ========== UTILITY FUNCTIONS ==========

/**
 * Create custom stagger container
 * @param {number} staggerDelay - Delay between children (in seconds)
 * @param {number} initialDelay - Delay before first child (in seconds)
 */
export const createStaggerContainer = (staggerDelay = 0.08, initialDelay = 0.1) => ({
  animate: {
    transition: {
      staggerChildren: staggerDelay,
      delayChildren: initialDelay,
    }
  }
});

/**
 * Create custom slide animation
 * @param {string} direction - 'left', 'right', 'up', 'down'
 * @param {number} distance - Distance in pixels
 * @param {number} duration - Duration in seconds
 */
export const createSlide = (direction = 'left', distance = 60, dur = duration.base) => {
  const axis = direction === 'up' || direction === 'down' ? 'y' : 'x';
  const value = direction === 'right' || direction === 'down' ? distance : -distance;

  return {
    initial: { opacity: 0, [axis]: value },
    animate: { opacity: 1, [axis]: 0 },
    exit: { opacity: 0, [axis]: value },
    transition: { duration: dur, ease: snapEasing }
  };
};

/**
 * Respect user's reduced motion preference
 * Wraps animation variants to return static state if reduced motion is preferred
 */
export const withReducedMotion = (variants) => {
  if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    return {
      initial: variants.animate || {},
      animate: variants.animate || {},
      exit: variants.animate || {},
    };
  }
  return variants;
};

// ========== SPRING PRESETS ==========

/**
 * Bouncy spring for playful interactions
 */
export const springBouncy = {
  type: "spring",
  stiffness: 400,
  damping: 10,
};

/**
 * Snappy spring for quick interactions
 */
export const springSnappy = {
  type: "spring",
  stiffness: 500,
  damping: 30,
};

/**
 * Gentle spring for subtle movements
 */
export const springGentle = {
  type: "spring",
  stiffness: 300,
  damping: 20,
};
