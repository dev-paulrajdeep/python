import { useLiveQuery } from 'dexie-react-hooks';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine } from 'recharts';
import { profileRepository } from '../db/repositories';
import { initialFoodDatabase } from '../data/foodDatabase';
import { calculateNutrientForPortion, aggregateMacros, convertToGrams, calculateRecipeNutrition } from '../utils/nutrition';
import { format, subDays } from 'date-fns';
import { db } from '../db';
import type { Macros } from '../types';

export function Insights() {
  const profile = useLiveQuery(() => profileRepository.getProfile());
  const recipes = useLiveQuery(() => db.recipes.toArray()) || [];

  // Last 7 days
  const dates = Array.from({length: 7}, (_, i) => {
    const d = subDays(new Date(), 6 - i);
    return format(d, 'yyyy-MM-dd');
  });

  // Fetch logs for all 7 days (simplified approach for demo)
  const allLogs = useLiveQuery(() => db.logEntries.where('date').anyOf(dates).toArray(), [dates.join()]) || [];

  const chartData = dates.map(dateStr => {
    const dayLogs = allLogs.filter(l => l.date === dateStr);

    let dayMacros: Macros[] = dayLogs.map(log => {
      if (log.isRecipe) {
        const recipe = recipes.find(r => r.id === log.foodId);
        if (recipe) {
          const totalMacros = calculateRecipeNutrition(recipe, initialFoodDatabase);
          const servings = recipe.numberOfServings > 0 ? recipe.numberOfServings : 1;
          const multiplier = log.quantity / servings;
          return {
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
          const weight = convertToGrams(log.quantity, log.unit, food.servingOptions);
          return calculateNutrientForPortion(food.macrosPerBase, food.baseAmount, weight);
        }
      }
      return { calories: 0, protein: 0, carbs: 0, fat: 0, fiber: 0 };
    });

    const total = aggregateMacros(dayMacros);
    return {
      name: format(new Date(dateStr), 'EEE'),
      calories: Math.round(total.calories),
      protein: Math.round(total.protein)
    };
  });

  const calTarget = profile?.dailyTargets.calories || 2000;
  const proTarget = profile?.dailyTargets.protein || 60;

  return (
    <div className="p-4 max-w-2xl mx-auto pb-24">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Insights (Last 7 Days)</h1>

      <div className="card mb-6">
        <h2 className="text-lg font-bold text-gray-800 mb-6">Calories</h2>
        <div className="h-64 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={chartData} margin={{ top: 5, right: 5, left: -20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f3f4f6" />
              <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#9ca3af', fontSize: 12}} />
              <YAxis axisLine={false} tickLine={false} tick={{fill: '#9ca3af', fontSize: 12}} />
              <Tooltip cursor={{fill: '#f9fafb'}} contentStyle={{borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'}} />
              <ReferenceLine y={calTarget} stroke="#16a34a" strokeDasharray="3 3" />
              <Bar dataKey="calories" fill="#fb9c3c" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="card">
        <h2 className="text-lg font-bold text-gray-800 mb-6">Protein (g)</h2>
        <div className="h-64 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={chartData} margin={{ top: 5, right: 5, left: -20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f3f4f6" />
              <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#9ca3af', fontSize: 12}} />
              <YAxis axisLine={false} tickLine={false} tick={{fill: '#9ca3af', fontSize: 12}} />
              <Tooltip cursor={{fill: '#f9fafb'}} contentStyle={{borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'}} />
              <ReferenceLine y={proTarget} stroke="#16a34a" strokeDasharray="3 3" />
              <Bar dataKey="protein" fill="#3b82f6" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
