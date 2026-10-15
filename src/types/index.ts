export type ServingUnit = 'g' | 'ml' | 'piece' | 'roti' | 'katori' | 'cup' | 'tbsp' | 'tsp' | 'egg' | string;

export interface ServingOption {
  unit: ServingUnit;
  weightInGrams: number;
}

export type FoodCategory =
  | 'Grains and staples'
  | 'Pulses and legumes'
  | 'Protein-rich foods'
  | 'Vegetables and fruit'
  | 'Dairy, fats, condiments, and extras'
  | 'Complete meals and regional foods'
  | 'Custom';

export interface Macros {
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
  fiber: number;
}

export interface FoodItem {
  id: string;
  name: string;
  aliases?: string[];
  category: FoodCategory;
  isCooked: boolean;
  isGeneric: boolean;
  baseAmount: number; // usually 100
  baseUnit: 'g' | 'ml';
  macrosPerBase: Macros;
  servingOptions: ServingOption[];
  source?: string;
  isCustom?: boolean;
}

export interface RecipeIngredient {
  id: string; // unique ID for this ingredient instance in the recipe
  foodId: string;
  quantity: number;
  unit: ServingUnit;
  notes?: string;
}

export interface Recipe {
  id: string;
  name: string;
  ingredients: RecipeIngredient[];
  totalFinishedWeightInGrams?: number;
  numberOfServings: number;
  servingSizeNotes?: string;
  cookingMethodNotes?: string;
  createdAt: number;
  updatedAt: number;
}

export type MealType = 'Breakfast' | 'Lunch' | 'Evening snacks' | 'Dinner' | 'Custom';

export interface LogEntry {
  id: string;
  date: string; // YYYY-MM-DD
  mealType: MealType;
  foodId: string; // ID from FoodItem or Recipe
  isRecipe: boolean;
  quantity: number;
  unit: ServingUnit;
  createdAt: number;
}

export interface DailyTargets {
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
  fiber: number;
}

export interface UserProfile {
  dailyTargets: DailyTargets;
  goal?: 'Maintenance' | 'Muscle gain' | 'Fat loss' | 'Custom targets';
  age?: number;
  heightCm?: number;
  weightKg?: number;
  activityLevel?: 'Sedentary' | 'Lightly active' | 'Moderately active' | 'Very active' | 'Extra active';
}
