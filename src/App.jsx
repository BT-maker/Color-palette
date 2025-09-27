import { useState } from 'react';
import { motion } from 'framer-motion';
import Header from './components/Header';
import ColorPicker from './components/ColorPicker';
import PaletteDisplay from './components/PaletteDisplay';

function App() {
  const [selectedColor, setSelectedColor] = useState('#accee6');

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Header gradient background for full page */}
      <div className="fixed inset-0 bg-gradient-to-br from-indigo-900 via-purple-800 to-pink-700" />
      <div className="fixed inset-0 bg-gradient-to-tr from-blue-600/20 via-transparent to-orange-400/15" />
      
      {/* Animated mesh gradient overlay */}
      <motion.div
        className="fixed inset-0 opacity-40"
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
      
      {/* Content wrapper */}
      <div className="relative z-10">
      {/* Enhanced background decorative elements */}
      
      {/* Main floating orbs */}
      <motion.div
        className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-purple-200/10 to-pink-200/10 rounded-full blur-3xl"
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
        className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-br from-blue-200/12 to-indigo-200/12 rounded-full blur-3xl"
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
        className="absolute top-1/4 right-1/4 w-64 h-64 bg-gradient-to-br from-cyan-200/8 to-teal-200/8 rounded-full blur-2xl"
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
                className="text-2xl text-white/90 mb-4 font-semibold"
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
                <span className="text-white/90"> ile renk uyumlarını keşfedin!</span>
              </motion.p>
                
            </motion.div>
            
            
          </motion.div>
        </motion.footer>
      </motion.div>
      </div>
    </div>
  );
}

export default App;
