import { motion } from 'motion/react';
import { Upload, Shield, Zap, Target, Sparkles } from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  return (
    <div className="max-w-6xl mx-auto px-6 py-20">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-20"
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-full px-4 py-2 mb-6"
        >
          <Sparkles className="w-4 h-4 text-purple-600" />
          <span className="text-sm font-medium bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            AI-Powered Detection System
          </span>
        </motion.div>
        
        <h1 className="text-6xl font-bold mb-6 leading-tight">
          <span className="bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent">
            DeepFake Image Detection
          </span>
          <br />
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Using MobileNetV2 + ResNet50 + InceptionV3
          </span>
        </h1>
        
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10 leading-relaxed">
          An ensemble deep-learning system combining MobileNetV2, ResNet50 and InceptionV3 trained on curated
          facial datasets to detect manipulated images with high accuracy. Upload a face image to receive a
          Real/Fake prediction, a confidence score, and model provenance information.
        </p>
        
        <motion.button
          onClick={() => onNavigate('detect')}
          className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-size-200 text-white px-10 py-5 rounded-2xl text-lg font-semibold shadow-2xl shadow-blue-500/30 hover:shadow-blue-500/50 transition-all flex items-center gap-3 mx-auto group"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
        >
          <Upload className="w-6 h-6 group-hover:rotate-12 transition-transform" />
          Upload Image to Detect
        </motion.button>
      </motion.div>

      {/* Features */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-8"
      >
        {[
          {
            icon: Shield,
            title: 'High Accuracy',
            description: 'Trained on extensive datasets to provide reliable detection of deepfake images',
            gradient: 'from-blue-500 to-cyan-500',
            bgColor: 'bg-blue-50',
          },
          {
            icon: Zap,
            title: 'Fast Processing',
            description: 'Get instant results powered by an ensemble of MobileNetV2, ResNet50 and InceptionV3',
            gradient: 'from-purple-500 to-pink-500',
            bgColor: 'bg-purple-50',
          },
          {
            icon: Target,
            title: 'Confidence Score',
            description: 'Detailed prediction with percentage-based confidence levels',
            gradient: 'from-blue-500 to-purple-500',
            bgColor: 'bg-blue-50',
          },
        ].map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + index * 0.1 }}
            whileHover={{ y: -8, transition: { duration: 0.2 } }}
            className="bg-white rounded-2xl p-8 shadow-lg shadow-gray-200/50 border border-gray-100 hover:shadow-xl hover:shadow-gray-300/50 transition-all group"
          >
            <div className={`${feature.bgColor} w-16 h-16 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
              <div className={`bg-gradient-to-br ${feature.gradient} p-0.5 rounded-xl`}>
                <div className="bg-white p-2 rounded-xl">
                  <feature.icon className={`w-6 h-6 bg-gradient-to-br ${feature.gradient} bg-clip-text text-transparent`} style={{ WebkitTextFillColor: 'transparent', WebkitBackgroundClip: 'text' }} />
                </div>
              </div>
            </div>
            <h3 className="font-bold text-xl text-gray-800 mb-3">{feature.title}</h3>
            <p className="text-gray-600 leading-relaxed">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}