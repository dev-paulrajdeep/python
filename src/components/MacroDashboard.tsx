import clsx from 'clsx';
import type { Macros, DailyTargets } from '../types';

interface Props {
  consumed: Macros;
  targets: DailyTargets;
}

export function MacroDashboard({ consumed, targets }: Props) {
  const macros = [
    { label: 'Protein', consumed: consumed.protein, target: targets.protein, color: 'bg-blue-500' },
    { label: 'Carbs', consumed: consumed.carbs, target: targets.carbs, color: 'bg-saffron-500' },
    { label: 'Fat', consumed: consumed.fat, target: targets.fat, color: 'bg-purple-500' },
    { label: 'Fiber', consumed: consumed.fiber, target: targets.fiber, color: 'bg-forest-500' },
  ];

  return (
    <div className="card mb-6 p-5">
      <h3 className="text-sm font-semibold text-gray-800 mb-4">Macronutrients</h3>
      <div className="grid grid-cols-4 gap-4">
        {macros.map((m) => {
          const progress = Math.min(100, Math.max(0, (m.consumed / m.target) * 100)) || 0;
          return (
            <div key={m.label} className="flex flex-col items-center">
              <div className="w-full bg-gray-100 rounded-full h-1.5 mb-2 overflow-hidden">
                <div
                  className={clsx("h-full rounded-full transition-all duration-500", m.color)}
                  style={{ width: `${progress}%` }}
                />
              </div>
              <span className="text-sm font-bold text-gray-900">{m.consumed.toFixed(0)}g</span>
              <span className="text-[10px] text-gray-500 font-medium">/ {m.target}g</span>
              <span className="text-[10px] uppercase text-gray-400 mt-1">{m.label}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
