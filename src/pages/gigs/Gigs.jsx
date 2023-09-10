import React from "react";
import { gigs } from "../../data";
import GigCard from "../../components/cards/GigCard";

const Gigs = () => {
  return (
    <div className="container mx-auto py-12 px-16">
      {/* BreadCrumb */}
      <div className="flex items-center gap-x-3 mb-4">
        <img
          src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/search_perseus/home-breadcrumb.2ba1681.svg"
          alt=""
        />
        /<span> Graphics & Design</span>
      </div>

      <h1 className="text-3xl font-bold mb-3">E-Commerce SEO</h1>
      <div className="text-gray-600 mb-4">
        Get your products discovered by enhancing your storefronts and listings
        with E-Commerce SEO services.
      </div>

      {/* Filter Section */}
      <div className="grid grid-cols-2 mb-8">
        <div className="flex items-center justify-start gap-x-5">
          <span>Budget</span>
          <input
            type="text"
            id="minBudget"
            className="block p-3 pl-10 text-base text-gray-900 border focus:outline-none border-gray-200 rounded-lg bg-white placeholder-gray-400 "
            placeholder="min"
          />
          <input
            type="text"
            id="maxBudget"
            className="block p-3 pl-10 text-base text-gray-900 border focus:outline-none border-gray-200 rounded-lg bg-white placeholder-gray-400 "
            placeholder="max"
          />
          <button className="text-white bg-[#1dbf73] hover:bg-[#19a463] px-9 py-3 rounded-lg">
            Apply
          </button>
        </div>
        <div className="flex items-center justify-end gap-x-4">
          <span>Sort by</span>
          <select
            id="gig-sorting"
            className="bg-gray-50 border text-sm rounded-lg block p-3 cursor-pointer text-gray-900 focus:outline-none border-gray-300 placeholder-gray-400 "
          >
            <option value="FR">Best Selling</option>
            <option value="DE">Newest</option>
          </select>
        </div>
      </div>

      {/* Gig Cards */}
      <div className="grid grid-cols-4 gap-8">
        {gigs.map((gig) => {
          return <GigCard key={gig.id} gig={gig}></GigCard>;
        })}
      </div>
    </div>
  );
};

export default Gigs;
