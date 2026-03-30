import { motion } from 'motion/react';

interface ArrowProps {
  delay?: number;
}

export function Arrow({ delay = 0 }: ArrowProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, delay }}
      className="flex items-center justify-center mx-2"
    >
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <path
          d="M10 20 L28 20 M28 20 L22 14 M28 20 L22 26"
          stroke="#4B5563"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </motion.div>
  );
}
