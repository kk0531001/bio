import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)}>
        Menu
      </button>
      {menuOpen && (
        <ul className="dropdown-menu">
          <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
          <li><Link to="/sustainable-resource" onClick={() => setMenuOpen(false)}>Sustainable Resource</Link></li>
          <li><Link to="/conservation-management" onClick={() => setMenuOpen(false)}>Conservation Management</Link></li>
          <li><Link to="/forest-conservation" onClick={() => setMenuOpen(false)}>Forest Conservation</Link></li>
          <li><Link to="/fish-conservation" onClick={() => setMenuOpen(false)}>Fish Conservation</Link></li>
          <li><Link to="/endangered-species" onClick={() => setMenuOpen(false)}>Endangered Species</Link></li>
          <li><Link to="/conservation-methods" onClick={() => setMenuOpen(false)}>Conservation Methods</Link></li>
          <li><Link to="/conservation-reasons" onClick={() => setMenuOpen(false)}>Conservation Reasons</Link></li>
          <li><Link to="/reproduction-tech" onClick={() => setMenuOpen(false)}>Reproduction Tech</Link></li>
          <li><Link to="/genetic-variation" onClick={() => setMenuOpen(false)}>Genetic Variation</Link></li>
          <li className="settings-link"><Link to="/settings" onClick={() => setMenuOpen(false)}>Settings</Link></li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;