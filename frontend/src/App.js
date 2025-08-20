// srcdevelop/App.js
import { BrowserRouter as Router, Routes, Route, Link, NavLink } from "react-router-dom";
import Home from "./pages/Home";
import Dressing from "./pages/Dressing";
import HairSalon from "./pages/HairSalon";
import MakeupSalon from "./pages/MakeupSalon";
import Shopping from "./pages/Shopping";

import "./App.css";

function App() {
  return (
    <Router>
      <header className="header">
        <div className="logo">💖 My Doll World</div>

        <nav className="nav-menu">
          <NavLink to="/" className="menu-btn">Home</NavLink>
          <NavLink to="/dressing" className="menu-btn">Dressing</NavLink>
          <NavLink to="/hair-salon" className="menu-btn">Hair Salon</NavLink>
          <NavLink to="/makeup-salon" className="menu-btn">Make Up</NavLink>
          <NavLink to="/shopping" className="menu-btn">Shopping</NavLink>
        </nav>
      </header>


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
