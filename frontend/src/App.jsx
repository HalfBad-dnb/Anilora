import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import BouquetPage from './pages/BouquetPage';
import CactusPage from './pages/CactusPage';
import SunflowerPage from './pages/SunflowerPage';
import OrchidPage from './pages/OrchidPage';
import DaisyPage from './pages/DaisyPage';
import './App.css';
import './Styles/footer.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-r from-green-100 to-teal-300 flex flex-col">
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/bouquet" element={<BouquetPage />} />
            <Route path="/cactus" element={<CactusPage />} />
            <Route path="/sunflower" element={<SunflowerPage />} />
            <Route path="/orchid" element={<OrchidPage />} />
            <Route path="/daisy" element={<DaisyPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
