import Dexie, { type Table } from 'dexie';
import type { FoodItem, Recipe, LogEntry, UserProfile } from '../types';

export class AnnaTrackDB extends Dexie {
  customFoods!: Table<FoodItem, string>;
  recipes!: Table<Recipe, string>;
  logEntries!: Table<LogEntry, string>;
  userProfile!: Table<UserProfile, string>;

  constructor() {
    super('AnnaTrackDB');
    this.version(1).stores({
      customFoods: 'id, name, category',
      recipes: 'id, name',
      logEntries: 'id, date, mealType, foodId',
      userProfile: 'id' // 'default' as id
    });
  }
}

export const db = new AnnaTrackDB();
