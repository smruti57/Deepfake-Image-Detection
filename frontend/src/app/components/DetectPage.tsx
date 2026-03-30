import { motion } from 'motion/react';
import { Upload, Image as ImageIcon, X, Scan } from 'lucide-react';
import { useState, useRef } from 'react';

interface DetectPageProps {
  onAnalyze: (file: File) => void;
}

export function DetectPage({ onAnalyze }: DetectPageProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith('image/')) {
      handleFileSelect(file);
    }
  };

  const handleFileSelect = (file: File) => {
    setImageFile(file);
    const reader = new FileReader();
    reader.onloadend = () => {
      setSelectedImage(reader.result as string);
    };
    reader.readAsDataURL(file);
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      handleFileSelect(file);
    }
  };

  const handleAnalyze = () => {
    if (imageFile) {
      onAnalyze(imageFile);
    }
  };

  const handleClear = () => {
    setSelectedImage(null);
    setImageFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Upload Face Image
            </span>
          </h1>
          <p className="text-gray-600 text-lg">
            Upload a face image to detect if it is <span className="font-semibold text-green-600">Real</span> or <span className="font-semibold text-red-600">Fake</span>
          </p>
        </div>

        {/* Upload Area */}
        <div className="bg-white rounded-3xl shadow-2xl shadow-gray-300/50 p-10 border border-gray-100">
          {!selectedImage ? (
            <div
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
              className={`border-3 border-dashed rounded-2xl p-16 text-center transition-all ${
                isDragging
                  ? 'border-blue-500 bg-gradient-to-br from-blue-50 to-purple-50 scale-[1.02]'
                  : 'border-gray-300 hover:border-blue-400 hover:bg-gray-50'
              }`}
            >
              <div className="flex flex-col items-center gap-6">
                <motion.div
                  animate={{ 
                    y: isDragging ? -10 : [0, -5, 0],
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="bg-gradient-to-br from-blue-500 to-purple-600 p-8 rounded-3xl shadow-xl"
                >
                  <ImageIcon className="w-16 h-16 text-white" />
                </motion.div>
                <div>
                  <p className="text-2xl font-bold text-gray-800 mb-2">
                    Drag and drop your image here
                  </p>
                  <p className="text-gray-500 mb-6 text-lg">or</p>
                  <motion.button
                    onClick={() => fileInputRef.current?.click()}
                    className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-4 rounded-xl font-semibold hover:shadow-xl transition-all inline-flex items-center gap-3 shadow-lg"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Upload className="w-6 h-6" />
                    Browse Files
                  </motion.button>
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    onChange={handleFileInput}
                    className="hidden"
                  />
                </div>
                <p className="text-sm text-gray-400 mt-2">
                  Supported formats: JPG, PNG, JPEG • Max size: 10MB
                </p>
              </div>
            </div>
          ) : (
            <div>
              {/* Image Preview */}
              <div className="relative">
                <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 mb-8 border-2 border-gray-200">
                  <img
                    src={selectedImage}
                    alt="Selected"
                    className="max-h-[500px] mx-auto rounded-xl shadow-2xl object-contain"
                  />
                </div>
                <motion.button
                  onClick={handleClear}
                  className="absolute top-4 right-4 bg-white hover:bg-red-50 p-3 rounded-full shadow-lg transition-all border border-gray-200 hover:border-red-300"
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <X className="w-6 h-6 text-gray-600 hover:text-red-600" />
                </motion.button>
              </div>

              {/* Analyze Button */}
              <motion.button
                onClick={handleAnalyze}
                className="w-full bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-size-200 text-white py-6 rounded-2xl text-xl font-bold shadow-2xl shadow-purple-500/30 hover:shadow-purple-500/50 transition-all flex items-center justify-center gap-3 group"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Scan className="w-7 h-7 group-hover:scale-110 transition-transform" />
                Analyze Image with AI
              </motion.button>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
}