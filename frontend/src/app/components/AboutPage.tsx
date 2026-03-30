import { motion } from 'motion/react';
import { Brain, Database, Code, Layers } from 'lucide-react';

export function AboutPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          About This Project
        </h1>

        {/* Main Description */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8 border border-gray-200">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-blue-100 p-3 rounded-lg">
              <Brain className="w-8 h-8 text-blue-600" />
            </div>
            <div>
              <h2 className="font-semibold text-xl text-gray-800 mb-3">
                Ensemble DeepFake Detection
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                This project uses an ensemble of MobileNetV2, ResNet50 and InceptionV3 models to detect deepfake
                facial images. With the increasing sophistication of AI-generated fake images, automated
                detection systems have become crucial for maintaining digital media authenticity.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Our model analyzes facial features using multiple convolutional layers to extract patterns 
                that distinguish real images from AI-generated fakes. The system processes images through 
                preprocessing, feature extraction, and binary classification stages to provide accurate predictions 
                with confidence scores.
              </p>
            </div>
          </div>
        </div>

        {/* Technical Details Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-xl shadow-md p-6 border border-gray-200"
          >
            <div className="bg-purple-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <Database className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="font-semibold text-lg text-gray-800 mb-2">Dataset</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Trained on comprehensive deepfake datasets from Kaggle, containing thousands of real and 
              fake facial images for robust model performance.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-xl shadow-md p-6 border border-gray-200"
          >
            <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <Layers className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="font-semibold text-lg text-gray-800 mb-2">Model Architecture</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Ensemble of pre-trained architectures (MobileNetV2, ResNet50 and InceptionV3) fine-tuned
              for binary deepfake classification.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white rounded-xl shadow-md p-6 border border-gray-200"
          >
            <div className="bg-purple-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <Code className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="font-semibold text-lg text-gray-800 mb-2">Technologies</h3>
            <div className="space-y-1 text-sm text-gray-600">
              <p>• Python</p>
              <p>• TensorFlow / Keras</p>
              <p>• OpenCV</p>
              <p>• Streamlit / Flask</p>
            </div>
          </motion.div>
        </div>

        {/* Workflow Section */}
        <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-8 border border-blue-100">
          <h3 className="font-semibold text-xl text-gray-800 mb-4">How It Works</h3>
          <div className="space-y-3">
            {[
              'Image preprocessing: Resize to 128×128 pixels and normalize pixel values',
              'Feature extraction: Use MobileNetV2, ResNet50 and InceptionV3 to extract facial patterns and anomalies',
              'Flatten layer: Convert feature maps into a single vector',
              'Dense layers: Learn complex relationships in facial features',
              'Classification: Sigmoid activation outputs probability (Real vs Fake)',
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="flex items-start gap-3"
              >
                <div className="bg-blue-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-semibold flex-shrink-0 mt-0.5">
                  {index + 1}
                </div>
                <p className="text-gray-700">{step}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
