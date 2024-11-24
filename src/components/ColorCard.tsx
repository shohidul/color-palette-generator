import { FaCopy } from 'react-icons/fa';

interface ColorCardProps {
  color: string;
}

export function ColorCard({ color }: ColorCardProps) {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(color);
  };

  return (
    <div className="flex flex-col items-center bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow">
      <div 
        className="w-full h-32 rounded-lg mb-3"
        style={{ backgroundColor: color }}
      />
      <div className="flex items-center gap-2">
        <span className="font-mono text-sm">{color}</span>
        <button
          onClick={copyToClipboard}
          className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          title="Copy color code"
        >
          <FaCopy className="text-gray-600" />
        </button>
      </div>
    </div>
  );
}