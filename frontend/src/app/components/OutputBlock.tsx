import { motion } from 'motion/react';
import { CheckCircle, XCircle } from 'lucide-react';

interface OutputBlockProps {
  delay?: number;
}

export function OutputBlock({ delay = 0 }: OutputBlockProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="rounded-lg p-6 shadow-md border border-gray-200 min-w-[180px] max-w-[220px] bg-white"
    >
      <h3 className="font-semibold text-gray-800 mb-4 text-center">Output Result</h3>
      
      <div className="space-y-3">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="flex items-center justify-center gap-2 bg-green-100 border border-green-300 rounded-md p-3"
        >
          <CheckCircle className="w-5 h-5 text-green-600" />
          <span className="font-semibold text-green-700">Real</span>
        </motion.div>
        
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="flex items-center justify-center gap-2 bg-red-100 border border-red-300 rounded-md p-3"
        >
          <XCircle className="w-5 h-5 text-red-600" />
          <span className="font-semibold text-red-700">Fake</span>
        </motion.div>
      </div>
      
      <p className="text-xs text-gray-500 mt-3 text-center">Binary Classification</p>
    </motion.div>
  );
}
