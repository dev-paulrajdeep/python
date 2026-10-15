import { useState, useEffect } from 'react';
import { profileRepository } from '../db/repositories';
import { db } from '../db';
import type { UserProfile } from '../types';
import { Download, Save } from 'lucide-react';

export function Settings() {
  const [profile, setProfile] = useState<UserProfile | null>(null);

  useEffect(() => {
    profileRepository.getProfile().then(setProfile);
  }, []);

  const handleTargetChange = (key: keyof UserProfile['dailyTargets'], value: number) => {
    if (!profile) return;
    setProfile({
      ...profile,
      dailyTargets: { ...profile.dailyTargets, [key]: value }
    });
  };

  const saveSettings = async () => {
    if (profile) {
      await profileRepository.updateProfile({ dailyTargets: profile.dailyTargets });
      alert('Settings saved!');
    }
  };

  const handleExport = async () => {
    const logs = await db.logEntries.toArray();
    const recipes = await db.recipes.toArray();
    const prof = await profileRepository.getProfile();
    const data = JSON.stringify({ logs, recipes, profile: prof });

    const blob = new Blob([data], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `annatrack-backup-${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  if (!profile) return <div className="p-4">Loading...</div>;

  return (
    <div className="p-4 max-w-2xl mx-auto pb-24">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Settings</h1>

      <div className="card mb-8">
        <div className="flex justify-between items-center mb-4">
           <h2 className="text-lg font-bold text-gray-800">Daily Targets</h2>
           <button onClick={saveSettings} className="btn-primary py-2 px-4 flex items-center gap-2 text-sm">
              <Save size={16} /> Save
           </button>
        </div>

        <div className="space-y-4">
          {Object.entries(profile.dailyTargets).map(([key, value]) => (
            <div key={key}>
              <label className="block text-xs font-semibold text-gray-600 uppercase mb-1">{key} {key !== 'calories' ? '(g)' : ''}</label>
              <input
                type="number"
                value={value}
                onChange={(e) => handleTargetChange(key as any, parseFloat(e.target.value) || 0)}
                className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 focus:ring-2 focus:ring-forest-500 outline-none"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="card">
        <h2 className="text-lg font-bold text-gray-800 mb-4">Data Management</h2>
        <div className="space-y-3">
          <button onClick={handleExport} className="w-full flex items-center justify-center gap-2 py-3 bg-gray-50 hover:bg-gray-100 text-gray-700 font-semibold rounded-xl transition-colors border border-gray-200">
            <Download size={18} /> Export Data
          </button>
          <div className="text-xs text-center text-gray-500 mt-2">
            Import functionality is coming soon.
          </div>
        </div>
      </div>
    </div>
  );
}
