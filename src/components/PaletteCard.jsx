import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { copyToClipboard, isLightColor, convertColorFormat } from '../utils/colorUtils';

const PaletteCard = ({ title, colors, icon }) => {
  const [hoveredColor, setHoveredColor] = useState(null);
  const [copiedColor, setCopiedColor] = useState(null);
  const [colorFormat, setColorFormat] = useState('hex');

  const handleColorClick = async (color) => {
    const formattedColor = convertColorFormat(color, colorFormat);
    const success = await copyToClipboard(formattedColor);
    
    if (success) {
      setCopiedColor(color);
      setTimeout(() => setCopiedColor(null), 2000);
    }
  };

  const formatOptions = ['hex', 'rgb', 'hsl'];

  return (
    <motion.div
      className="relative bg-white/10 backdrop-blur-2xl rounded-2xl sm:rounded-3xl shadow-2xl p-4 sm:p-6 md:p-8 hover:shadow-3xl transition-all duration-500 border border-white/20 overflow-hidden group"
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.8, type: "spring", stiffness: 120, damping: 20 }}
      whileHover={{ y: -12, scale: 1.03, rotateY: 5 }}
      style={{ transformStyle: "preserve-3d" }}
    >
      {/* Enhanced background gradient overlay */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-pink-500/15 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
        initial={false}
      />
      
      {/* Floating background elements */}
      <div className="absolute inset-0 overflow-hidden rounded-3xl">
        <motion.div
          className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-br from-cyan-400/10 to-blue-500/10 rounded-full blur-xl"
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute -bottom-6 -left-6 w-24 h-24 bg-gradient-to-br from-pink-400/10 to-purple-500/10 rounded-full blur-lg"
          animate={{ 
            x: [0, 15, 0],
            y: [0, -15, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Shimmer effect on card */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
        initial={false}
      />
      
      {/* Başlık ve format seçici */}
      <div className="relative z-10 flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 sm:mb-6 gap-3 sm:gap-0">
        <motion.h3 
          className="text-lg sm:text-xl md:text-2xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent flex items-center gap-2 sm:gap-3"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <motion.span 
            className="text-3xl"
            whileHover={{ scale: 1.2, rotate: 10 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {icon}
          </motion.span>
          {title}
        </motion.h3>
        
        <motion.select
          value={colorFormat}
          onChange={(e) => setColorFormat(e.target.value)}
          className="text-xs sm:text-sm bg-white/80 backdrop-blur-sm border-2 border-gray-200/50 rounded-lg sm:rounded-xl px-2 sm:px-4 py-1 sm:py-2 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 shadow-lg hover:shadow-xl transition-all duration-300"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          whileHover={{ scale: 1.05 }}
        >
          {formatOptions.map(format => (
            <option key={format} value={format}>
              {format.toUpperCase()}
            </option>
          ))}
        </motion.select>
      </div>

      {/* Renk kutuları */}
      <motion.div 
        className="relative z-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 sm:gap-3 md:gap-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        {colors.map((color, index) => (
          <motion.div
            key={index}
            className="relative group/color"
            onHoverStart={() => setHoveredColor(color)}
            onHoverEnd={() => setHoveredColor(null)}
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ 
              delay: 0.5 + (index * 0.1), 
              duration: 0.4,
              type: "spring",
              stiffness: 200
            }}
          >
            <motion.div
              className="w-full h-16 sm:h-20 md:h-24 rounded-xl sm:rounded-2xl cursor-pointer shadow-xl transition-all duration-500 group-hover/color:shadow-2xl border-2 sm:border-3 border-white/60 overflow-hidden relative"
              onClick={() => handleColorClick(color)}
              whileHover={{ 
                scale: 1.15, 
                y: -8, 
                rotateX: 10,
                rotateY: 5,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
              }}
              whileTap={{ scale: 0.9 }}
              style={{ 
                backgroundColor: color,
                transformStyle: "preserve-3d"
              }}
            >
              {/* Enhanced shimmer effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover/color:translate-x-full transition-transform duration-800"
                initial={false}
              />
              
              {/* Multi-layer glow effects */}
              <motion.div
                className="absolute inset-0 bg-white/15 opacity-0 group-hover/color:opacity-100 transition-opacity duration-400"
                initial={false}
              />
              
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover/color:opacity-100 transition-opacity duration-300"
                initial={false}
              />
              
              {/* Ripple effect on click */}
              <motion.div
                className="absolute inset-0 bg-white rounded-2xl opacity-0"
                whileTap={{ 
                  opacity: [0, 0.3, 0],
                  scale: [1, 1.2, 1.5]
                }}
                transition={{ duration: 0.4 }}
              />
              
              {/* Color intensity indicator */}
              <motion.div
                className="absolute bottom-2 right-2 w-3 h-3 bg-white/80 rounded-full opacity-0 group-hover/color:opacity-100 transition-opacity duration-300"
                initial={false}
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.div>
            
            {/* Hover'da renk kodu göster */}
            <AnimatePresence>
              {hoveredColor === color && (
                <motion.div
                  className="absolute -top-16 left-1/2 transform -translate-x-1/2 bg-gray-900/90 backdrop-blur-sm text-white text-sm px-4 py-2 rounded-xl shadow-2xl z-30 border border-white/20"
                  initial={{ opacity: 0, y: 10, scale: 0.8 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.8 }}
                  transition={{ duration: 0.2, type: "spring" }}
                >
                  <span className="font-mono font-semibold">
                    {convertColorFormat(color, colorFormat)}
                  </span>
                  <motion.div 
                    className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900/90"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.1 }}
                  />
                </motion.div>
              )}
            </AnimatePresence>

            {/* Kopyalama başarı mesajı */}
            <AnimatePresence>
              {copiedColor === color && (
                <motion.div
                  className="absolute -top-20 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-green-500 to-emerald-500 text-white text-sm px-4 py-2 rounded-xl shadow-2xl z-40 border border-white/30"
                  initial={{ opacity: 0, scale: 0.5, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.5, y: -20 }}
                  transition={{ duration: 0.4, type: "spring", stiffness: 300 }}
                >
                  <span className="flex items-center gap-2 font-semibold">
                    <motion.span
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.1, type: "spring", stiffness: 400 }}
                    >
                      ✓
                    </motion.span>
                    Kopyalandı!
                  </span>
                  <motion.div 
                    className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-green-500"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2 }}
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </motion.div>

      {/* Enhanced bottom info */}
      <motion.div 
        className="relative z-10 mt-10 text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.6 }}
      >
        <motion.div 
          className="relative inline-block"
          whileHover={{ scale: 1.05 }}
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            initial={false}
          />
          <motion.p 
            className="relative text-sm text-gray-700 font-semibold bg-white/30 backdrop-blur-lg px-6 py-3 rounded-full shadow-xl border border-white/40"
            whileHover={{ y: -2 }}
          >
            <motion.span
              className="inline-block mr-2 text-lg"
              animate={{ 
                y: [0, -3, 0],
                rotate: [0, 10, -10, 0]
              }}
              transition={{ 
                duration: 2.5, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              👆
            </motion.span>
            <span className="bg-gradient-to-r from-gray-700 to-gray-900 bg-clip-text text-transparent">
              Renk kutusuna tıklayarak kopyalayın
            </span>
          </motion.p>
        </motion.div>
        
        {/* Color count indicator */}
        <motion.div
          className="mt-4 text-xs text-gray-500 font-medium"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
        >
          <motion.span
            className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent font-bold"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            {colors.length} renk
          </motion.span>
          {" • "}
          <span className="text-gray-400">
            {colorFormat.toUpperCase()} formatında
          </span>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default PaletteCard;