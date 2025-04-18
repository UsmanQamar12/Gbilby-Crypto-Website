import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./Header.css"; 
 

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeHeading, setActiveHeading] = useState("Home");
  const location = useLocation();

  useEffect(() => {
    const pathToHeading = {
      "/": "Home",
      "/about": "About Us",
      "/roadmap": "Roadmap",
      "/how-to-buy": "How to Buy",
      "/airdrop": "Airdrop",
      "/contact": "Contact Us",
    };

    const heading = pathToHeading[location.pathname] || "Home";
    setActiveHeading(heading);
  }, [location]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  return (
    <>
    <header className="header">
      <div className="header__container">
        {/* Logo Section */}
        <div className="header__logo">
          <img src="/logo.jpeg" alt="Logo" />
        </div>

        {/* Desktop Navigation */}
        <nav className="header__nav">
          <NavLink
            to="/"
            end
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            About Us
          </NavLink>
          <NavLink
            to="/roadmap"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Roadmap
          </NavLink>
          <NavLink
            to="/how-to-buy"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            How to Buy
          </NavLink>
          <NavLink
            to="/airdrop"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Airdrop
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Contact Us
          </NavLink>
        </nav>

        {/* Mobile Menu Button */}
        <div
          className={`header__mobile-menu ${isMobileMenuOpen ? "active" : ""}`}
          onClick={toggleMobileMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="header__mobile-nav">
            <NavLink
              to="/"
              end
              className={({ isActive }) => (isActive ? "active" : "")}
              onClick={toggleMobileMenu}
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? "active" : "")}
              onClick={toggleMobileMenu}
            >
              About Us
            </NavLink>
            <NavLink
              to="/roadmap"
              className={({ isActive }) => (isActive ? "active" : "")}
              onClick={toggleMobileMenu}
            >
              Roadmap
            </NavLink>
            <NavLink
              to="/how-to-buy"
              className={({ isActive }) => (isActive ? "active" : "")}
              onClick={toggleMobileMenu}
            >
              How to Buy
            </NavLink>
            <NavLink
              to="/airdrop"
              className={({ isActive }) => (isActive ? "active" : "")}
              onClick={toggleMobileMenu}
            >
              Airdrop
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) => (isActive ? "active" : "")}
              onClick={toggleMobileMenu}
            >
              Contact Us
            </NavLink>
          </div>
        )}
      </div>
      <div className="header__bottom">
        <small>Home - {activeHeading}</small>
        <h1>{activeHeading}</h1>{" "}
      </div>
    </header>
    
    </>
    
  );
};

export default Header;
