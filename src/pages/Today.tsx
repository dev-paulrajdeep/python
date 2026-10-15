import { useState, useMemo } from 'react';
import { useLiveQuery } from 'dexie-react-hooks';
import { format, subDays, addDays } from 'date-fns';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { logRepository, profileRepository } from '../db/repositories';
import { initialFoodDatabase } from '../data/foodDatabase';
import { CalorieSummary } from '../components/CalorieSummary';
import { MacroDashboard } from '../components/MacroDashboard';
import { MealSection } from '../components/MealSection';
import type { MealType, Macros } from '../types';
import { calculateNutrientForPortion, aggregateMacros, convertToGrams, calculateRecipeNutrition } from '../utils/nutrition';
import { db } from '../db';

const mealTypes: MealType[] = ['Breakfast', 'Lunch', 'Evening snacks', 'Dinner', 'Custom'];

export function Today() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const dateStr = format(currentDate, 'yyyy-MM-dd');
  const displayDate = format(currentDate, 'MMM d, yyyy');

  const profile = useLiveQuery(() => profileRepository.getProfile());
  const logs = useLiveQuery(() => logRepository.getLogsByDate(dateStr), [dateStr]) || [];
  const recipes = useLiveQuery(() => db.recipes.toArray()) || [];

  const handleDelete = async (id: string) => {
    await logRepository.deleteLog(id);
  };

  const enhancedLogs = useMemo(() => {
    return logs.map(log => {
      let name = 'Unknown';
      let macros: Macros = { calories: 0, protein: 0, carbs: 0, fat: 0, fiber: 0 };

      if (log.isRecipe) {
        const recipe = recipes.find(r => r.id === log.foodId);
        if (recipe) {
          name = recipe.name;
          const totalMacros = calculateRecipeNutrition(recipe, initialFoodDatabase);
          // Simple portion calc for recipes (assuming unit is 'serving')
          const servings = recipe.numberOfServings > 0 ? recipe.numberOfServings : 1;
          const multiplier = log.quantity / servings;
          macros = {
             calories: totalMacros.calories * multiplier,
             protein: totalMacros.protein * multiplier,
             carbs: totalMacros.carbs * multiplier,
             fat: totalMacros.fat * multiplier,
             fiber: totalMacros.fiber * multiplier
          };
        }
      } else {
        const food = initialFoodDatabase.find(f => f.id === log.foodId);
        if (food) {
          name = food.name;
          const weight = convertToGrams(log.quantity, log.unit, food.servingOptions);
          macros = calculateNutrientForPortion(food.macrosPerBase, food.baseAmount, weight);
        }
      }
      return { ...log, name, macros };
    });
  }, [logs, recipes]);

  const totalMacros = useMemo(() => aggregateMacros(enhancedLogs.map(l => l.macros)), [enhancedLogs]);
  const targets = profile?.dailyTargets || { calories: 2000, protein: 60, carbs: 250, fat: 60, fiber: 30 };

  return (
    <div className="p-4 max-w-2xl mx-auto">
      <header className="flex items-center justify-between mb-6">
        <button onClick={() => setCurrentDate(d => subDays(d, 1))} className="btn-icon"><ChevronLeft size={24} /></button>
        <h1 className="text-lg font-bold text-gray-900">
           {format(currentDate, 'yyyy-MM-dd') === format(new Date(), 'yyyy-MM-dd') ? 'Today' : displayDate}
        </h1>
        <button onClick={() => setCurrentDate(d => addDays(d, 1))} className="btn-icon"><ChevronRight size={24} /></button>
      </header>

      <CalorieSummary target={targets.calories} consumed={totalMacros.calories} />
      <MacroDashboard consumed={totalMacros} targets={targets} />

      <div className="space-y-6 mt-8">
        {mealTypes.map(type => {
          const mealLogs = enhancedLogs.filter(l => l.mealType === type);
          const mealTotal = aggregateMacros(mealLogs.map(l => l.macros));
          return (
            <MealSection
              key={type} type={type} entries={mealLogs}
              totalMacros={mealTotal} onDelete={handleDelete}
            />
          );
        })}
      </div>
    </div>
  );
}
