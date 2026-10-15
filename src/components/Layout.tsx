import { Outlet, NavLink } from 'react-router-dom';
import { Home, Search, BookOpen, BarChart2, Settings } from 'lucide-react';
import clsx from 'clsx';

export function Layout() {
  const navItems = [
    { to: '/', icon: Home, label: 'Today' },
    { to: '/foods', icon: Search, label: 'Foods' },
    { to: '/recipes', icon: BookOpen, label: 'Recipes' },
    { to: '/insights', icon: BarChart2, label: 'Insights' },
    { to: '/settings', icon: Settings, label: 'Settings' }
  ];

  return (
    <div className="min-h-screen bg-cream-50 flex flex-col font-sans text-gray-900 overflow-hidden">
      <main className="flex-1 overflow-y-auto pb-20 safe-area-pt">
        <Outlet />
      </main>

      <nav className="fixed bottom-0 w-full bg-white border-t border-gray-200 safe-area-pb shadow-[0_-4px_20px_-10px_rgba(0,0,0,0.1)]">
        <div className="flex justify-around items-center h-16">
          {navItems.map(({ to, icon: Icon, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                clsx(
                  'flex flex-col items-center justify-center w-full h-full touch-target tap-highlight-transparent transition-colors',
                  isActive ? 'text-forest-700' : 'text-gray-500 hover:text-gray-700'
                )
              }
            >
              {({ isActive }) => (
                <>
                  <div className={clsx("p-1 rounded-full mb-0.5", isActive && "bg-forest-100")}>
                    <Icon size={24} strokeWidth={isActive ? 2.5 : 2} />
                  </div>
                  <span className={clsx("text-[10px] font-medium", isActive && "font-semibold")}>
                    {label}
                  </span>
                </>
              )}
            </NavLink>
          ))}
        </div>
      </nav>
    </div>
  );
}
