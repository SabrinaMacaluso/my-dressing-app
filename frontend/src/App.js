// srcdevelop/App.js
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Dressing from "./pages/Dressing";
import HairSalon from "./pages/HairSalon";
import MakeupSalon from "./pages/MakeupSalon";
import Shopping from "./pages/Shopping";

import "./App.css";

function App() {
  return (
    <Router>
      <nav className="header">
        <Link className="menu-btn" to="/">Home</Link>
        <Link className="menu-btn" to="/dressing">Dressing</Link>
        <Link className="menu-btn" to="/hair-salon">Hair Salon</Link>
        <Link className="menu-btn" to="/makeup-salon">Make Up Salon</Link>
        <Link className="menu-btn" to="/shopping">Shopping</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dressing" element={<Dressing />} />
        <Route path="/hair-salon" element={<HairSalon />} />
        <Route path="/makeup-salon" element={<MakeupSalon />} />
        <Route path="/shopping" element={<Shopping />} />
      </Routes>
    </Router>
  );
}

export default App;
