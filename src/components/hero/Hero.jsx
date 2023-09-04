import React from "react";

const Hero = () => {
  return (
    <>
      <div id="hero" className="bg-green-900">
        <div className="container mx-auto flex flex-row items-center px-6 md:px-16 max-h-[750px] h-[100vh] -mt-16">
          {/* ---------------------------------
            Left Section
        --------------------------------- */}
          <div className="basis-1/2 flex flex-col gap-y-7">
            <h1 className="text-white font-bold text-6xl">
              Find the right{" "}
              <span className="font-normal italic">freelance</span> service,
              right away
            </h1>
            <div>
              <label
                htmlFor="search-services"
                className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
              >
                Search
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-white-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                </div>
                <input
                  type="search"
                  id="search-services"
                  className="block w-full p-4 pl-10 text-base text-gray-900 border focus:outline-none  rounded-lg bg-white placeholder-gray-400 "
                  placeholder="Search for any service..."
                />

                <button
                  type="submit"
                  className="absolute top-0 right-0 h-full p-2.5 px-8 text-base font-medium text-white bg-[#1dbf73] hover:bg-[#19a463] focus:outline-none rounded-r-lg"
                >
                  Search
                </button>
              </div>
            </div>
            <div className="flex flex-wrap items-center text-white">
              <span className="mr-4">Popular:</span>
              <ul className="flex flex-wrap gap-x-4">
                <li className="font-bold p-1 px-4 text-sm border rounded-full cursor-pointer hover:bg-white hover:text-gray-800">
                  Website Design
                </li>
                <li className="font-bold p-1 px-4 text-sm border rounded-full cursor-pointer hover:bg-white hover:text-gray-800">
                  WordPress
                </li>
                <li className="font-bold p-1 px-4 text-sm border rounded-full cursor-pointer hover:bg-white hover:text-gray-800">
                  Logo Design
                </li>
                <li className="font-bold p-1 px-4 text-sm border rounded-full cursor-pointer hover:bg-white hover:text-gray-800">
                  AI Services
                </li>
              </ul>
            </div>
          </div>

          {/* ---------------------------------
            Right Section
        --------------------------------- */}
          <div className="basis-1/2 flex flex-col gap-y-5 h-full justify-end ">
            <img
              className=" "
              src={
                "https://i.ibb.co/XY2ZwF1/Screenshot-39-removebg-preview.png"
              }
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
