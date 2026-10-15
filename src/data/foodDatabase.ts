import type { FoodItem } from '../types';

export const initialFoodDatabase: FoodItem[] = [
  // Grains and staples
  {
    id: 'f-grain-1', name: 'White Rice (Cooked)', aliases: ['chawal'], category: 'Grains and staples',
    isCooked: true, isGeneric: true, baseAmount: 100, baseUnit: 'g',
    macrosPerBase: { calories: 130, protein: 2.7, carbs: 28, fat: 0.3, fiber: 0.4 },
    servingOptions: [{ unit: 'katori', weightInGrams: 150 }, { unit: 'cup', weightInGrams: 158 }],
  },
  {
    id: 'f-grain-2', name: 'White Rice (Raw)', aliases: ['chawal', 'uncooked rice'], category: 'Grains and staples',
    isCooked: false, isGeneric: true, baseAmount: 100, baseUnit: 'g',
    macrosPerBase: { calories: 360, protein: 6.6, carbs: 79, fat: 0.6, fiber: 1.4 },
    servingOptions: [{ unit: 'cup', weightInGrams: 185 }],
  },
  {
    id: 'f-grain-3', name: 'Roti (Whole Wheat, Cooked)', aliases: ['chapati', 'phulka'], category: 'Grains and staples',
    isCooked: true, isGeneric: true, baseAmount: 100, baseUnit: 'g',
    macrosPerBase: { calories: 297, protein: 9, carbs: 56, fat: 3.8, fiber: 9 },
    servingOptions: [{ unit: 'roti', weightInGrams: 35 }, { unit: 'piece', weightInGrams: 35 }],
  },
  {
    id: 'f-grain-4', name: 'Whole-wheat atta (Raw)', aliases: ['flour', 'gehun atta'], category: 'Grains and staples',
    isCooked: false, isGeneric: true, baseAmount: 100, baseUnit: 'g',
    macrosPerBase: { calories: 340, protein: 12, carbs: 72, fat: 2, fiber: 10.7 },
    servingOptions: [{ unit: 'cup', weightInGrams: 120 }],
  },
  {
    id: 'f-grain-5', name: 'Paratha (Plain, Cooked with Oil)', aliases: ['parotta'], category: 'Grains and staples',
    isCooked: true, isGeneric: true, baseAmount: 100, baseUnit: 'g',
    macrosPerBase: { calories: 326, protein: 8, carbs: 52, fat: 9, fiber: 5 },
    servingOptions: [{ unit: 'piece', weightInGrams: 60 }],
  },
  {
    id: 'f-grain-6', name: 'Poha (Flattened Rice, Dry)', aliases: ['chivda', 'aval'], category: 'Grains and staples',
    isCooked: false, isGeneric: true, baseAmount: 100, baseUnit: 'g',
    macrosPerBase: { calories: 350, protein: 6.6, carbs: 78, fat: 0.5, fiber: 0.7 },
    servingOptions: [{ unit: 'cup', weightInGrams: 50 }],
  },
  {
    id: 'f-grain-7', name: 'Upma (Cooked)', aliases: [], category: 'Grains and staples',
    isCooked: true, isGeneric: true, baseAmount: 100, baseUnit: 'g',
    macrosPerBase: { calories: 150, protein: 4, carbs: 20, fat: 5, fiber: 1.5 },
    servingOptions: [{ unit: 'katori', weightInGrams: 150 }],
  },
  {
    id: 'f-grain-8', name: 'Idli (Cooked)', aliases: [], category: 'Grains and staples',
    isCooked: true, isGeneric: true, baseAmount: 100, baseUnit: 'g',
    macrosPerBase: { calories: 140, protein: 4, carbs: 29, fat: 0.4, fiber: 2 },
    servingOptions: [{ unit: 'piece', weightInGrams: 50 }],
  },
  {
    id: 'f-grain-9', name: 'Dosa (Plain, Cooked)', aliases: [], category: 'Grains and staples',
    isCooked: true, isGeneric: true, baseAmount: 100, baseUnit: 'g',
    macrosPerBase: { calories: 168, protein: 3.9, carbs: 29, fat: 3.7, fiber: 0.9 },
    servingOptions: [{ unit: 'piece', weightInGrams: 80 }],
  },
  {
    id: 'f-grain-10', name: 'White Bread', aliases: ['pav'], category: 'Grains and staples',
    isCooked: true, isGeneric: true, baseAmount: 100, baseUnit: 'g',
    macrosPerBase: { calories: 266, protein: 8.8, carbs: 49, fat: 3.3, fiber: 2.7 },
    servingOptions: [{ unit: 'piece', weightInGrams: 25 }, { unit: 'slice', weightInGrams: 25 }],
  },
  {
    id: 'f-grain-11', name: 'Oats (Raw)', aliases: ['rolled oats', 'porridge oats'], category: 'Grains and staples',
    isCooked: false, isGeneric: true, baseAmount: 100, baseUnit: 'g',
    macrosPerBase: { calories: 389, protein: 16.9, carbs: 66.3, fat: 6.9, fiber: 10.6 },
    servingOptions: [{ unit: 'cup', weightInGrams: 80 }, { unit: 'tbsp', weightInGrams: 10 }],
  },

  // Pulses and legumes
  {
    id: 'f-pulse-1', name: 'Toor Dal (Cooked, Medium Consistency)', aliases: ['arhar dal', 'pigeon pea'], category: 'Pulses and legumes',
    isCooked: true, isGeneric: true, baseAmount: 100, baseUnit: 'g',
    macrosPerBase: { calories: 105, protein: 6, carbs: 18, fat: 0.5, fiber: 5 },
    servingOptions: [{ unit: 'katori', weightInGrams: 150 }],
  },
  {
    id: 'f-pulse-2', name: 'Toor Dal (Raw)', aliases: ['arhar dal'], category: 'Pulses and legumes',
    isCooked: false, isGeneric: true, baseAmount: 100, baseUnit: 'g',
    macrosPerBase: { calories: 343, protein: 22, carbs: 63, fat: 1.5, fiber: 15 },
    servingOptions: [{ unit: 'cup', weightInGrams: 200 }],
  },
  {
    id: 'f-pulse-3', name: 'Moong Dal (Cooked)', aliases: ['yellow dal'], category: 'Pulses and legumes',
    isCooked: true, isGeneric: true, baseAmount: 100, baseUnit: 'g',
    macrosPerBase: { calories: 100, protein: 7, carbs: 18, fat: 0.4, fiber: 3.5 },
    servingOptions: [{ unit: 'katori', weightInGrams: 150 }],
  },
  {
    id: 'f-pulse-4', name: 'Masoor Dal (Cooked)', aliases: ['red lentil'], category: 'Pulses and legumes',
    isCooked: true, isGeneric: true, baseAmount: 100, baseUnit: 'g',
    macrosPerBase: { calories: 116, protein: 9, carbs: 20, fat: 0.4, fiber: 8 },
    servingOptions: [{ unit: 'katori', weightInGrams: 150 }],
  },
  {
    id: 'f-pulse-5', name: 'Chana Dal (Cooked)', aliases: ['split bengal gram'], category: 'Pulses and legumes',
    isCooked: true, isGeneric: true, baseAmount: 100, baseUnit: 'g',
    macrosPerBase: { calories: 130, protein: 7.5, carbs: 22, fat: 1.5, fiber: 6 },
    servingOptions: [{ unit: 'katori', weightInGrams: 150 }],
  },
  {
    id: 'f-pulse-6', name: 'Whole Kala Chana (Boiled)', aliases: ['black chickpeas'], category: 'Pulses and legumes',
    isCooked: true, isGeneric: true, baseAmount: 100, baseUnit: 'g',
    macrosPerBase: { calories: 164, protein: 8.9, carbs: 27, fat: 2.6, fiber: 7.6 },
    servingOptions: [{ unit: 'katori', weightInGrams: 130 }],
  },
  {
    id: 'f-pulse-7', name: 'Chickpeas (Boiled)', aliases: ['kabuli chana', 'garbanzo beans'], category: 'Pulses and legumes',
    isCooked: true, isGeneric: true, baseAmount: 100, baseUnit: 'g',
    macrosPerBase: { calories: 164, protein: 8.9, carbs: 27.4, fat: 2.6, fiber: 7.6 },
    servingOptions: [{ unit: 'katori', weightInGrams: 130 }, { unit: 'cup', weightInGrams: 164 }],
  },
  {
    id: 'f-pulse-8', name: 'Rajma (Boiled)', aliases: ['kidney beans'], category: 'Pulses and legumes',
    isCooked: true, isGeneric: true, baseAmount: 100, baseUnit: 'g',
    macrosPerBase: { calories: 127, protein: 8.7, carbs: 22.8, fat: 0.5, fiber: 6.4 },
    servingOptions: [{ unit: 'katori', weightInGrams: 130 }],
  },
  {
    id: 'f-pulse-9', name: 'Besan (Raw)', aliases: ['gram flour'], category: 'Pulses and legumes',
    isCooked: false, isGeneric: true, baseAmount: 100, baseUnit: 'g',
    macrosPerBase: { calories: 387, protein: 22, carbs: 58, fat: 6.7, fiber: 10.8 },
    servingOptions: [{ unit: 'tbsp', weightInGrams: 10 }, { unit: 'cup', weightInGrams: 92 }],
  },
  {
    id: 'f-pulse-10', name: 'Green Peas (Boiled)', aliases: ['matar'], category: 'Pulses and legumes',
    isCooked: true, isGeneric: true, baseAmount: 100, baseUnit: 'g',
    macrosPerBase: { calories: 81, protein: 5.4, carbs: 14.5, fat: 0.4, fiber: 5.1 },
    servingOptions: [{ unit: 'cup', weightInGrams: 160 }, { unit: 'katori', weightInGrams: 100 }],
  },

  // Protein-rich foods
  {
    id: 'f-pro-1', name: 'Soya Chunks (Dry)', aliases: ['nutrela', 'tvp'], category: 'Protein-rich foods',
    isCooked: false, isGeneric: true, baseAmount: 100, baseUnit: 'g',
    macrosPerBase: { calories: 345, protein: 52, carbs: 33, fat: 0.5, fiber: 13 },
    servingOptions: [{ unit: 'cup', weightInGrams: 50 }],
  },
  {
    id: 'f-pro-2', name: 'Soya Chunks (Boiled/Rehydrated)', aliases: ['nutrela'], category: 'Protein-rich foods',
    isCooked: true, isGeneric: true, baseAmount: 100, baseUnit: 'g',
    macrosPerBase: { calories: 115, protein: 17.3, carbs: 11, fat: 0.1, fiber: 4.3 },
    servingOptions: [{ unit: 'katori', weightInGrams: 100 }],
  },
  {
    id: 'f-pro-3', name: 'Paneer', aliases: ['cottage cheese'], category: 'Protein-rich foods',
    isCooked: false, isGeneric: true, baseAmount: 100, baseUnit: 'g',
    macrosPerBase: { calories: 296, protein: 18, carbs: 3, fat: 23, fiber: 0 },
    servingOptions: [{ unit: 'piece', weightInGrams: 20 }], // approximate 1 medium cube
  },
  {
    id: 'f-pro-4', name: 'Low Fat Paneer', aliases: [], category: 'Protein-rich foods',
    isCooked: false, isGeneric: true, baseAmount: 100, baseUnit: 'g',
    macrosPerBase: { calories: 130, protein: 19, carbs: 5, fat: 4, fiber: 0 },
    servingOptions: [{ unit: 'piece', weightInGrams: 20 }],
  },
  {
    id: 'f-pro-5', name: 'Tofu (Firm)', aliases: ['soy paneer'], category: 'Protein-rich foods',
    isCooked: false, isGeneric: true, baseAmount: 100, baseUnit: 'g',
    macrosPerBase: { calories: 144, protein: 15.8, carbs: 2.8, fat: 8.7, fiber: 2.3 },
    servingOptions: [{ unit: 'piece', weightInGrams: 20 }],
  },
  {
    id: 'f-pro-6', name: 'Whole Egg (Boiled)', aliases: ['anda'], category: 'Protein-rich foods',
    isCooked: true, isGeneric: true, baseAmount: 100, baseUnit: 'g',
    macrosPerBase: { calories: 155, protein: 12.6, carbs: 1.1, fat: 10.6, fiber: 0 },
    servingOptions: [{ unit: 'egg', weightInGrams: 50 }, { unit: 'piece', weightInGrams: 50 }],
  },
  {
    id: 'f-pro-7', name: 'Egg White (Boiled)', aliases: ['anda safedi'], category: 'Protein-rich foods',
    isCooked: true, isGeneric: true, baseAmount: 100, baseUnit: 'g',
    macrosPerBase: { calories: 52, protein: 10.9, carbs: 0.7, fat: 0.2, fiber: 0 },
    servingOptions: [{ unit: 'egg', weightInGrams: 33 }, { unit: 'piece', weightInGrams: 33 }],
  },
  {
    id: 'f-pro-8', name: 'Chicken Breast (Raw, Boneless)', aliases: ['murgh'], category: 'Protein-rich foods',
    isCooked: false, isGeneric: true, baseAmount: 100, baseUnit: 'g',
    macrosPerBase: { calories: 120, protein: 22.5, carbs: 0, fat: 2.6, fiber: 0 },
    servingOptions: [{ unit: 'piece', weightInGrams: 150 }],
  },
  {
    id: 'f-pro-9', name: 'Chicken Breast (Cooked, Roasted)', aliases: [], category: 'Protein-rich foods',
    isCooked: true, isGeneric: true, baseAmount: 100, baseUnit: 'g',
    macrosPerBase: { calories: 165, protein: 31, carbs: 0, fat: 3.6, fiber: 0 },
    servingOptions: [{ unit: 'piece', weightInGrams: 100 }],
  },
  {
    id: 'f-pro-10', name: 'Rohu Fish (Raw)', aliases: ['machli'], category: 'Protein-rich foods',
    isCooked: false, isGeneric: true, baseAmount: 100, baseUnit: 'g',
    macrosPerBase: { calories: 102, protein: 18, carbs: 0, fat: 3, fiber: 0 },
    servingOptions: [{ unit: 'piece', weightInGrams: 80 }],
  },
  {
    id: 'f-pro-11', name: 'Whey Protein Concentrate (Generic)', aliases: ['protein powder'], category: 'Protein-rich foods',
    isCooked: false, isGeneric: true, baseAmount: 100, baseUnit: 'g',
    macrosPerBase: { calories: 400, protein: 80, carbs: 6, fat: 6, fiber: 0 },
    servingOptions: [{ unit: 'scoop', weightInGrams: 30 }],
  },
  {
    id: 'f-pro-12', name: 'Whey Protein Isolate (Generic)', aliases: ['protein powder'], category: 'Protein-rich foods',
    isCooked: false, isGeneric: true, baseAmount: 100, baseUnit: 'g',
    macrosPerBase: { calories: 360, protein: 90, carbs: 1, fat: 1, fiber: 0 },
    servingOptions: [{ unit: 'scoop', weightInGrams: 30 }],
  },

  // Vegetables and fruit
  {
    id: 'f-veg-1', name: 'Potato (Boiled)', aliases: ['aloo'], category: 'Vegetables and fruit',
    isCooked: true, isGeneric: true, baseAmount: 100, baseUnit: 'g',
    macrosPerBase: { calories: 87, protein: 1.9, carbs: 20, fat: 0.1, fiber: 1.8 },
    servingOptions: [{ unit: 'piece', weightInGrams: 100 }, { unit: 'katori', weightInGrams: 120 }],
  },
  {
    id: 'f-veg-2', name: 'Onion (Raw)', aliases: ['pyaaz'], category: 'Vegetables and fruit',
    isCooked: false, isGeneric: true, baseAmount: 100, baseUnit: 'g',
    macrosPerBase: { calories: 40, protein: 1.1, carbs: 9.3, fat: 0.1, fiber: 1.7 },
    servingOptions: [{ unit: 'piece', weightInGrams: 100 }, { unit: 'cup', weightInGrams: 160 }],
  },
  {
    id: 'f-veg-3', name: 'Tomato (Raw)', aliases: ['tamatar'], category: 'Vegetables and fruit',
    isCooked: false, isGeneric: true, baseAmount: 100, baseUnit: 'g',
    macrosPerBase: { calories: 18, protein: 0.9, carbs: 3.9, fat: 0.2, fiber: 1.2 },
    servingOptions: [{ unit: 'piece', weightInGrams: 120 }, { unit: 'cup', weightInGrams: 180 }],
  },
  {
    id: 'f-veg-4', name: 'Spinach (Raw)', aliases: ['palak'], category: 'Vegetables and fruit',
    isCooked: false, isGeneric: true, baseAmount: 100, baseUnit: 'g',
    macrosPerBase: { calories: 23, protein: 2.9, carbs: 3.6, fat: 0.4, fiber: 2.2 },
    servingOptions: [{ unit: 'cup', weightInGrams: 30 }],
  },
  {
    id: 'f-veg-5', name: 'Cauliflower (Raw)', aliases: ['gobi'], category: 'Vegetables and fruit',
    isCooked: false, isGeneric: true, baseAmount: 100, baseUnit: 'g',
    macrosPerBase: { calories: 25, protein: 1.9, carbs: 5, fat: 0.3, fiber: 2 },
    servingOptions: [{ unit: 'cup', weightInGrams: 100 }],
  },
  {
    id: 'f-veg-6', name: 'Cabbage (Raw)', aliases: ['patta gobi'], category: 'Vegetables and fruit',
    isCooked: false, isGeneric: true, baseAmount: 100, baseUnit: 'g',
    macrosPerBase: { calories: 25, protein: 1.3, carbs: 5.8, fat: 0.1, fiber: 2.5 },
    servingOptions: [{ unit: 'cup', weightInGrams: 89 }],
  },
  {
    id: 'f-veg-7', name: 'Carrot (Raw)', aliases: ['gajar'], category: 'Vegetables and fruit',
    isCooked: false, isGeneric: true, baseAmount: 100, baseUnit: 'g',
    macrosPerBase: { calories: 41, protein: 0.9, carbs: 9.6, fat: 0.2, fiber: 2.8 },
    servingOptions: [{ unit: 'piece', weightInGrams: 60 }, { unit: 'cup', weightInGrams: 128 }],
  },
  {
    id: 'f-veg-8', name: 'Okra (Raw)', aliases: ['bhindi', 'ladyfinger'], category: 'Vegetables and fruit',
    isCooked: false, isGeneric: true, baseAmount: 100, baseUnit: 'g',
    macrosPerBase: { calories: 33, protein: 1.9, carbs: 7.5, fat: 0.2, fiber: 3.2 },
    servingOptions: [{ unit: 'cup', weightInGrams: 100 }],
  },
  {
    id: 'f-veg-9', name: 'Cucumber (Raw)', aliases: ['kheera'], category: 'Vegetables and fruit',
    isCooked: false, isGeneric: true, baseAmount: 100, baseUnit: 'g',
    macrosPerBase: { calories: 15, protein: 0.7, carbs: 3.6, fat: 0.1, fiber: 0.5 },
    servingOptions: [{ unit: 'piece', weightInGrams: 300 }, { unit: 'cup', weightInGrams: 104 }],
  },
  {
    id: 'f-veg-10', name: 'Banana (Ripe)', aliases: ['kela'], category: 'Vegetables and fruit',
    isCooked: false, isGeneric: true, baseAmount: 100, baseUnit: 'g',
    macrosPerBase: { calories: 89, protein: 1.1, carbs: 22.8, fat: 0.3, fiber: 2.6 },
    servingOptions: [{ unit: 'piece', weightInGrams: 118 }], // medium banana
  },
  {
    id: 'f-veg-11', name: 'Apple (Raw with skin)', aliases: ['seb'], category: 'Vegetables and fruit',
    isCooked: false, isGeneric: true, baseAmount: 100, baseUnit: 'g',
    macrosPerBase: { calories: 52, protein: 0.3, carbs: 13.8, fat: 0.2, fiber: 2.4 },
    servingOptions: [{ unit: 'piece', weightInGrams: 180 }], // medium apple
  },
  {
    id: 'f-veg-12', name: 'Mango (Ripe)', aliases: ['aam'], category: 'Vegetables and fruit',
    isCooked: false, isGeneric: true, baseAmount: 100, baseUnit: 'g',
    macrosPerBase: { calories: 60, protein: 0.8, carbs: 15, fat: 0.4, fiber: 1.6 },
    servingOptions: [{ unit: 'piece', weightInGrams: 150 }, { unit: 'cup', weightInGrams: 165 }],
  },
  {
    id: 'f-veg-13', name: 'Orange (Raw)', aliases: ['santra'], category: 'Vegetables and fruit',
    isCooked: false, isGeneric: true, baseAmount: 100, baseUnit: 'g',
    macrosPerBase: { calories: 47, protein: 0.9, carbs: 11.8, fat: 0.1, fiber: 2.4 },
    servingOptions: [{ unit: 'piece', weightInGrams: 130 }],
  },
  {
    id: 'f-veg-14', name: 'Guava (Raw)', aliases: ['amrood'], category: 'Vegetables and fruit',
    isCooked: false, isGeneric: true, baseAmount: 100, baseUnit: 'g',
    macrosPerBase: { calories: 68, protein: 2.6, carbs: 14.3, fat: 1, fiber: 5.4 },
    servingOptions: [{ unit: 'piece', weightInGrams: 160 }],
  },
  {
    id: 'f-veg-15', name: 'Papaya (Ripe)', aliases: ['papita'], category: 'Vegetables and fruit',
    isCooked: false, isGeneric: true, baseAmount: 100, baseUnit: 'g',
    macrosPerBase: { calories: 43, protein: 0.5, carbs: 10.8, fat: 0.3, fiber: 1.7 },
    servingOptions: [{ unit: 'cup', weightInGrams: 145 }],
  },

  // Dairy, fats, condiments, and extras
  {
    id: 'f-dairy-1', name: 'Whole Milk (Buffalo)', aliases: ['doodh'], category: 'Dairy, fats, condiments, and extras',
    isCooked: false, isGeneric: true, baseAmount: 100, baseUnit: 'ml',
    macrosPerBase: { calories: 97, protein: 3.8, carbs: 5.2, fat: 6.9, fiber: 0 },
    servingOptions: [{ unit: 'cup', weightInGrams: 240 }, { unit: 'glass', weightInGrams: 250 }],
  },
  {
    id: 'f-dairy-2', name: 'Toned Milk (Cow/Buffalo blend)', aliases: ['doodh'], category: 'Dairy, fats, condiments, and extras',
    isCooked: false, isGeneric: true, baseAmount: 100, baseUnit: 'ml',
    macrosPerBase: { calories: 58, protein: 3.2, carbs: 4.8, fat: 3, fiber: 0 },
    servingOptions: [{ unit: 'cup', weightInGrams: 240 }, { unit: 'glass', weightInGrams: 250 }],
  },
  {
    id: 'f-dairy-3', name: 'Double Toned Milk (Skimmed)', aliases: ['doodh'], category: 'Dairy, fats, condiments, and extras',
    isCooked: false, isGeneric: true, baseAmount: 100, baseUnit: 'ml',
    macrosPerBase: { calories: 45, protein: 3.4, carbs: 5.1, fat: 1.5, fiber: 0 },
    servingOptions: [{ unit: 'cup', weightInGrams: 240 }, { unit: 'glass', weightInGrams: 250 }],
  },
  {
    id: 'f-dairy-4', name: 'Curd (Whole Milk)', aliases: ['dahi', 'yogurt'], category: 'Dairy, fats, condiments, and extras',
    isCooked: false, isGeneric: true, baseAmount: 100, baseUnit: 'g',
    macrosPerBase: { calories: 98, protein: 4.3, carbs: 3.4, fat: 7.5, fiber: 0 },
    servingOptions: [{ unit: 'katori', weightInGrams: 100 }, { unit: 'cup', weightInGrams: 245 }],
  },
  {
    id: 'f-dairy-5', name: 'Curd (Low Fat)', aliases: ['dahi'], category: 'Dairy, fats, condiments, and extras',
    isCooked: false, isGeneric: true, baseAmount: 100, baseUnit: 'g',
    macrosPerBase: { calories: 60, protein: 4.5, carbs: 5, fat: 2, fiber: 0 },
    servingOptions: [{ unit: 'katori', weightInGrams: 100 }, { unit: 'cup', weightInGrams: 245 }],
  },
  {
    id: 'f-dairy-6', name: 'Greek Yogurt (Plain)', aliases: [], category: 'Dairy, fats, condiments, and extras',
    isCooked: false, isGeneric: true, baseAmount: 100, baseUnit: 'g',
    macrosPerBase: { calories: 97, protein: 9, carbs: 4, fat: 5, fiber: 0 },
    servingOptions: [{ unit: 'katori', weightInGrams: 100 }],
  },
  {
    id: 'f-dairy-7', name: 'Ghee', aliases: ['clarified butter'], category: 'Dairy, fats, condiments, and extras',
    isCooked: false, isGeneric: true, baseAmount: 100, baseUnit: 'g',
    macrosPerBase: { calories: 900, protein: 0, carbs: 0, fat: 100, fiber: 0 },
    servingOptions: [{ unit: 'tbsp', weightInGrams: 15 }, { unit: 'tsp', weightInGrams: 5 }],
  },
  {
    id: 'f-dairy-8', name: 'Butter', aliases: ['makhan'], category: 'Dairy, fats, condiments, and extras',
    isCooked: false, isGeneric: true, baseAmount: 100, baseUnit: 'g',
    macrosPerBase: { calories: 717, protein: 0.9, carbs: 0.1, fat: 81, fiber: 0 },
    servingOptions: [{ unit: 'tbsp', weightInGrams: 14 }, { unit: 'tsp', weightInGrams: 5 }, { unit: 'cube', weightInGrams: 10 }],
  },
  {
    id: 'f-dairy-9', name: 'Cooking Oil (Mustard/Sunflower/Peanut)', aliases: ['tel'], category: 'Dairy, fats, condiments, and extras',
    isCooked: false, isGeneric: true, baseAmount: 100, baseUnit: 'g',
    macrosPerBase: { calories: 900, protein: 0, carbs: 0, fat: 100, fiber: 0 },
    servingOptions: [{ unit: 'tbsp', weightInGrams: 15 }, { unit: 'tsp', weightInGrams: 5 }],
  },
  {
    id: 'f-dairy-10', name: 'Peanuts (Raw/Roasted)', aliases: ['mungfali'], category: 'Dairy, fats, condiments, and extras',
    isCooked: false, isGeneric: true, baseAmount: 100, baseUnit: 'g',
    macrosPerBase: { calories: 567, protein: 25.8, carbs: 16.1, fat: 49.2, fiber: 8.5 },
    servingOptions: [{ unit: 'tbsp', weightInGrams: 15 }, { unit: 'cup', weightInGrams: 146 }],
  },
  {
    id: 'f-dairy-11', name: 'Almonds (Raw)', aliases: ['badam'], category: 'Dairy, fats, condiments, and extras',
    isCooked: false, isGeneric: true, baseAmount: 100, baseUnit: 'g',
    macrosPerBase: { calories: 579, protein: 21.2, carbs: 21.6, fat: 49.9, fiber: 12.5 },
    servingOptions: [{ unit: 'piece', weightInGrams: 1.2 }, { unit: 'tbsp', weightInGrams: 10 }],
  },
  {
    id: 'f-dairy-12', name: 'Cashews (Raw)', aliases: ['kaju'], category: 'Dairy, fats, condiments, and extras',
    isCooked: false, isGeneric: true, baseAmount: 100, baseUnit: 'g',
    macrosPerBase: { calories: 553, protein: 18.2, carbs: 30.2, fat: 43.8, fiber: 3.3 },
    servingOptions: [{ unit: 'piece', weightInGrams: 1.5 }, { unit: 'tbsp', weightInGrams: 10 }],
  },
  {
    id: 'f-dairy-13', name: 'Sugar (White)', aliases: ['cheeni'], category: 'Dairy, fats, condiments, and extras',
    isCooked: false, isGeneric: true, baseAmount: 100, baseUnit: 'g',
    macrosPerBase: { calories: 387, protein: 0, carbs: 100, fat: 0, fiber: 0 },
    servingOptions: [{ unit: 'tbsp', weightInGrams: 12 }, { unit: 'tsp', weightInGrams: 4 }],
  },
  {
    id: 'f-dairy-14', name: 'Jaggery', aliases: ['gud'], category: 'Dairy, fats, condiments, and extras',
    isCooked: false, isGeneric: true, baseAmount: 100, baseUnit: 'g',
    macrosPerBase: { calories: 383, protein: 0.4, carbs: 98, fat: 0.1, fiber: 0 },
    servingOptions: [{ unit: 'piece', weightInGrams: 15 }, { unit: 'tbsp', weightInGrams: 15 }],
  },
  {
    id: 'f-dairy-15', name: 'Mint Coriander Chutney', aliases: ['hari chutney'], category: 'Dairy, fats, condiments, and extras',
    isCooked: false, isGeneric: true, baseAmount: 100, baseUnit: 'g',
    macrosPerBase: { calories: 45, protein: 2, carbs: 8, fat: 0.5, fiber: 3 },
    servingOptions: [{ unit: 'tbsp', weightInGrams: 15 }],
  },
  {
    id: 'f-dairy-16', name: 'Mixed Pickle (Oil based)', aliases: ['achaar'], category: 'Dairy, fats, condiments, and extras',
    isCooked: false, isGeneric: true, baseAmount: 100, baseUnit: 'g',
    macrosPerBase: { calories: 250, protein: 2, carbs: 15, fat: 20, fiber: 4 },
    servingOptions: [{ unit: 'tbsp', weightInGrams: 15 }, { unit: 'tsp', weightInGrams: 5 }],
  },

  // Complete meals and regional foods (Estimates based on typical preparations)
  {
    id: 'f-meal-1', name: 'Dal Chawal (Typical Plate)', aliases: ['rice and lentils'], category: 'Complete meals and regional foods',
    isCooked: true, isGeneric: false, baseAmount: 100, baseUnit: 'g', // 200g rice + 150g dal + 1tsp ghee
    macrosPerBase: { calories: 135, protein: 3.5, carbs: 23, fat: 2.5, fiber: 2.5 },
    servingOptions: [{ unit: 'plate', weightInGrams: 355 }],
  },
  {
    id: 'f-meal-2', name: 'Chole Chawal (Typical Plate)', aliases: [], category: 'Complete meals and regional foods',
    isCooked: true, isGeneric: false, baseAmount: 100, baseUnit: 'g',
    macrosPerBase: { calories: 150, protein: 4, carbs: 24, fat: 3.5, fiber: 3 },
    servingOptions: [{ unit: 'plate', weightInGrams: 400 }],
  },
  {
    id: 'f-meal-3', name: 'Rajma Chawal (Typical Plate)', aliases: [], category: 'Complete meals and regional foods',
    isCooked: true, isGeneric: false, baseAmount: 100, baseUnit: 'g',
    macrosPerBase: { calories: 145, protein: 4.5, carbs: 23, fat: 3, fiber: 3.5 },
    servingOptions: [{ unit: 'plate', weightInGrams: 400 }],
  },
  {
    id: 'f-meal-4', name: 'Egg Curry with 2 Rotis', aliases: ['anda curry roti'], category: 'Complete meals and regional foods',
    isCooked: true, isGeneric: false, baseAmount: 100, baseUnit: 'g', // 2 eggs + gravy + 2 rotis (70g)
    macrosPerBase: { calories: 190, protein: 9, carbs: 18, fat: 9, fiber: 2.5 },
    servingOptions: [{ unit: 'plate', weightInGrams: 300 }],
  },
  {
    id: 'f-meal-5', name: 'Vegetable Pulao', aliases: ['veg biryani'], category: 'Complete meals and regional foods',
    isCooked: true, isGeneric: false, baseAmount: 100, baseUnit: 'g',
    macrosPerBase: { calories: 140, protein: 3, carbs: 22, fat: 4, fiber: 2 },
    servingOptions: [{ unit: 'plate', weightInGrams: 300 }, { unit: 'katori', weightInGrams: 150 }],
  },
  {
    id: 'f-meal-6', name: 'Chicken Curry (Home style)', aliases: ['murgh masala'], category: 'Complete meals and regional foods',
    isCooked: true, isGeneric: false, baseAmount: 100, baseUnit: 'g',
    macrosPerBase: { calories: 135, protein: 14, carbs: 4, fat: 7, fiber: 1 },
    servingOptions: [{ unit: 'katori', weightInGrams: 200 }],
  },
  {
    id: 'f-meal-7', name: 'Moong Dal Khichdi', aliases: ['khichuri'], category: 'Complete meals and regional foods',
    isCooked: true, isGeneric: false, baseAmount: 100, baseUnit: 'g',
    macrosPerBase: { calories: 110, protein: 4, carbs: 18, fat: 2.5, fiber: 2 },
    servingOptions: [{ unit: 'plate', weightInGrams: 300 }, { unit: 'katori', weightInGrams: 150 }],
  },
  {
    id: 'f-meal-8', name: 'Aloo Paratha (Cooked with Oil/Ghee)', aliases: ['stuffed paratha'], category: 'Complete meals and regional foods',
    isCooked: true, isGeneric: false, baseAmount: 100, baseUnit: 'g',
    macrosPerBase: { calories: 250, protein: 5, carbs: 33, fat: 10, fiber: 3.5 },
    servingOptions: [{ unit: 'piece', weightInGrams: 120 }],
  },
];
