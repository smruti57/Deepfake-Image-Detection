import { motion } from 'motion/react';
import { LucideIcon } from 'lucide-react';

interface ArchitectureBlockProps {
  title: string;
  description: string;
  color: string;
  icon?: LucideIcon;
  delay?: number;
}

export function ArchitectureBlock({ title, description, color, icon: Icon, delay = 0 }: ArchitectureBlockProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className={`${color} rounded-lg p-6 shadow-md border border-gray-200 min-w-[180px] max-w-[220px] flex flex-col items-center justify-center text-center`}
    >
      {Icon && (
        <div className="mb-3">
          <Icon className="w-8 h-8 text-gray-700" />
        </div>
      )}
      <h3 className="font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
    </motion.div>
  );
}
