import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  const closeMenu = () => setClick(false);
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            The Popular <i className="fas fa-book fa-lg"></i>
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMenu}>
                Home
              </Link>
              <li className="nav-item">
                <Link
                  to="/categories"
                  className="nav-links"
                  onClick={closeMenu}
                >
                  Categories
                </Link>
                <li className="nav-item">
                  <Link to="/contact" className="nav-links" onClick={closeMenu}>
                    Contact
                  </Link>
                  <li className="nav-item">
                    <Link to="/about" className="nav-links" onClick={closeMenu}>
                      About
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/login" className="nav-links" onClick={closeMenu}>
                      Login
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/sign-up" className="nav-links" onClick={closeMenu}>
                      Sign-up
                    </Link>
                  </li>
                </li>
              </li>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
