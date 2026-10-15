import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Today } from './pages/Today';
import { FoodSearch } from './pages/FoodSearch';
import { RecipeBuilder } from './pages/RecipeBuilder';
import { Insights } from './pages/Insights';
import { Settings } from './pages/Settings';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Today />} />
          <Route path="foods" element={<FoodSearch />} />
          <Route path="recipes" element={<RecipeBuilder />} />
          <Route path="insights" element={<Insights />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
