import React from "react";
import { Link } from "react-router-dom";

const GigCard = ({ gig }) => {
  return (
    <>
      <div className="overflow-hidden border rounded-lg cursor-pointer shadow-lg flex flex-col justify-between">
        <Link to="/gig/:id">
          <img src={gig.img} className="object-cover mr-0" alt={gig.cat} />
        </Link>
        <Link to="/gig/:id">
          <div className="flex flex-col gap-y-2 py-3 px-3 text-gray-700 bg-white">
            <div className="flex justify-start items-center gap-x-3 ">
              <img
                src={gig.pp}
                alt=""
                className="w-6 h-6 rounded-full object-cover"
              />
              <div className="font-bold">{gig.username}</div>
            </div>
            <span>{gig.desc}</span>
            <div className="font-bold">
              ⭐ 5.0 <span className="text-gray-600 font-normal">(34)</span>
            </div>
            <span className="font-bold text-base">From $100</span>
          </div>
        </Link>
      </div>
    </>
  );
};

export default GigCard;
