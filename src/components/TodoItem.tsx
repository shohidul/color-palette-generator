import { FaTrash } from 'react-icons/fa';

interface TodoItemProps {
  text: string;
  completed: boolean;
  onToggle: () => void;
  onDelete: () => void;
}

export function TodoItem({ text, completed, onToggle, onDelete }: TodoItemProps) {
  return (
    <div className="flex items-center justify-between bg-white p-4 rounded-lg shadow mb-2">
      <div className="flex items-center gap-3">
        <input
          type="checkbox"
          checked={completed}
          onChange={onToggle}
          className="w-5 h-5 accent-blue-500"
        />
        <span className={completed ? 'line-through text-gray-500' : ''}>
          {text}
        </span>
      </div>
      <button
        onClick={onDelete}
        className="text-red-500 hover:text-red-700 p-2"
        aria-label="Delete todo"
      >
        <FaTrash />
      </button>
    </div>
  );
}