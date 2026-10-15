import { describe, it, expect } from 'vitest';
import {
  calculateNutrientForPortion,
  aggregateMacros,
  calculateRecipeNutrition,
  calculateRecipeNutritionPer100g,
  convertToGrams
} from './nutrition';
import type { FoodItem, Recipe } from '../types';

describe('Nutrition Engine', () => {
  const baseMacros = { calories: 100, protein: 10, carbs: 20, fat: 5, fiber: 2 };

  it('scales portion correctly (150g)', () => {
    const result = calculateNutrientForPortion(baseMacros, 100, 150);
    expect(result.calories).toBe(150);
    expect(result.protein).toBe(15);
    expect(result.carbs).toBe(30);
    expect(result.fat).toBe(7.5);
    expect(result.fiber).toBe(3);
  });

  it('handles zero quantity', () => {
    const result = calculateNutrientForPortion(baseMacros, 100, 0);
    expect(result.calories).toBe(0);
    expect(result.protein).toBe(0);
  });

  it('aggregates multiple macros', () => {
    const macros = [
      { calories: 100, protein: 10, carbs: 20, fat: 5, fiber: 2 },
      { calories: 200, protein: 20, carbs: 40, fat: 10, fiber: 4 }
    ];
    const result = aggregateMacros(macros);
    expect(result.calories).toBe(300);
    expect(result.protein).toBe(30);
    expect(result.carbs).toBe(60);
    expect(result.fat).toBe(15);
    expect(result.fiber).toBe(6);
  });

  describe('Recipe calculations', () => {
    const mockFoods: FoodItem[] = [
      {
        id: 'f1', name: 'Raw Rice', category: 'Grains and staples', isCooked: false, isGeneric: true, baseAmount: 100, baseUnit: 'g',
        macrosPerBase: { calories: 360, protein: 7, carbs: 80, fat: 1, fiber: 1 },
        servingOptions: []
      },
      {
        id: 'f2', name: 'Raw Dal', category: 'Pulses and legumes', isCooked: false, isGeneric: true, baseAmount: 100, baseUnit: 'g',
        macrosPerBase: { calories: 340, protein: 22, carbs: 60, fat: 1.5, fiber: 15 },
        servingOptions: []
      }
    ];

    const mockRecipe: Recipe = {
      id: 'r1',
      name: 'Dal Rice Mix',
      ingredients: [
        { id: 'i1', foodId: 'f1', quantity: 200, unit: 'g' }, // 720 kcal, 14p
        { id: 'i2', foodId: 'f2', quantity: 100, unit: 'g' }  // 340 kcal, 22p
      ],
      numberOfServings: 2,
      createdAt: Date.now(),
      updatedAt: Date.now()
    };

    it('calculates total recipe nutrition correctly', () => {
      const result = calculateRecipeNutrition(mockRecipe, mockFoods);
      expect(result.calories).toBe(1060); // 720 + 340
      expect(result.protein).toBe(36); // 14 + 22
      expect(result.carbs).toBe(220); // 160 + 60
    });

    it('calculates per 100g finished weight if specified', () => {
      const recipeWithFinishedWeight = { ...mockRecipe, totalFinishedWeightInGrams: 500 };
      const result = calculateRecipeNutritionPer100g(recipeWithFinishedWeight, mockFoods);
      // 1060 total kcal / 500g finished weight = 2.12 kcal per gram -> 212 kcal per 100g
      expect(result?.calories).toBe(212);
      expect(result?.protein).toBe(7.2);
    });

    it('returns null for per 100g if finished weight is unknown', () => {
      const result = calculateRecipeNutritionPer100g(mockRecipe, mockFoods);
      expect(result).toBeNull();
    });
  });

  describe('Conversion', () => {
    const options = [
      { unit: 'roti', weightInGrams: 40 },
      { unit: 'katori', weightInGrams: 150 }
    ];

    it('returns original quantity for g/ml', () => {
      expect(convertToGrams(100, 'g', options)).toBe(100);
      expect(convertToGrams(200, 'ml', options)).toBe(200);
    });

    it('converts custom units to grams correctly', () => {
      expect(convertToGrams(2, 'roti', options)).toBe(80);
      expect(convertToGrams(1.5, 'katori', options)).toBe(225);
    });
  });
});
