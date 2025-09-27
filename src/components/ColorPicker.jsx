import { motion } from 'framer-motion';
import { generateRandomColor } from '../utils/colorUtils';

const ColorPicker = ({ color, onColorChange }) => {
  const popularColors = [
    '#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEAA7',
    '#DDA0DD', '#98D8C8', '#F7DC6F', '#BB8FCE', '#85C1E9',
    '#FF8A80', '#82B1FF', '#B39DDB', '#A5D6A7', '#FFCC02',
    '#FF5722', '#9C27B0', '#2196F3', '#4CAF50', '#FFC107'
  ];

  const handleRandomColor = () => {
    const randomColor = generateRandomColor();
    onColorChange(randomColor);
  };

  return (
    <motion.div 
      className="relative w-full mx-auto px-4 sm:px-6 lg:px-8 xl:px-12"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      {/* Main Card with Glass Morphism */}
      <motion.div 
        className="relative bg-white/10 backdrop-blur-2xl rounded-2xl sm:rounded-3xl shadow-2xl p-4 sm:p-6 lg:p-8 border border-white/20 overflow-hidden"
        whileHover={{ scale: 1.02, y: -5 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        {/* Background gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-purple-500/10 to-pink-500/10 rounded-3xl" />
        
        {/* Floating background elements */}
        <div className="absolute inset-0 overflow-hidden rounded-3xl">
          <motion.div
            className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-full blur-2xl"
            animate={{ 
              rotate: [0, 360],
              scale: [1, 1.2, 1]
            }}
            transition={{ 
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          <motion.div
            className="absolute -bottom-10 -left-10 w-32 h-32 bg-gradient-to-br from-pink-400/20 to-purple-500/20 rounded-full blur-xl"
            animate={{ 
              x: [0, 20, 0],
              y: [0, -20, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{ 
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>

        <div className="relative z-10">
          {/* Enhanced Title */}
          <motion.h2 
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black bg-gradient-to-r from-gray-800 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-6 sm:mb-8 lg:mb-10 text-center tracking-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Ana Renginizi Seçin
          </motion.h2>
          
          {/* Main Color Selection Area */}
          <div className="flex flex-col lg:flex-row items-center justify-center gap-6 sm:gap-8 lg:gap-12 mb-8 sm:mb-12 lg:mb-16">
            {/* Enhanced Color Input Section */}
            <motion.div 
              className="flex flex-col items-center"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <motion.label 
                className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-gray-700 mb-3 sm:mb-4 lg:mb-6 uppercase tracking-widest"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                Renk Seçici
              </motion.label>
              
              <div className="relative group">
                {/* Animated glow effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 rounded-full blur-xl opacity-30 group-hover:opacity-60 transition-all duration-500"
                  animate={{ 
                    scale: [1, 1.1, 1],
                    rotate: [0, 180, 360]
                  }}
                  transition={{ 
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                
                {/* Color input with enhanced styling */}
                <motion.input
                  type="color"
                  value={color}
                  onChange={(e) => onColorChange(e.target.value)}
                  className="relative w-28 h-28 sm:w-32 sm:h-32 lg:w-36 lg:h-36 rounded-full border-3 sm:border-4 border-white cursor-pointer shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                />
                
                {/* Color code display */}
                <motion.div 
                  className="absolute -bottom-16 sm:-bottom-18 left-1/2 transform -translate-x-1/2 bg-gray-900/90 backdrop-blur-sm text-white px-4 sm:px-6 py-2 sm:py-3 rounded-xl text-xs sm:text-sm font-mono shadow-xl border border-white/20"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  whileHover={{ scale: 1.05 }}
                >
                  {color.toUpperCase()}
                </motion.div>
              </div>
            </motion.div>

            {/* Enhanced Random Color Button */}
            <motion.button
              onClick={handleRandomColor}
              className="relative bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white px-6 sm:px-8 lg:px-12 py-3 sm:py-4 lg:py-6 rounded-xl sm:rounded-2xl font-bold text-base sm:text-lg lg:text-xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden group"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              {/* Animated background */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                initial={false}
              />
              
              {/* Shimmer effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"
                initial={false}
              />
              
              <span className="relative z-10 flex items-center gap-2 sm:gap-3">
                <motion.span
                  className="text-xl sm:text-2xl lg:text-3xl"
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                >
                  🎲
                </motion.span>
                Rastgele Renk
              </span>
            </motion.button>
          </div>

          {/* Enhanced Popular Colors Section */}
          <motion.div 
            className="mt-16 sm:mt-20 lg:mt-24"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <motion.h3 
              className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-800 mb-8 sm:mb-10 lg:mb-12 text-center"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              🎨 Popüler Renkler
            </motion.h3>
            
            <div className="grid grid-cols-5 sm:grid-cols-8 md:grid-cols-10 lg:grid-cols-12 xl:grid-cols-20 gap-3 sm:gap-4 lg:gap-6 max-w-7xl mx-auto">
              {popularColors.map((popularColor, index) => (
                <motion.button
                  key={index}
                  onClick={() => onColorChange(popularColor)}
                  className="relative w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-18 lg:h-18 xl:w-20 xl:h-20 rounded-xl sm:rounded-2xl lg:rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 border-2 sm:border-3 lg:border-4 border-white group overflow-hidden"
                  style={{ backgroundColor: popularColor }}
                  whileHover={{ scale: 1.2, y: -8, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, scale: 0.3, y: 30 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ 
                    delay: 1 + (index * 0.03), 
                    duration: 0.5,
                    type: "spring",
                    stiffness: 400,
                    damping: 25
                  }}
                >
                  {/* Hover overlay */}
                  <motion.div
                    className="absolute inset-0 bg-white opacity-0 group-hover:opacity-30 transition-opacity duration-300"
                    initial={false}
                  />
                  
                  {/* Border glow effect */}
                  <motion.div
                    className="absolute inset-0 border-2 border-white rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={false}
                  />
                  
                  {/* Ripple effect */}
                  <motion.div
                    className="absolute inset-0 bg-white rounded-2xl opacity-0"
                    whileTap={{ 
                      opacity: [0, 0.3, 0],
                      scale: [1, 1.5, 1]
                    }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.button>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ColorPicker;