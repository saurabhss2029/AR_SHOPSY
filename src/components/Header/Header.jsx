import React, { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import "./styles.css";
// import logo from "./logo1.png"
import Shery from "sheryjs";

const Header = () => {

  useEffect(() => {
    // Ensure Shery functions are applied after the component mounts
    Shery.makeMagnet(".project-title", {
      ease: "cubic-bezier(0.23, 1, 0.320, 1)",
      duration: 1,
    });
  });  

  const navigationLinks = [
    { label: "Home", Path: "/" },
    { label: "Products", Path: "/product" },
    { label:"WishList" ,Path:"/wishlist"},
    { label: "About", Path: "/about" },
    { label: "SignIn", Path: "/sign-in" },
    { label: "SignUp", Path: "/sign-up" },
  ];
  const [showMobileSidebar, setShowMobileSidebar] = useState(true);
  const handleItemClick = () => {
    setShowMobileSidebar(true);
  };
  return (
    <header className="z">
      {/* Mobile Menu Icon */}
      <nav>
        <div className="navtop">
          <h1>
            <Link
              to="/"
              onClick={() => showMobileSidebar && setShowMobileSidebar(false)}
              className="project-title t"
            >
            </Link>
            AR Shopsy
          </h1>
          <div
            className={`mobile-menu-icon text ${!showMobileSidebar ? "active" : ""}`}
            onClick={() => setShowMobileSidebar(!showMobileSidebar)}
          >
            {Array.from({ length: 2 + showMobileSidebar }, (_, i) => (
              <div
                key={i}
                className={
                  i === 0 ? "firstbar" : i === 1 ? "secondbar" : "lastbar"
                }
              />
            ))}
            {/* If the condition is true, only the first, second, and last div elements will be rendered. */}
          </div>
        </div>
        {/* Desktop Navigation */}
      </nav>
      <ul className={`desktop-nav ${showMobileSidebar ? "" : "show"}`}>
        {navigationLinks.map((items, key) => {
          return (
            <li key={key} onClick={handleItemClick}>
              <Link to={items.Path}>{items.label}</Link>
            </li>
          );
          /* activeStyle={{ color: "blue", textDecoration: "underline" }} */
        })}
      </ul>
    </header>
  );
};

export default Header;
