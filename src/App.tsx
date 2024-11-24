import { useState } from 'react';
import { ColorCard } from './components/ColorCard';
import { PaletteHistory } from './components/PaletteHistory';
import { FaRedo } from 'react-icons/fa';

function generateRandomColor(): string {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

export default function App() {
  const [colors, setColors] = useState<string[]>([
    '#FF5733',
    '#33FF57',
    '#3357FF',
    '#F033FF'
  ]);
  const [history, setHistory] = useState<string[][]>([]);

  const generateNewPalette = () => {
    const newColors = Array(4).fill(null).map(() => generateRandomColor());
    setHistory(prev => [...prev, colors].slice(-5));
    setColors(newColors);
  };

  const restorePalette = (oldPalette: string[]) => {
    setColors(oldPalette);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            Color Palette Generator
          </h1>
          <p className="text-gray-600 mb-4">
            Generate beautiful color combinations for your next project!
          </p>
          <button
            onClick={generateNewPalette}
            className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors flex items-center gap-2 mx-auto"
          >
            <FaRedo />
            Generate New Palette
          </button>
        </header>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {colors.map((color, index) => (
            <ColorCard key={index} color={color} />
          ))}
        </div>

        <PaletteHistory history={history} onSelect={restorePalette} />
      </div>
    </div>
  );
}