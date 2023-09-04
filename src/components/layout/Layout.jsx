import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../footer/Footer";
import ThemeContext from "../../context/themeContext";
import Navbar from "../navbar/Navbar";

const Layout = () => {
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [isNavbarActive, setIsNavbarActive] = useState(false);

  const setSearchFocus = (newValue) => {
    setIsSearchFocused(newValue);
  };

  const setNavbarActive = (newValue) => {
    setIsNavbarActive(newValue);
  };
  return (
    <ThemeContext.Provider
      value={{
        isSearchFocused,
        isNavbarActive,
        setSearchFocus,
        setNavbarActive,
      }}
    >
      <Navbar />
      <div className={isSearchFocused && isNavbarActive ? "bg-zinc-600" : ""}>
        <Outlet />
      </div>
      <Footer />
    </ThemeContext.Provider>
  );
};

export default Layout;
