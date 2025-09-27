import { motion } from 'framer-motion';

const Header = () => {
  return (
    <motion.header 
      className="relative text-center py-16 sm:py-20 lg:py-24 mb-16 sm:mb-20 overflow-hidden -mx-6 sm:-mx-8 lg:-mx-12 xl:-mx-16"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2 }}
    >
      {/* Enhanced gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-800 to-pink-700" />
      <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/30 via-transparent to-orange-400/20" />
      
      {/* Animated mesh gradient overlay */}
      <motion.div
        className="absolute inset-0 opacity-40"
        style={{
          background: `
            radial-gradient(circle at 20% 50%, rgba(120, 119, 198, 0.3) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.3) 0%, transparent 50%),
            radial-gradient(circle at 40% 80%, rgba(120, 219, 255, 0.3) 0%, transparent 50%)
          `
        }}
        animate={{
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, -100, -20],
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Animated background shapes */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-10 left-10 w-40 h-40 bg-gradient-to-br from-cyan-400/20 to-blue-600/20 rounded-full blur-2xl"
          animate={{ 
            x: [0, 120, 0],
            y: [0, 60, 0],
            scale: [1, 1.3, 1],
            rotate: [0, 180, 360]
          }}
          transition={{ 
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-32 right-16 w-32 h-32 bg-gradient-to-br from-pink-400/25 to-purple-600/25 rounded-full blur-xl"
          animate={{ 
            x: [0, -100, 0],
            y: [0, 100, 0],
            scale: [1, 0.7, 1],
            rotate: [360, 0, 360]
          }}
          transition={{ 
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-16 left-1/4 w-28 h-28 bg-gradient-to-br from-yellow-400/20 to-orange-500/20 rounded-full blur-xl"
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.4, 1],
            x: [0, 50, 0]
          }}
          transition={{ 
            duration: 18,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      <motion.div
        className="relative z-10 px-6 sm:px-8 lg:px-12 xl:px-16 max-w-7xl mx-auto "
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        {/* Icon with enhanced animation */}
        <motion.div
          className="inline-flex items-center justify-center mb-8"
          whileHover={{ scale: 1.2, rotate: 10 }}
          transition={{ type: "spring", stiffness: 400, damping: 15 }}
        >
          <motion.span 
            className="text-7xl filter drop-shadow-2xl"
            animate={{ 
              rotate: [0, 5, -5, 0],
              scale: [1, 1.05, 1]
            }}
            transition={{ 
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            🎨
          </motion.span>
        </motion.div>
        
        {/* Enhanced title with better typography */}
        <motion.h1 
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black mb-6 sm:mb-8 leading-tight tracking-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <span className="bg-gradient-to-r from-white via-cyan-200 to-pink-200 bg-clip-text text-transparent drop-shadow-lg">
            Color Palette
          </span>
          <br />
          <span className="bg-gradient-to-r from-pink-200 via-purple-200 to-blue-200 bg-clip-text text-transparent">
            Generator
          </span>
        </motion.h1>
        
        {/* Enhanced subtitle */}
        <motion.p 
          className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white/90 mb-8 sm:mb-10 lg:mb-12 max-w-5xl mx-auto leading-relaxed font-light px-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 1 }}
        >
          Ana renginizi seçin, otomatik olarak uyumlu renk paletleri oluşturalım!
        </motion.p>
        
        {/* Enhanced feature tags */}
        <motion.div 
          className="flex flex-wrap justify-center gap-3 sm:gap-4 lg:gap-6 text-sm sm:text-base md:text-lg px-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 1 }}
        >
          {[
            { name: 'Complementary', icon: '🔄', color: 'from-cyan-400 to-blue-500' },
            { name: 'Analogous', icon: '🌈', color: 'from-purple-400 to-pink-500' },
            { name: 'Monochrome', icon: '⚫', color: 'from-gray-400 to-gray-600' },
            { name: 'Triadic', icon: '🔺', color: 'from-yellow-400 to-orange-500' }
          ].map((item, index) => (
            <motion.div
              key={item.name}
              className={`bg-gradient-to-r ${item.color} text-white px-3 sm:px-4 lg:px-6 py-2 sm:py-3 rounded-xl sm:rounded-2xl font-semibold shadow-xl backdrop-blur-sm border border-white/20 hover:shadow-2xl transition-all duration-300`}
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ 
                delay: 1.1 + (index * 0.1), 
                duration: 0.6,
                type: "spring",
                stiffness: 200
              }}
              whileHover={{ 
                scale: 1.05, 
                y: -5,
                boxShadow: "0 20px 40px rgba(0,0,0,0.3)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="mr-2 text-xl">{item.icon}</span>
              {item.name}
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.header>
  );
};

export default Header;