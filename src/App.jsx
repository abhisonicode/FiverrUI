import React, { useState } from "react";
import Navbar from "./components/layout/Navbar";
import ThemeContext from "./Context/themeContext";
function App() {
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
      <Navbar></Navbar>
      <div className={isSearchFocused && isNavbarActive && "bg-zinc-600"}></div>
    </ThemeContext.Provider>
  );
}

export default App;
