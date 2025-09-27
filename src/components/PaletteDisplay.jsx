import { motion } from 'framer-motion';
import PaletteCard from './PaletteCard';
import { 
  generateComplementaryPalette, 
  generateAnalogousPalette, 
  generateMonochromePalette,
  generateTriadicPalette 
} from '../utils/colorUtils';

const PaletteDisplay = ({ baseColor }) => {
  // Farklı palet türlerini oluştur
  const palettes = [
    {
      title: 'Complementary',
      icon: '🎭',
      colors: generateComplementaryPalette(baseColor),
      description: 'Karşıt renkler - Güçlü kontrast'
    },
    {
      title: 'Analogous',
      icon: '🌈',
      colors: generateAnalogousPalette(baseColor),
      description: 'Yakın renkler - Uyumlu geçişler'
    },
    {
      title: 'Monochrome',
      icon: '🎨',
      colors: generateMonochromePalette(baseColor),
      description: 'Tek renk - Farklı tonlar'
    },
    {
      title: 'Triadic',
      icon: '🔺',
      colors: generateTriadicPalette(baseColor),
      description: 'Üçgen uyum - Canlı kombinasyon'
    }
  ];

  return (
    <motion.div 
      className="w-full max-w-full mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 py-12 sm:py-16 lg:py-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Başlık */}
      <motion.div 
        className="text-center mb-16 sm:mb-20 lg:mb-24"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <motion.h2 
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent mb-6 sm:mb-8 tracking-tight"
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Renk Paletleriniz
        </motion.h2>
        <motion.p 
          className="text-lg sm:text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed px-4"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Seçtiğiniz ana renge göre oluşturulan uyumlu renk kombinasyonları
        </motion.p>
      </motion.div>

      {/* Ana renk gösterimi */}
      <motion.div 
        className="flex justify-center mb-16 sm:mb-20 lg:mb-24"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <motion.div 
          className="bg-white/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl lg:rounded-4xl shadow-2xl p-6 sm:p-8 lg:p-12 flex items-center space-x-6 sm:space-x-8 lg:space-x-12 border border-white/30"
          whileHover={{ scale: 1.05, y: -5 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <motion.div 
            className="relative"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <motion.div
              className="absolute inset-0 rounded-full blur-lg opacity-30"
              style={{ backgroundColor: baseColor }}
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <div 
              className="relative w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 rounded-full shadow-xl border-4 sm:border-6 border-white"
              style={{ backgroundColor: baseColor }}
            />
          </motion.div>
          <div>
            <p className="text-sm sm:text-base lg:text-lg font-semibold text-gray-600 uppercase tracking-wider mb-2">Ana Renginiz</p>
            <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800 font-mono">{baseColor.toUpperCase()}</p>
          </div>
        </motion.div>
      </motion.div>

      {/* Palet kartları - Improved Grid */}
      <motion.div 
        className="grid grid-cols-1 xl:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 xl:gap-16"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        {palettes.map((palette, index) => (
          <motion.div
            key={palette.title}
            className="relative"
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ 
              duration: 0.6, 
              delay: 0.6 + (index * 0.15),
              type: "spring",
              stiffness: 100
            }}
          >
            <PaletteCard
              title={palette.title}
              icon={palette.icon}
              colors={palette.colors}
            />
            <motion.div
              className="mt-6 sm:mt-8 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 + (index * 0.15) }}
            >
              <motion.p 
                className="text-base sm:text-lg lg:text-xl text-gray-600 font-medium bg-white/60 backdrop-blur-sm px-6 sm:px-8 py-3 sm:py-4 rounded-2xl sm:rounded-3xl inline-block shadow-lg border border-white/30"
                whileHover={{ scale: 1.05, y: -2 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {palette.description}
              </motion.p>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>

      {/* Alt bilgi - Enhanced */}
      <motion.div 
        className="mt-20 sm:mt-24 lg:mt-32 p-8 sm:p-10 lg:p-12 xl:p-16 bg-gradient-to-br from-purple-50/80 via-pink-50/80 to-blue-50/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl lg:rounded-4xl shadow-2xl border border-white/30"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
      >
        <motion.h3 
          className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-center bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-8 sm:mb-10 lg:mb-12"
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6, delay: 1.3 }}
        >
          💡 Nasıl Kullanılır?
        </motion.h3>
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.4 }}
        >
          {[
            { icon: '🎯', text: 'Renk kutusuna tıklayarak kopyalayın' },
            { icon: '🔄', text: 'Format seçiciyle HEX, RGB, HSL arası geçiş yapın' },
            { icon: '✨', text: 'Hover ile renk kodlarını görüntüleyin' }
          ].map((item, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center text-center p-6 sm:p-8 bg-white/60 backdrop-blur-sm rounded-2xl sm:rounded-3xl shadow-lg border border-white/30"
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ 
                duration: 0.5, 
                delay: 1.5 + (index * 0.1),
                type: "spring",
                stiffness: 200
              }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <motion.span 
                className="text-3xl sm:text-4xl lg:text-5xl mb-4 sm:mb-6"
                whileHover={{ scale: 1.2, rotate: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {item.icon}
              </motion.span>
              <span className="text-gray-700 font-medium text-base sm:text-lg lg:text-xl leading-relaxed">
                {item.text}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default PaletteDisplay;