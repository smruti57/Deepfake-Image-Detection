import { motion } from 'motion/react';
import { CheckCircle, XCircle, RotateCcw, TrendingUp, AlertCircle } from 'lucide-react';

interface ResultPageProps {
  image: string;
  result: 'Real' | 'Fake';
  confidence: number;
  modelName?: string | null;
  modelInfo?: any | null;
  onReset: () => void;
}

export function ResultPage({ image, result, confidence, modelName, modelInfo, onReset }: ResultPageProps) {
  const isReal = result === 'Real';
  const EXPECTED_MODEL = 'MobileNetV2 + ResNet50 + InceptionV3';
  const EXPECTED_IMG_SIZE = [224, 224];
  const EXPECTED_FRAMEWORK = 'tensorflow';

  const modelMatches = modelName ? modelName === EXPECTED_MODEL : null;
  const imgFromInfo = modelInfo?.img_size ?? null;
  let imgMatches: boolean | null = null;
  if (imgFromInfo == null) imgMatches = null;
  else if (Array.isArray(imgFromInfo)) imgMatches = imgFromInfo[0] === EXPECTED_IMG_SIZE[0] && imgFromInfo[1] === EXPECTED_IMG_SIZE[1];
  else imgMatches = Number(imgFromInfo) === EXPECTED_IMG_SIZE[0];

  const frameworkMatches = modelInfo?.framework ? modelInfo.framework === EXPECTED_FRAMEWORK : null;
  
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-3">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Detection Results
            </span>
          </h1>
          <p className="text-gray-600 text-lg">AI-powered analysis complete</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Uploaded Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-3xl shadow-2xl shadow-gray-300/50 p-8 border border-gray-100"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-2 rounded-lg">
                <AlertCircle className="w-5 h-5 text-white" />
              </div>
              <h3 className="font-bold text-xl text-gray-800">Analyzed Image</h3>
            </div>
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-4 border-2 border-gray-200">
              <img
                src={image}
                alt="Uploaded"
                className="w-full h-auto rounded-xl shadow-lg object-contain max-h-96"
              />
            </div>
          </motion.div>

          {/* Result Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className={`rounded-3xl shadow-2xl p-8 border-2 flex flex-col ${
              isReal 
                ? 'bg-gradient-to-br from-green-50 to-emerald-50 border-green-200 shadow-green-200/50' 
                : 'bg-gradient-to-br from-red-50 to-pink-50 border-red-200 shadow-red-200/50'
            }`}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className={`p-2 rounded-lg ${isReal ? 'bg-green-500' : 'bg-red-500'}`}>
                <TrendingUp className="w-5 h-5 text-white" />
              </div>
              <h3 className="font-bold text-xl text-gray-800">Prediction Result</h3>
            </div>
            
            <div className="flex-1 flex flex-col items-center justify-center">
              {/* Result Badge */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.6, type: 'spring', stiffness: 200, damping: 15 }}
                className={`${
                  isReal
                    ? 'bg-gradient-to-br from-green-400 to-emerald-500'
                    : 'bg-gradient-to-br from-red-400 to-pink-500'
                } rounded-full p-8 mb-8 shadow-2xl relative`}
              >
                {isReal ? (
                  <CheckCircle className="w-20 h-20 text-white" strokeWidth={2.5} />
                ) : (
                  <XCircle className="w-20 h-20 text-white" strokeWidth={2.5} />
                )}
                <motion.div
                  animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className={`absolute inset-0 rounded-full ${
                    isReal ? 'bg-green-400' : 'bg-red-400'
                  } -z-10`}
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="text-center mb-8"
              >
                <p className="text-gray-600 mb-3 text-lg font-medium">Classification:</p>
                <motion.h2
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.9, type: 'spring' }}
                  className={`text-6xl font-black ${
                    isReal ? 'text-green-600' : 'text-red-600'
                  } drop-shadow-lg`}
                >
                  {result}
                </motion.h2>
              </motion.div>

              {/* Confidence Score */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="w-full bg-white rounded-2xl p-6 shadow-lg"
              >
                <div className="flex justify-between text-sm text-gray-600 mb-3">
                  <span className="font-semibold text-lg">Confidence Score</span>
                  <span className={`font-bold text-2xl ${isReal ? 'text-green-600' : 'text-red-600'}`}>
                    {confidence}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden shadow-inner">
                  <motion.div
                    initial={{ width: '0%' }}
                    animate={{ width: `${confidence}%` }}
                    transition={{ delay: 1.2, duration: 1, ease: 'easeOut' }}
                    className={`h-full rounded-full relative overflow-hidden ${
                      isReal
                        ? 'bg-gradient-to-r from-green-500 via-emerald-500 to-green-600'
                        : 'bg-gradient-to-r from-red-500 via-pink-500 to-red-600'
                    }`}
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
                      animate={{ x: ['-100%', '100%'] }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
                    />
                  </motion.div>
                </div>
              </motion.div>

              {/* Model metadata and correctness check */}
              <div className="w-full mt-4 text-center">
                        <p className="text-sm text-gray-600">Model used by backend</p>
                        <div className="flex items-center justify-center gap-3 mt-2">
                          <span className="font-semibold text-gray-800">{modelName ?? 'unknown'}</span>
                          {modelMatches === true ? (
                            <CheckCircle className="w-5 h-5 text-green-600" />
                          ) : modelMatches === false ? (
                            <XCircle className="w-5 h-5 text-red-600" />
                          ) : null}
                        </div>
                {modelInfo && (
                  <pre className="text-xs text-gray-500 mt-3 p-2 bg-gray-50 rounded-md overflow-auto">{JSON.stringify(modelInfo)}</pre>
                )}

                {/* Detailed correctness checks */}
                <div className="w-full mt-4 bg-white p-4 rounded-lg shadow-sm text-left">
                  <p className="text-sm font-semibold mb-2">Model metadata verification</p>
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        {modelMatches ? <CheckCircle className="w-5 h-5 text-green-600" /> : modelMatches === false ? <XCircle className="w-5 h-5 text-red-600" /> : <AlertCircle className="w-5 h-5 text-gray-400" />}
                        <span className="text-sm">Model name matches expected</span>
                      </div>
                      <div className="text-xs text-gray-500">{modelName ?? 'unknown'} — expected {EXPECTED_MODEL}</div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        {imgMatches ? <CheckCircle className="w-5 h-5 text-green-600" /> : imgMatches === false ? <XCircle className="w-5 h-5 text-red-600" /> : <AlertCircle className="w-5 h-5 text-gray-400" />}
                        <span className="text-sm">Input image size matches expected</span>
                      </div>
                      <div className="text-xs text-gray-500">{Array.isArray(imgFromInfo) ? `${imgFromInfo[0]}×${imgFromInfo[1]}` : String(imgFromInfo ?? 'unknown')} — expected {EXPECTED_IMG_SIZE[0]}×{EXPECTED_IMG_SIZE[1]}</div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        {frameworkMatches ? <CheckCircle className="w-5 h-5 text-green-600" /> : frameworkMatches === false ? <XCircle className="w-5 h-5 text-red-600" /> : <AlertCircle className="w-5 h-5 text-gray-400" />}
                        <span className="text-sm">Framework matches expected</span>
                      </div>
                      <div className="text-xs text-gray-500">{modelInfo?.framework ?? 'unknown'} — expected {EXPECTED_FRAMEWORK}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Check Another Image Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          className="mt-12 text-center"
        >
          <motion.button
            onClick={onReset}
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-12 py-5 rounded-2xl font-bold hover:shadow-2xl transition-all inline-flex items-center gap-3 shadow-xl shadow-purple-500/30 text-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <RotateCcw className="w-6 h-6" />
            Analyze Another Image
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  );
}