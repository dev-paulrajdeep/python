import { db } from './index';
import type { Recipe, LogEntry, UserProfile, DailyTargets } from '../types';
import { v4 as uuidv4 } from 'uuid';

export const logRepository = {
  getLogsByDate: async (date: string) => {
    return await db.logEntries.where('date').equals(date).toArray();
  },
  addLog: async (log: Omit<LogEntry, 'id' | 'createdAt'>) => {
    const newLog: LogEntry = {
      ...log,
      id: uuidv4(),
      createdAt: Date.now()
    };
    await db.logEntries.add(newLog);
    return newLog;
  },
  updateLog: async (id: string, updates: Partial<LogEntry>) => {
    await db.logEntries.update(id, updates);
  },
  deleteLog: async (id: string) => {
    await db.logEntries.delete(id);
  },
  getRecentLogs: async (limit = 20) => {
     return await db.logEntries.orderBy('createdAt').reverse().limit(limit).toArray();
  }
};

export const recipeRepository = {
  getAllRecipes: async () => {
    return await db.recipes.toArray();
  },
  addRecipe: async (recipe: Omit<Recipe, 'id' | 'createdAt' | 'updatedAt'>) => {
    const newRecipe: Recipe = {
      ...recipe,
      id: uuidv4(),
      createdAt: Date.now(),
      updatedAt: Date.now()
    };
    await db.recipes.add(newRecipe);
    return newRecipe;
  },
  updateRecipe: async (id: string, updates: Partial<Recipe>) => {
    await db.recipes.update(id, { ...updates, updatedAt: Date.now() });
  },
  deleteRecipe: async (id: string) => {
    await db.recipes.delete(id);
  }
};

export const profileRepository = {
    getProfile: async () => {
        const profile = await db.userProfile.get('default');
        if (!profile) {
            const defaultTargets: DailyTargets = { calories: 2000, protein: 60, carbs: 250, fat: 60, fiber: 30 };
            const defaultProfile: UserProfile = { dailyTargets: defaultTargets } as UserProfile;
            await db.userProfile.put({ id: 'default', ...defaultProfile } as any);
            return defaultProfile;
        }
        return profile;
    },
    updateProfile: async (updates: Partial<UserProfile>) => {
        await db.userProfile.update('default', updates);
    }
}
