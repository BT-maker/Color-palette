import chroma from 'chroma-js';

// Complementary renk paleti oluştur (karşıt renkler)
export const generateComplementaryPalette = (baseColor) => {
  const base = chroma(baseColor);
  const complement = base.set('hsl.h', '+180');
  
  return [
    base.brighten(1).hex(),
    base.hex(),
    complement.hex(),
    complement.darken(1).hex(),
    complement.darken(2).hex()
  ];
};

// Analogous renk paleti oluştur (yakın renkler)
export const generateAnalogousPalette = (baseColor) => {
  const base = chroma(baseColor);
  const hue = base.get('hsl.h');
  
  return [
    chroma.hsl(hue - 60, base.get('hsl.s'), base.get('hsl.l')).hex(),
    chroma.hsl(hue - 30, base.get('hsl.s'), base.get('hsl.l')).hex(),
    base.hex(),
    chroma.hsl(hue + 30, base.get('hsl.s'), base.get('hsl.l')).hex(),
    chroma.hsl(hue + 60, base.get('hsl.s'), base.get('hsl.l')).hex()
  ];
};

// Monochrome renk paleti oluştur (aynı rengin farklı tonları)
export const generateMonochromePalette = (baseColor) => {
  const base = chroma(baseColor);
  
  return [
    base.brighten(2).hex(),
    base.brighten(1).hex(),
    base.hex(),
    base.darken(1).hex(),
    base.darken(2).hex()
  ];
};

// Triadic renk paleti oluştur (üçgen renk uyumu)
export const generateTriadicPalette = (baseColor) => {
  const base = chroma(baseColor);
  const hue = base.get('hsl.h');
  
  return [
    base.hex(),
    chroma.hsl(hue + 120, base.get('hsl.s'), base.get('hsl.l')).hex(),
    chroma.hsl(hue + 240, base.get('hsl.s'), base.get('hsl.l')).hex(),
    base.brighten(1).hex(),
    base.darken(1).hex()
  ];
};

// Renk kodunu panoya kopyala
export const copyToClipboard = async (text) => {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch (err) {
    console.error('Kopyalama başarısız:', err);
    return false;
  }
};

// Rengin açık mı koyu mu olduğunu kontrol et (metin rengi için)
export const isLightColor = (color) => {
  return chroma(color).luminance() > 0.5;
};

// Renk formatını dönüştür (hex, rgb, hsl)
export const convertColorFormat = (color, format = 'hex') => {
  const chromaColor = chroma(color);
  
  switch (format) {
    case 'rgb':
      return chromaColor.css();
    case 'hsl':
      return chromaColor.css('hsl');
    case 'hex':
    default:
      return chromaColor.hex();
  }
};

// Rastgele renk oluştur
export const generateRandomColor = () => {
  return chroma.random().hex();
};