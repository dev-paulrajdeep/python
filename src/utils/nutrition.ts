import type { FoodItem, Macros, Recipe, ServingOption } from '../types';

export function calculateNutrientForPortion(
  baseMacros: Macros,
  baseAmount: number,
  portionWeightOrVolume: number
): Macros {
  const multiplier = portionWeightOrVolume / baseAmount;
  return {
    calories: baseMacros.calories * multiplier,
    protein: baseMacros.protein * multiplier,
    carbs: baseMacros.carbs * multiplier,
    fat: baseMacros.fat * multiplier,
    fiber: baseMacros.fiber * multiplier,
  };
}

export function aggregateMacros(macrosList: Macros[]): Macros {
  return macrosList.reduce(
    (acc, curr) => ({
      calories: acc.calories + curr.calories,
      protein: acc.protein + curr.protein,
      carbs: acc.carbs + curr.carbs,
      fat: acc.fat + curr.fat,
      fiber: acc.fiber + curr.fiber,
    }),
    { calories: 0, protein: 0, carbs: 0, fat: 0, fiber: 0 }
  );
}

export function calculateRecipeNutrition(recipe: Recipe, foods: FoodItem[]): Macros {
  const ingredientMacros = recipe.ingredients.map(ing => {
    const food = foods.find(f => f.id === ing.foodId);
    if (!food) return { calories: 0, protein: 0, carbs: 0, fat: 0, fiber: 0 };

    let weight = ing.quantity;
    if (ing.unit !== 'g' && ing.unit !== 'ml') {
        const option = food.servingOptions.find(o => o.unit === ing.unit);
        if (option) {
            weight = ing.quantity * option.weightInGrams;
        } else {
             // Fallback if unit not found (should be handled by UI, but safe here)
             weight = ing.quantity;
        }
    }
    return calculateNutrientForPortion(food.macrosPerBase, food.baseAmount, weight);
  });

  return aggregateMacros(ingredientMacros);
}

export function calculateRecipeNutritionPer100g(recipe: Recipe, foods: FoodItem[]): Macros | null {
  if (!recipe.totalFinishedWeightInGrams || recipe.totalFinishedWeightInGrams <= 0) {
    return null; // Cannot calculate per 100g without total finished weight
  }
  const totalMacros = calculateRecipeNutrition(recipe, foods);
  return calculateNutrientForPortion(totalMacros, recipe.totalFinishedWeightInGrams, 100);
}

export function calculateRecipeNutritionPerServing(recipe: Recipe, foods: FoodItem[]): Macros {
   const totalMacros = calculateRecipeNutrition(recipe, foods);
   const servings = recipe.numberOfServings > 0 ? recipe.numberOfServings : 1;
   return {
       calories: totalMacros.calories / servings,
       protein: totalMacros.protein / servings,
       carbs: totalMacros.carbs / servings,
       fat: totalMacros.fat / servings,
       fiber: totalMacros.fiber / servings
   };
}

export function convertToGrams(quantity: number, unit: string, servingOptions: ServingOption[]): number {
  if (unit === 'g' || unit === 'ml') return quantity;
  const option = servingOptions.find(o => o.unit === unit);
  if (option) return quantity * option.weightInGrams;
  return quantity; // Fallback
}
