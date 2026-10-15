import { useState, useMemo } from 'react';
import { useLiveQuery } from 'dexie-react-hooks';
import { initialFoodDatabase } from '../data/foodDatabase';
import { db } from '../db';
import { recipeRepository } from '../db/repositories';
import type { Recipe, RecipeIngredient, ServingUnit } from '../types';
import { calculateRecipeNutrition } from '../utils/nutrition';
import { Search, Plus, Trash2, Save, X } from 'lucide-react';
import { v4 as uuidv4 } from 'uuid';


export function RecipeBuilder() {
  const [name, setName] = useState('');
  const [servings, setServings] = useState('1');
  const [ingredients, setIngredients] = useState<RecipeIngredient[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [query, setQuery] = useState('');

  const recipes = useLiveQuery(() => db.recipes.toArray()) || [];
  const customFoods = useLiveQuery(() => db.customFoods.toArray()) || [];
  const allFoods = useMemo(() => [...initialFoodDatabase, ...customFoods], [customFoods]);

  const searchResults = useMemo(() => {
    if (!query.trim()) return allFoods.slice(0, 10);
    const lowerQuery = query.toLowerCase();
    return allFoods.filter(f => f.name.toLowerCase().includes(lowerQuery)).slice(0, 20);
  }, [query, allFoods]);

  const totalMacros = useMemo(() => {
     const mockRecipe: Recipe = {
         id: 'temp', name, ingredients, numberOfServings: parseFloat(servings) || 1, createdAt: 0, updatedAt: 0
     };
     return calculateRecipeNutrition(mockRecipe, allFoods);
  }, [ingredients, name, servings, allFoods]);

  const handleAddIngredient = (foodId: string, unit: ServingUnit) => {
    setIngredients([...ingredients, { id: uuidv4(), foodId, quantity: 1, unit }]);
    setIsSearching(false);
    setQuery('');
  };

  const updateIngredient = (id: string, updates: Partial<RecipeIngredient>) => {
    setIngredients(ingredients.map(ing => ing.id === id ? { ...ing, ...updates } : ing));
  };

  const removeIngredient = (id: string) => {
    setIngredients(ingredients.filter(ing => ing.id !== id));
  };

  const handleSave = async () => {
    if (!name.trim() || ingredients.length === 0) return;
    await recipeRepository.addRecipe({
      name,
      ingredients,
      numberOfServings: parseFloat(servings) || 1
    });
    setName('');
    setServings('1');
    setIngredients([]);
  };

  return (
    <div className="p-4 max-w-2xl mx-auto pb-24">
      <header className="mb-6 flex justify-between items-center">
         <h1 className="text-2xl font-bold text-gray-900">Recipes</h1>
         {ingredients.length > 0 && (
             <button onClick={handleSave} className="btn-primary py-2 px-4 flex items-center gap-2 text-sm">
                 <Save size={16} /> Save Recipe
             </button>
         )}
      </header>

      {/* Builder Section */}
      <div className="card mb-8">
        <h2 className="text-lg font-bold text-gray-800 mb-4">Create New Recipe</h2>
        <div className="space-y-4 mb-6">
           <div>
             <label className="block text-xs font-semibold text-gray-600 uppercase mb-1">Recipe Name</label>
             <input type="text" value={name} onChange={e => setName(e.target.value)} placeholder="e.g. Mom's Chicken Curry" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5" />
           </div>
           <div>
             <label className="block text-xs font-semibold text-gray-600 uppercase mb-1">Number of Servings</label>
             <input type="number" min="1" value={servings} onChange={e => setServings(e.target.value)} className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5" />
           </div>
        </div>

        <div className="mb-4">
            <h3 className="text-sm font-semibold text-gray-700 mb-2">Ingredients</h3>
            {ingredients.length === 0 ? (
                <div className="text-center py-6 bg-gray-50 rounded-xl border border-dashed border-gray-200 text-gray-500 text-sm">
                    No ingredients added yet.
                </div>
            ) : (
                <ul className="space-y-3">
                    {ingredients.map(ing => {
                        const food = allFoods.find(f => f.id === ing.foodId);
                        if (!food) return null;
                        const units = [food.baseUnit, ...food.servingOptions.map(o => o.unit)];
                        return (
                            <li key={ing.id} className="flex items-center gap-3 bg-gray-50 p-3 rounded-xl border border-gray-100">
                                <div className="flex-1">
                                    <div className="font-semibold text-gray-900 text-sm mb-2">{food.name}</div>
                                    <div className="flex gap-2">
                                        <input type="number" min="0.1" step="0.1" value={ing.quantity} onChange={e => updateIngredient(ing.id, { quantity: parseFloat(e.target.value) || 0 })} className="w-20 bg-white border border-gray-200 rounded-lg px-2 py-1 text-sm" />
                                        <select value={ing.unit} onChange={e => updateIngredient(ing.id, { unit: e.target.value as ServingUnit })} className="flex-1 bg-white border border-gray-200 rounded-lg px-2 py-1 text-sm">
                                            {units.map(u => <option key={u} value={u}>{u}</option>)}
                                        </select>
                                    </div>
                                </div>
                                <button onClick={() => removeIngredient(ing.id)} className="p-2 text-gray-400 hover:text-red-500"><Trash2 size={18} /></button>
                            </li>
                        );
                    })}
                </ul>
            )}
        </div>

        {!isSearching ? (
            <button onClick={() => setIsSearching(true)} className="w-full py-3 flex items-center justify-center gap-2 text-forest-700 font-semibold bg-forest-50 hover:bg-forest-100 rounded-xl transition-colors">
                <Plus size={18} /> Add Ingredient
            </button>
        ) : (
            <div className="bg-white border border-gray-200 rounded-xl overflow-hidden mt-4 shadow-sm animate-in fade-in slide-in-from-top-2">
               <div className="p-2 flex items-center border-b border-gray-100">
                   <Search size={18} className="text-gray-400 mx-2" />
                   <input type="text" placeholder="Search ingredient..." value={query} onChange={e => setQuery(e.target.value)} className="flex-1 border-none focus:ring-0 py-2 text-sm outline-none" autoFocus />
                   <button onClick={() => setIsSearching(false)} className="p-2 text-gray-400"><X size={18} /></button>
               </div>
               <ul className="max-h-60 overflow-y-auto">
                   {searchResults.map(food => (
                       <li key={food.id} onClick={() => handleAddIngredient(food.id, food.baseUnit)} className="px-4 py-3 border-b border-gray-50 text-sm cursor-pointer hover:bg-gray-50">
                           <div className="font-medium text-gray-900">{food.name}</div>
                           <div className="text-xs text-gray-500">{food.category}</div>
                       </li>
                   ))}
               </ul>
            </div>
        )}

        {ingredients.length > 0 && (
            <div className="mt-6 pt-4 border-t border-gray-100">
                <h4 className="text-xs font-semibold text-gray-500 uppercase mb-3">Total Recipe Nutrition</h4>
                <div className="grid grid-cols-5 gap-2 text-center text-sm">
                    <div><div className="font-bold text-gray-900">{totalMacros.calories.toFixed(0)}</div><div className="text-[10px] text-gray-500">kcal</div></div>
                    <div><div className="font-bold text-blue-600">{totalMacros.protein.toFixed(1)}g</div><div className="text-[10px] text-gray-500">Pro</div></div>
                    <div><div className="font-bold text-saffron-600">{totalMacros.carbs.toFixed(1)}g</div><div className="text-[10px] text-gray-500">Carb</div></div>
                    <div><div className="font-bold text-purple-600">{totalMacros.fat.toFixed(1)}g</div><div className="text-[10px] text-gray-500">Fat</div></div>
                    <div><div className="font-bold text-forest-600">{totalMacros.fiber.toFixed(1)}g</div><div className="text-[10px] text-gray-500">Fib</div></div>
                </div>
            </div>
        )}
      </div>

      {/* Saved Recipes List */}
      <div>
         <h2 className="text-lg font-bold text-gray-800 mb-4">Saved Recipes</h2>
         {recipes.length === 0 ? (
             <p className="text-sm text-gray-500">No saved recipes yet.</p>
         ) : (
             <div className="space-y-3">
                 {recipes.map(recipe => (
                     <div key={recipe.id} className="card p-4 flex justify-between items-center">
                         <div>
                             <div className="font-semibold text-gray-900">{recipe.name}</div>
                             <div className="text-xs text-gray-500">{recipe.ingredients.length} ingredients • {recipe.numberOfServings} servings</div>
                         </div>
                         <button onClick={async () => {
                             if(confirm('Delete recipe?')) {
                                 await recipeRepository.deleteRecipe(recipe.id);
                             }
                         }} className="p-2 text-gray-400 hover:text-red-500"><Trash2 size={18} /></button>
                     </div>
                 ))}
             </div>
         )}
      </div>
    </div>
  );
}
