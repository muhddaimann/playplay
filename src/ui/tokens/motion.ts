export const duration = {
  instant: 80,
  fast: 150,
  normal: 200,
  slow: 300,
  slower: 450,
  linger: 600,
};

export const easing = {
  standard: [0.2, 0.0, 0.0, 1.0],
  emphasized: [0.2, 0.0, 0.0, 1.0],
  decelerate: [0.0, 0.0, 0.2, 1.0],
  accelerate: [0.3, 0.0, 1.0, 1.0],
  bounce: [0.34, 1.56, 0.64, 1.0],
};

export const spring = {
  subtle: { stiffness: 120, damping: 18, mass: 0.9 },
  snappy: { stiffness: 220, damping: 20, mass: 1.0 },
  bouncy: { stiffness: 180, damping: 14, mass: 0.9 },
};

export type DurationToken = keyof typeof duration;
export type EasingToken = keyof typeof easing;
export type SpringToken = keyof typeof spring;
