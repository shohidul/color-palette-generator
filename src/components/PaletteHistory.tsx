interface PaletteHistoryProps {
  history: string[][];
  onSelect: (palette: string[]) => void;
}

export function PaletteHistory({ history, onSelect }: PaletteHistoryProps) {
  if (history.length === 0) return null;

  return (
    <div className="border-t border-gray-200 pt-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Recent Palettes</h2>
      <div className="space-y-4">
        {history.map((palette, index) => (
          <div 
            key={index}
            className="flex gap-2 p-2 bg-white rounded-lg shadow-sm cursor-pointer hover:shadow-md transition-shadow"
            onClick={() => onSelect(palette)}
          >
            {palette.map((color, colorIndex) => (
              <div
                key={colorIndex}
                className="w-12 h-12 rounded-md"
                style={{ backgroundColor: color }}
                title={color}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}