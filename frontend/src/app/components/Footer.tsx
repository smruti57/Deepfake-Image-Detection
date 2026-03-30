import { GraduationCap, Calendar, Code } from 'lucide-react';

export function Footer() {
  const technologies = [
    {
      name: 'Python',
      icon: (
        <svg viewBox="0 0 48 48" className="w-full h-full">
          <defs>
            <linearGradient id="python-grad1" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#387EB8" />
              <stop offset="100%" stopColor="#366994" />
            </linearGradient>
            <linearGradient id="python-grad2" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#FFE873" />
              <stop offset="100%" stopColor="#FFD43B" />
            </linearGradient>
          </defs>
          <path fill="url(#python-grad1)" d="M24.047,5c-1.555,0.005-2.633,0.142-3.936,0.367c-3.848,0.67-4.549,2.077-4.549,4.67V14h9v2H9.537c-2.644,0-4.956,1.587-5.684,4.604c-0.826,3.461-0.863,5.614,0,9.217C4.473,32.407,5.868,34,8.512,34h3.485v-4.633c0-3.034,2.645-5.723,5.684-5.723h9.023c2.515,0,4.548-2.129,4.548-4.68V10.037c0-2.447-2.063-4.283-4.548-4.67C26.173,5.188,25.621,4.995,24.047,5z M18.734,8c0.942,0,1.707,0.765,1.707,1.707c0,0.943-0.765,1.707-1.707,1.707c-0.942,0-1.707-0.764-1.707-1.707C17.027,8.765,17.792,8,18.734,8z"/>
          <path fill="url(#python-grad2)" d="M23.953,43c1.555-0.005,2.633-0.142,3.936-0.367c3.848-0.67,4.549-2.077,4.549-4.67V34h-9v-2h15.024c2.644,0,4.956-1.587,5.684-4.604c0.826-3.461,0.863-5.614,0-9.217C43.527,15.593,42.132,14,39.488,14h-3.485v4.633c0,3.034-2.645,5.723-5.684,5.723h-9.023c-2.515,0-4.548,2.129-4.548,4.68v8.637c0,2.447,2.063,4.283,4.548,4.67C21.827,42.812,22.379,43.005,23.953,43z M29.266,40c-0.942,0-1.707-0.765-1.707-1.707c0-0.943,0.765-1.707,1.707-1.707c0.942,0,1.707,0.764,1.707,1.707C30.973,39.235,30.208,40,29.266,40z"/>
        </svg>
      ),
    },
    {
      name: 'TensorFlow',
      icon: (
        <svg viewBox="0 0 48 48" className="w-full h-full">
          <path fill="#FF6F00" d="M24,10.9L13.2,17v12.1L24,35.1l10.8-6.1V17L24,10.9z M23,32.5l-8.3-4.7V19l8.3,4.7V32.5z M24.5,22.5L16,17.8 l8.5-4.9l8.5,4.9L24.5,22.5z M33.3,27.8l-8.3,4.7v-8.8l8.3-4.7V27.8z"/>
        </svg>
      ),
    },
    {
      name: 'Keras',
      icon: (
        <svg viewBox="0 0 48 48" className="w-full h-full">
          <path fill="#D00000" d="M24,8C15.163,8,8,15.163,8,24s7.163,16,16,16s16-7.163,16-16S32.837,8,24,8z M31.5,32.5L24,24l7.5-8.5h-4 L24,19.8l-3.5-4.3h-4L24,24l-7.5,8.5h4L24,28.2l3.5,4.3H31.5z"/>
        </svg>
      ),
    },
    {
      name: 'NumPy',
      icon: (
        <svg viewBox="0 0 48 48" className="w-full h-full">
          <path fill="#4DABCF" d="M18.5,9L9,24l9.5,15h11L39,24L29.5,9H18.5z M24,16l6,8l-6,8l-6-8L24,16z"/>
        </svg>
      ),
    },
    {
      name: 'FastAPI',
      icon: (
        <svg viewBox="0 0 48 48" className="w-full h-full">
          <defs>
            <linearGradient id="fast-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0099FF" />
              <stop offset="100%" stopColor="#0052CC" />
            </linearGradient>
          </defs>
          <rect x="8" y="8" width="32" height="32" rx="6" fill="url(#fast-grad)" />
          <path fill="#fff" d="M16 20h16v4H16zM16 28h10v4H16z" opacity="0.95" />
        </svg>
      ),
    },
    {
      name: 'React JS',
      icon: (
        <svg viewBox="0 0 48 48" className="w-full h-full">
          <g fill="none" stroke="#00D8FF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <ellipse cx="24" cy="24" rx="15" ry="5.5" transform="rotate(30 24 24)" />
            <ellipse cx="24" cy="24" rx="15" ry="5.5" transform="rotate(-30 24 24)" />
            <ellipse cx="24" cy="24" rx="15" ry="5.5" />
          </g>
          <circle cx="24" cy="24" r="4" fill="#00D8FF" />
        </svg>
      ),
    },
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-50 to-blue-50 border-t border-gray-200 mt-auto">
      <div className="max-w-7xl mx-auto px-6 py-10">
        {/* Technologies Section */}
        <div className="mb-8">
          <h3 className="text-center text-sm font-semibold text-gray-600 mb-6">Built With</h3>
          <div className="flex flex-wrap items-center justify-center gap-6">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="group bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-all border border-gray-200 hover:border-blue-300 flex flex-col items-center"
                role="img"
                aria-label={tech.name}
                title={tech.name}
              >
                <div className={`${tech.name === 'React JS' ? 'w-14 h-14 p-2 bg-gradient-to-br from-cyan-50 to-cyan-100 rounded-md' : 'w-12 h-12'} group-hover:scale-110 transition-transform flex items-center justify-center`}>
                  <span aria-hidden="true" className={`${tech.name === 'React JS' ? 'block w-full h-full' : ''}`}>{tech.icon}</span>
                </div>
                <div className="text-xs text-gray-700 mt-2 font-medium">{tech.name}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3 text-gray-700 bg-white px-4 py-3 rounded-xl shadow-md">
            <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-2 rounded-lg">
              <GraduationCap className="w-5 h-5 text-white" />
            </div>
            <span className="font-semibold">College Project</span>
          </div>
          
          <div className="text-center text-gray-700">
            <p className="font-bold text-lg mb-1 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              DeepFake Image Detection Using MobileNetV2 + ResNet50 + InceptionV3
            </p>
            <p className="text-sm text-gray-600 font-medium">Information Technology</p>
          </div>
          
          <div className="flex items-center gap-3 text-gray-700 bg-white px-4 py-3 rounded-xl shadow-md">
            <div className="bg-gradient-to-br from-purple-500 to-pink-600 p-2 rounded-lg">
              <Calendar className="w-5 h-5 text-white" />
            </div>
            <span className="font-semibold">2025-2026</span>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-gray-200 text-center">
          <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
            <Code className="w-4 h-4" />
            <span>Powered by Deep Learning & Computer Vision</span>
          </div>
        </div>
      </div>
    </footer>
  );
}