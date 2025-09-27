import { useState } from 'react';
import { motion } from 'framer-motion';
import Header from './components/Header';
import ColorPicker from './components/ColorPicker';
import PaletteDisplay from './components/PaletteDisplay';

function App() {
  const [selectedColor, setSelectedColor] = useState('#3498db');

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50/30 to-pink-50/30 relative overflow-hidden">
      {/* Enhanced background decorative elements */}
      
      {/* Main floating orbs */}
      <motion.div
        className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-purple-200/20 to-pink-200/20 rounded-full blur-3xl"
        animate={{ 
          x: [0, 100, 0],
          y: [0, 50, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{ 
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-br from-blue-200/20 to-indigo-200/20 rounded-full blur-3xl"
        animate={{ 
          x: [0, -80, 0],
          y: [0, -60, 0],
          scale: [1, 1.2, 1]
        }}
        transition={{ 
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      {/* Additional floating elements */}
      <motion.div
        className="absolute top-1/4 right-1/4 w-64 h-64 bg-gradient-to-br from-cyan-200/15 to-teal-200/15 rounded-full blur-2xl"
        animate={{ 
          x: [0, -50, 0],
          y: [0, 30, 0],
          scale: [1, 1.15, 1]
        }}
        transition={{ 
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      {/* Geometric patterns */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating geometric shapes */}
        <motion.div
          className="absolute top-20 left-1/3 w-32 h-32 border-2 border-purple-200/30 rounded-3xl"
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        <motion.div
          className="absolute bottom-32 left-1/4 w-24 h-24 border-2 border-pink-200/30 rounded-full"
          animate={{ 
            rotate: [0, -360],
            x: [0, 20, 0],
            y: [0, -20, 0]
          }}
          transition={{ 
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div
          className="absolute top-1/2 right-20 w-20 h-20 border-2 border-blue-200/30 transform rotate-45"
          animate={{ 
            rotate: [45, 405],
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-5">
          <div className="w-full h-full" style={{
            backgroundImage: `
              linear-gradient(rgba(139, 69, 19, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(139, 69, 19, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }} />
        </div>
        
        {/* Dot pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full" style={{
            backgroundImage: `radial-gradient(circle, rgba(139, 69, 19, 0.2) 1px, transparent 1px)`,
            backgroundSize: '30px 30px'
          }} />
        </div>
      </div>
      
      {/* Animated gradient mesh */}
      <motion.div
        className="absolute inset-0 opacity-30"
        style={{
          background: `
            radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 40% 40%, rgba(120, 219, 255, 0.1) 0%, transparent 50%)
          `
        }}
        animate={{
          background: [
            `radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.1) 0%, transparent 50%),
             radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.1) 0%, transparent 50%),
             radial-gradient(circle at 40% 40%, rgba(120, 219, 255, 0.1) 0%, transparent 50%)`,
            `radial-gradient(circle at 80% 20%, rgba(120, 119, 198, 0.1) 0%, transparent 50%),
             radial-gradient(circle at 20% 80%, rgba(255, 119, 198, 0.1) 0%, transparent 50%),
             radial-gradient(circle at 60% 60%, rgba(120, 219, 255, 0.1) 0%, transparent 50%)`,
            `radial-gradient(circle at 40% 60%, rgba(120, 119, 198, 0.1) 0%, transparent 50%),
             radial-gradient(circle at 60% 40%, rgba(255, 119, 198, 0.1) 0%, transparent 50%),
             radial-gradient(circle at 20% 20%, rgba(120, 219, 255, 0.1) 0%, transparent 50%)`
          ]
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      {/* Ana container */}
      <motion.div 
        className="relative z-10 w-full max-w-full mx-auto px-6 sm:px-8 lg:px-12 xl:px-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Header */}
        <Header />
        
        {/* Renk seçici */}
        <motion.div 
          className="flex justify-center mb-12 sm:mb-16 lg:mb-20"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <ColorPicker 
            color={selectedColor}
            onColorChange={setSelectedColor}
          />
        </motion.div>

        {/* Palet gösterimi */}
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <PaletteDisplay baseColor={selectedColor} />
        </motion.div>

        {/* Footer */}
        <motion.footer 
          className="text-center py-12 sm:py-16 lg:py-20 mt-16 sm:mt-20 lg:mt-24"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <motion.div 
            className="bg-white/70 backdrop-blur-xl rounded-2xl sm:rounded-3xl shadow-2xl p-6 sm:p-8 lg:p-10 max-w-5xl mx-auto border border-white/30"
            whileHover={{ scale: 1.02, y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 1.4 }}
            >
              <motion.p 
                className="text-2xl text-gray-700 mb-4 font-semibold"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 1.5 }}
              >
                <motion.span
                  className="inline-block mr-3"
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  🎨
                </motion.span>
                <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Color Palette Generator
                </span>
                <span className="text-gray-700"> ile renk uyumlarını keşfedin!</span>
              </motion.p>
              <motion.p 
                className="text-lg text-gray-600 leading-relaxed"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 1.6 }}
              >
                React + TailwindCSS + Framer Motion + Chroma.js ile geliştirildi
              </motion.p>
            </motion.div>
            
            {/* Tech stack icons */}
            <motion.div 
              className="flex justify-center items-center gap-6 mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.7 }}
            >
              {[
                { name: 'React', emoji: '⚛️' },
                { name: 'Tailwind', emoji: '🎨' },
                { name: 'Framer', emoji: '🎭' },
                { name: 'Chroma', emoji: '🌈' }
              ].map((tech, index) => (
                <motion.div
                  key={tech.name}
                  className="flex flex-col items-center p-3 bg-white/60 backdrop-blur-sm rounded-xl shadow-lg border border-white/30"
                  initial={{ opacity: 0, scale: 0.8, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ 
                    duration: 0.4, 
                    delay: 1.8 + (index * 0.1),
                    type: "spring",
                    stiffness: 200
                  }}
                  whileHover={{ scale: 1.1, y: -3 }}
                >
                  <motion.span 
                    className="text-2xl mb-1"
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {tech.emoji}
                  </motion.span>
                  <span className="text-xs font-medium text-gray-600">
                    {tech.name}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.footer>
      </motion.div>
    </div>
  );
}

export default App;
