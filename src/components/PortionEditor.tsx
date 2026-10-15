import { useState, useMemo } from 'react';
import type { FoodItem, ServingUnit } from '../types';
import { calculateNutrientForPortion, convertToGrams } from '../utils/nutrition';

interface Props {
  food: FoodItem;
  onSave: (quantity: number, unit: ServingUnit) => void;
  onCancel: () => void;
}

export function PortionEditor({ food, onSave, onCancel }: Props) {
  const [quantity, setQuantity] = useState<string>('1');
  const [unit, setUnit] = useState<ServingUnit>(food.servingOptions[0]?.unit || food.baseUnit);

  const numQuantity = parseFloat(quantity) || 0;

  const currentMacros = useMemo(() => {
    const weight = convertToGrams(numQuantity, unit, food.servingOptions);
    return calculateNutrientForPortion(food.macrosPerBase, food.baseAmount, weight);
  }, [food, numQuantity, unit]);

  const units = [food.baseUnit, ...food.servingOptions.map(o => o.unit)];

  return (
    <div className="fixed inset-0 bg-black/50 flex items-end sm:items-center justify-center z-50 p-0 sm:p-4">
      <div className="bg-white w-full sm:w-[400px] rounded-t-3xl sm:rounded-2xl p-6 shadow-xl animate-in slide-in-from-bottom-10 sm:slide-in-from-bottom-0 fade-in duration-200">
        <h3 className="text-xl font-bold text-gray-900 mb-1">{food.name}</h3>
        <p className="text-sm text-gray-500 mb-6">{food.category}</p>

        <div className="flex gap-4 mb-8">
          <div className="flex-1">
            <label className="block text-xs font-semibold text-gray-600 uppercase mb-2">Quantity</label>
            <input
              type="number"
              min="0"
              step="0.1"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-lg font-semibold focus:outline-none focus:ring-2 focus:ring-forest-500 focus:border-transparent transition-shadow"
              autoFocus
            />
          </div>
          <div className="flex-1">
            <label className="block text-xs font-semibold text-gray-600 uppercase mb-2">Unit</label>
            <select
              value={unit}
              onChange={(e) => setUnit(e.target.value as ServingUnit)}
              className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-lg font-semibold focus:outline-none focus:ring-2 focus:ring-forest-500 transition-shadow appearance-none"
            >
              {units.map(u => (
                <option key={u} value={u}>{u}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="bg-forest-50 rounded-xl p-4 mb-8">
          <div className="flex justify-between items-end mb-4">
            <span className="text-sm font-semibold text-forest-800">Total Nutrition</span>
            <span className="text-2xl font-bold text-forest-900">{currentMacros.calories.toFixed(0)} <span className="text-sm font-medium text-forest-700">kcal</span></span>
          </div>
          <div className="flex justify-between text-sm font-medium text-forest-800">
             <span>P: {currentMacros.protein.toFixed(1)}g</span>
             <span>C: {currentMacros.carbs.toFixed(1)}g</span>
             <span>F: {currentMacros.fat.toFixed(1)}g</span>
          </div>
        </div>

        <div className="flex gap-3">
          <button
            onClick={onCancel}
            className="flex-1 btn-secondary"
          >
            Cancel
          </button>
          <button
            onClick={() => onSave(numQuantity, unit)}
            disabled={numQuantity <= 0}
            className="flex-1 btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Add Food
          </button>
        </div>
      </div>
    </div>
  );
}
