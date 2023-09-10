import React from "react";

const Orders = () => {
  const currentUser = {
    id: 1,
    username: "Abhishek Soni",
    isSeller: true,
  };

  return (
    <div className="container mx-auto md:py-20 px-16">
      <div className="flex justify-between mb-6">
        <h1 className="font-bold text-2xl">Orders</h1>
      </div>

      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500">
          <thead className="text-xs py-3 text-white uppercase bg-neutral-500">
            <tr>
              <th scope="col" className="px-6 py-3">
                Image
              </th>
              <th scope="col" className="px-6 py-3">
                Title
              </th>
              <th scope="col" className="px-6 py-3">
                Price
              </th>
              <th scope="col" className="px-6 py-3">
                {currentUser?.isSeller ? "Buyer" : "Seller"}
              </th>
              <th scope="col" className="px-6 py-3">
                Contact
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b even:bg-gray-100 font-bold">
              <th
                scope="row"
                className="px-6 py-4 font-medium whitespace-nowrap"
              >
                <img
                  className="max-w-[100px] h-auto rounded"
                  src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/135752833/original/1b60d6ffc5c738376f0c6baadcd43e78b9d23830/do-a-minimalistic-wedding-logo.png"
                  alt=""
                />
              </th>
              <td className="px-6 py-4">Create Awesome Website</td>
              <td className="px-6 py-4">$44</td>
              <td className="px-6 py-4">Anna Bell</td>
              <td className="px-6 py-4">
                <svg
                  className="w-9 h-9 cursor-pointer"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    stroke="#0195e4"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10 9H17M10 13H17M7 9H7.01M7 13H7.01M21 20L17.6757 18.3378C17.4237 18.2118 17.2977 18.1488 17.1656 18.1044C17.0484 18.065 16.9277 18.0365 16.8052 18.0193C16.6672 18 16.5263 18 16.2446 18H6.2C5.07989 18 4.51984 18 4.09202 17.782C3.71569 17.5903 3.40973 17.2843 3.21799 16.908C3 16.4802 3 15.9201 3 14.8V7.2C3 6.07989 3 5.51984 3.21799 5.09202C3.40973 4.71569 3.71569 4.40973 4.09202 4.21799C4.51984 4 5.0799 4 6.2 4H17.8C18.9201 4 19.4802 4 19.908 4.21799C20.2843 4.40973 20.5903 4.71569 20.782 5.09202C21 5.51984 21 6.0799 21 7.2V20Z"
                  />
                </svg>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;
