import { motion } from 'motion/react';
import { Loader2, Brain, Layers, Scan, Sparkles } from 'lucide-react';

export function LoadingPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-24">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-3xl shadow-2xl shadow-gray-300/50 p-16 text-center border border-gray-100"
      >
        <div className="flex justify-center mb-8">
          <div className="relative">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
              className="bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 p-6 rounded-full shadow-2xl"
            >
              <Brain className="w-16 h-16 text-white" />
            </motion.div>
            <motion.div
              animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full blur-xl -z-10"
            />
          </div>
        </div>

        <h2 className="text-3xl font-bold mb-3">
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Analyzing Image...
          </span>
        </h2>
        <p className="text-gray-600 mb-10 text-lg">
          Our AI model is examining your image
        </p>

        {/* Progress Bar */}
        <div className="w-full bg-gray-200 rounded-full h-4 mb-10 overflow-hidden shadow-inner">
          <motion.div
            className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 h-full rounded-full relative overflow-hidden"
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ duration: 2.5, ease: 'easeInOut' }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
              animate={{ x: ['-100%', '100%'] }}
              transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
            />
          </motion.div>
        </div>

        {/* Processing Steps */}
        <div className="space-y-4 text-left bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-6">
          {[
            { icon: Scan, text: 'Preprocessing image...', delay: 0, color: 'text-blue-600' },
            { icon: Layers, text: 'Extracting features (MobileNetV2 + ResNet50 + InceptionV3)...', delay: 0.5, color: 'text-purple-600' },
            { icon: Sparkles, text: 'Running AI classification...', delay: 1, color: 'text-pink-600' },
          ].map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: step.delay, duration: 0.4 }}
              className="flex items-center gap-4 text-gray-700 bg-white rounded-xl p-4 shadow-sm"
            >
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ delay: step.delay + 0.5, duration: 0.5, repeat: Infinity, repeatDelay: 2 }}
              >
                <step.icon className={`w-6 h-6 ${step.color}`} />
              </motion.div>
              <span className="font-medium text-lg">{step.text}</span>
              <motion.div
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="ml-auto"
              >
                <Loader2 className="w-5 h-5 text-gray-400 animate-spin" />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}