import { useState, useMemo } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Search, ArrowLeft, Plus } from 'lucide-react';
import { initialFoodDatabase } from '../data/foodDatabase';
import type { FoodItem, MealType } from '../types';
import { PortionEditor } from '../components/PortionEditor';
import { logRepository } from '../db/repositories';
import { format } from 'date-fns';
import { db } from '../db';
import { useLiveQuery } from 'dexie-react-hooks';

export function FoodSearch() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const mealType = (searchParams.get('meal') || 'Snacks') as MealType;

  const [query, setQuery] = useState('');
  const [selectedFood, setSelectedFood] = useState<FoodItem | null>(null);

  const customFoods = useLiveQuery(() => db.customFoods.toArray()) || [];
  const allFoods = useMemo(() => [...initialFoodDatabase, ...customFoods], [customFoods]);

  const results = useMemo(() => {
    if (!query.trim()) return allFoods.slice(0, 20); // show some default items
    const lowerQuery = query.toLowerCase();
    return allFoods.filter(f =>
      f.name.toLowerCase().includes(lowerQuery) ||
      f.aliases?.some(a => a.toLowerCase().includes(lowerQuery))
    ).slice(0, 50);
  }, [query, allFoods]);

  const handleSavePortion = async (quantity: number, unit: string) => {
    if (!selectedFood) return;
    const dateStr = format(new Date(), 'yyyy-MM-dd'); // Simplification: always log to today in search
    await logRepository.addLog({
      date: dateStr,
      mealType,
      foodId: selectedFood.id,
      isRecipe: false,
      quantity,
      unit
    });
    setSelectedFood(null);
    navigate('/');
  };

  return (
    <div className="flex flex-col h-screen bg-white">
      <header className="px-4 py-3 border-b border-gray-100 flex items-center gap-3">
        <button onClick={() => navigate(-1)} className="btn-icon"><ArrowLeft size={24} /></button>
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Search foods..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-gray-50 border-none rounded-full py-2.5 pl-10 pr-4 text-gray-900 focus:ring-2 focus:ring-forest-500"
            autoFocus
          />
        </div>
      </header>

      <div className="p-4 bg-gray-50 text-sm font-semibold text-gray-500 uppercase tracking-wider">
        Adding to {mealType}
      </div>

      <ul className="flex-1 overflow-y-auto divide-y divide-gray-100">
        {results.map(food => (
          <li
            key={food.id}
            onClick={() => setSelectedFood(food)}
            className="px-4 py-3 flex items-center justify-between hover:bg-gray-50 active:bg-gray-100 cursor-pointer transition-colors"
          >
            <div>
              <div className="font-medium text-gray-900">{food.name}</div>
              <div className="text-xs text-gray-500 mt-0.5">
                 {food.macrosPerBase.calories} kcal / {food.baseAmount}{food.baseUnit} • {food.category}
                 {food.isCooked ? ' • Cooked' : ' • Raw'}
              </div>
            </div>
            <button className="text-forest-600 p-2"><Plus size={20} /></button>
          </li>
        ))}
        {results.length === 0 && (
          <li className="p-8 text-center text-gray-500">
             No foods found matching "{query}"
          </li>
        )}
      </ul>

      {selectedFood && (
        <PortionEditor
          food={selectedFood}
          onSave={handleSavePortion}
          onCancel={() => setSelectedFood(null)}
        />
      )}
    </div>
  );
}
