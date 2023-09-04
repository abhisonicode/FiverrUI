import React, { useContext, useEffect, useState } from "react";
import ThemeContext from "../../context/themeContext";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isAccountMenuOpen, setISAccountMenuOpen] = useState(false);
  const { setSearchFocus, setNavbarActive, isNavbarActive } =
    useContext(ThemeContext);

  const { pathname } = useLocation();
  const currentUser = null;

  // const currentUser = {
  //   id: 1,
  //   username: "Abhishek Soni",
  //   isSeller: true,
  // };
  const handleNavbar = () => {
    window.scrollY > 0 ? setNavbarActive(true) : setNavbarActive(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleNavbar);

    return () => {
      window.removeEventListener("scroll", handleNavbar);
    };
  }, []);

  return (
    <>
      <div
        className={`Navbar bg-white-500 sticky top-0 transition-all ease-in-out duration-300 z-[100] ${
          isNavbarActive || pathname !== "/"
            ? "shadow bg-white"
            : "text-white bg-green-900"
        }`}
      >
        <div className="container mx-auto h-20 flex justify-between items-center px-8 ">
          {/* Logo */}
          <Link to="/" className="flex items-end cursor-pointer">
            <div className="text-3xl font-bold">Fiverr</div>
            <div className="h-[7px] w-[7px] bg-green-500 logo-dot mb-2"></div>
          </Link>

          {/* Search Box */}

          {(isNavbarActive || pathname !== "/") && (
            <div className="flex items-stretch justify-stretch xs:w-[220px] sm:w-[450px] lg:w-[700px]">
              <input
                type="text"
                placeholder="What service are you looking for today?"
                className="px-4 py-2 w-full border rounded"
                onFocus={() => setSearchFocus(true)}
                onBlur={() => setSearchFocus(false)}
              ></input>
              <button className="p-2 bg-black w-12 flex justify-center -ml-4 rounded-r-md ">
                <img
                  width="24"
                  height="24"
                  src="https://img.icons8.com/glyph-neue/ffffff/64/search--v1.png"
                  alt="search--v1"
                />
              </button>
            </div>
          )}

          {/* Links */}
          <div className="flex gap-x-5 items-center font-bold">
            <span className="cursor-pointer"> Business Solutions </span>
            <span className="cursor-pointer">Explore</span>
            <span className="cursor-pointer">English</span>

            {!currentUser?.isSeller && (
              <span className="cursor-pointer">Become a Seller</span>
            )}
            {!currentUser && <span className="cursor-pointer">Sign in</span>}
            {!currentUser && (
              <button
                className={`border rounded	 py-1 px-3 ${
                  isNavbarActive || pathname !== "/"
                    ? "border-green-500 text-green-500"
                    : "border-white text-white"
                }`}
              >
                Join
              </button>
            )}

            {/* When User is Logged in  */}
            {currentUser && (
              <div className="flex justify-center items-center gap-x-2 relative">
                <img
                  src="https://assetsv2.fiverrcdn.com/assets/v2_photos/start-selling-new/buyer_thumbnail/x1/sunami-267bb7f3aef30a93da28c53c9b1e360d.jpg"
                  alt=""
                  className="w-8 h-8 rounded-full"
                />
                <span
                  className="cursor-pointer"
                  onClick={() => setISAccountMenuOpen(!isAccountMenuOpen)}
                >
                  {currentUser?.username}
                </span>
                {isAccountMenuOpen && (
                  <div className="options flex flex-col bg-white font-normal text-base text-zinc-500 py-3 px-5 absolute top-10 right-0 border border-zinc-200	 rounded-lg w-[200px]">
                    {currentUser?.isSeller && (
                      <>
                        <Link to="/my-gigs" className="cursor-pointer">
                          Gigs
                        </Link>
                        <Link to="/add" className="cursor-pointer">
                          Add new gig
                        </Link>
                      </>
                    )}
                    <Link to="/orders" className="cursor-pointer">
                      Orders
                    </Link>
                    <Link to="/messages" className="cursor-pointer">
                      Messages
                    </Link>
                    <span className="cursor-pointer">Logout</span>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
        {(isNavbarActive || pathname !== "/") && (
          <>
            <div className=" border-t"></div>
            <div className="container mx-auto py-3">
              <ul className=" flex justify-center items-center gap-x-6 cursor-pointer text-base">
                <li> Graphics & Design </li>
                <li> Programming & Tech </li>
                <li> Digital Marketing </li>
                <li> Video & Animation </li>
              </ul>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Navbar;
