import React from "react";

const Add = () => {
  return (
    <div className="container mx-auto md:py-20 px-16">
      <div className="flex justify-between mb-6">
        <h1 className="font-bold text-2xl">Add New Gig</h1>
      </div>

      <form className="grid grid-cols-2 gap-x-8">
        {/* Left */}
        <div>
          <div className="mb-6">
            <label
              htmlFor="title"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Title
            </label>
            <input
              type="title"
              id="title"
              className="bg-gray-50 border border-gray-300 text-sm rounded-lg block w-full p-2.5 focus:outline-none"
              placeholder="eg. I will create a super powerfull react application..."
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="category"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Category
            </label>
            <select
              id="category"
              className="bg-gray-50 border text-sm rounded-lg cursor-pointer text-gray-900 focus:outline-none border-gray-300 placeholder-gray-400 block w-full p-2.5"
            >
              <option value="FR">Best Selling</option>
              <option value="DE">Newest</option>
            </select>
          </div>
          <div className="mb-6">
            <label
              htmlFor="cover-image"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Cover Image
            </label>
            <input
              className="bg-gray-50 border border-gray-300 text-sm rounded-lg block w-full p-2.5 focus:outline-none"
              aria-describedby="cover-image"
              id="cover-image"
              type="file"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="upload-images"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Upload Images
            </label>
            <input
              className="bg-gray-50 border border-gray-300 text-sm rounded-lg block w-full p-2.5 focus:outline-none"
              aria-describedby="upload-images"
              id="upload-images"
              type="file"
              multiple
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="description"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Description
            </label>
            <textarea
              id="description"
              className="bg-gray-50 border border-gray-300 text-sm rounded-lg block w-full p-2.5 focus:outline-none min-h-[300px]"
              required=""
            />
          </div>
          <div className="flex items-start mb-6">
            <div className="flex items-center h-5">
              <input
                id="agreeTerms"
                type="checkbox"
                defaultValue=""
                className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-green-300 "
              />
            </div>
            <label
              htmlFor="agreeTerms"
              className="ml-2 text-sm font-medium text-gray-900 cursor-pointer"
            >
              Remember me
            </label>
          </div>
          <button className="text-white bg-green-500 hover:bg-green-500 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">
            Create Gig
          </button>
        </div>

        {/* Right */}
        <div>
          <div className="mb-6">
            <label
              htmlFor="service-title"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Service Title
            </label>
            <input
              type="service-title"
              id="service-title"
              className="bg-gray-50 border border-gray-300 text-sm rounded-lg block w-full p-2.5 focus:outline-none"
              placeholder="eg. Powerfull react application..."
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="short-description"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Short Description
            </label>
            <textarea
              id="short-description"
              className="bg-gray-50 border border-gray-300 text-sm rounded-lg block w-full p-2.5 focus:outline-none min-h-[200px]"
              required=""
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="price"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Price
            </label>
            <input
              type="number"
              id="price"
              className="bg-gray-50 border border-gray-300 text-sm rounded-lg block w-full p-2.5 focus:outline-none"
              placeholder="Enter Price (eg. 10)"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="delivery-time"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Delivery Time
            </label>
            <input
              type="number"
              id="delivery-time"
              className="bg-gray-50 border border-gray-300 text-sm rounded-lg block w-full p-2.5 focus:outline-none"
              placeholder="Enter number (eg. 3)"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="revisions"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Number of Revisions
            </label>
            <input
              type="number"
              id="revisionsx"
              className="bg-gray-50 border border-gray-300 text-sm rounded-lg block w-full p-2.5 focus:outline-none"
              placeholder="Enter number (eg. 1)"
            />
          </div>
          <div className="mb-6">
            <label className="block mb-2 text-sm font-medium text-gray-900 ">
              Add Features
            </label>
            <div className="flex flex-col gap-y-3">
              <input
                type="text"
                className="bg-gray-50 border border-gray-300 text-sm rounded-lg block w-full p-2.5 focus:outline-none"
                placeholder="eg. Powerfull react application..."
              />
              <input
                type="text"
                className="bg-gray-50 border border-gray-300 text-sm rounded-lg block w-full p-2.5 focus:outline-none"
                placeholder="eg. Powerfull react application..."
              />
              <input
                type="text"
                className="bg-gray-50 border border-gray-300 text-sm rounded-lg block w-full p-2.5 focus:outline-none"
                placeholder="eg. Powerfull react application..."
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Add;
