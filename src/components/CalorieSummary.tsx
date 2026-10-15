import clsx from 'clsx';

interface Props {
  target: number;
  consumed: number;
}

export function CalorieSummary({ target, consumed }: Props) {
  const remaining = target - consumed;
  const percentage = Math.min(100, Math.max(0, (consumed / target) * 100));
  const isOver = remaining < 0;

  return (
    <div className="card mb-6">
      <div className="flex items-center justify-between">
        <div className="flex-1 text-center">
          <div className="text-2xl font-bold text-gray-900">{consumed.toFixed(0)}</div>
          <div className="text-xs text-gray-500 uppercase tracking-wider font-semibold mt-1">Eaten</div>
        </div>

        <div className="flex-1 flex justify-center">
          <div className="relative w-24 h-24 flex items-center justify-center">
             <svg className="w-full h-full -rotate-90 transform" viewBox="0 0 100 100">
               <circle cx="50" cy="50" r="40" className="stroke-gray-100" strokeWidth="8" fill="none" />
               <circle
                  cx="50" cy="50" r="40"
                  className={clsx("transition-all duration-1000 ease-out", isOver ? "stroke-red-500" : "stroke-forest-500")}
                  strokeWidth="8" fill="none"
                  strokeLinecap="round"
                  strokeDasharray={`${percentage * 2.513} 251.3`}
               />
             </svg>
             <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className={clsx("text-xl font-bold", isOver ? "text-red-500" : "text-forest-600")}>
                  {Math.abs(remaining).toFixed(0)}
                </span>
                <span className="text-[10px] text-gray-500 uppercase font-semibold">
                  {isOver ? 'Over' : 'Left'}
                </span>
             </div>
          </div>
        </div>

        <div className="flex-1 text-center">
          <div className="text-2xl font-bold text-gray-900">{target.toFixed(0)}</div>
          <div className="text-xs text-gray-500 uppercase tracking-wider font-semibold mt-1">Goal</div>
        </div>
      </div>
    </div>
  );
}
