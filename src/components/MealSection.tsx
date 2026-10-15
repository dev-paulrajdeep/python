import { Plus, Trash2 } from 'lucide-react';
import type { MealType, LogEntry, Macros } from '../types';
import { useNavigate } from 'react-router-dom';

interface Props {
  type: MealType;
  entries: (LogEntry & { name: string; macros: Macros })[];
  totalMacros: Macros;
  onDelete: (id: string) => void;
}

export function MealSection({ type, entries, totalMacros, onDelete }: Props) {
  const navigate = useNavigate();

  return (
    <div className="mb-6">
      <div className="flex items-center justify-between mb-3 px-1">
        <h2 className="text-lg font-bold text-gray-900">{type}</h2>
        <div className="text-sm font-semibold text-gray-600">
          {totalMacros.calories.toFixed(0)} kcal
        </div>
      </div>

      <div className="card p-0 overflow-hidden">
        {entries.length === 0 ? (
           <div className="p-4 flex flex-col items-center justify-center text-gray-400 py-6">
             <span className="text-sm">No foods logged yet</span>
           </div>
        ) : (
          <ul className="divide-y divide-gray-100">
            {entries.map(entry => (
              <li key={entry.id} className="p-4 flex items-center justify-between group">
                <div className="flex-1">
                  <div className="font-semibold text-gray-900">{entry.name}</div>
                  <div className="text-xs text-gray-500 mt-0.5">
                    {entry.quantity} {entry.unit} • {entry.macros.protein.toFixed(1)}g P • {entry.macros.carbs.toFixed(1)}g C • {entry.macros.fat.toFixed(1)}g F
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="font-bold text-gray-800">{entry.macros.calories.toFixed(0)}</div>
                  <button
                    onClick={() => onDelete(entry.id)}
                    className="p-2 text-gray-400 hover:text-red-500 transition-colors touch-target"
                    aria-label="Delete entry"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
        <div className="p-2 bg-gray-50/50 border-t border-gray-100">
          <button
            onClick={() => navigate(`/foods?meal=${encodeURIComponent(type)}`)}
            className="w-full py-2.5 flex items-center justify-center gap-2 text-forest-700 font-semibold text-sm hover:bg-forest-50 active:bg-forest-100 rounded-xl transition-colors"
          >
            <Plus size={18} /> Add Food
          </button>
        </div>
      </div>
    </div>
  );
}
