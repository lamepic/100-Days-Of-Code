import React from "react";

function Shirt() {
  return (
    <>
      <div className="md:flex justify-between gap-10 md:w-[85%] w-[95%] mx-auto mt-10">
        <div className="flex-[0.5]">
          <div className="relative">
            <img src="/assets/images/product-large.jpg" />
            <div className="flex gap-2 mt-16 absolute bottom-4 right-4">
              <span className="w-4 h-4 md:w-8 md:h-8 border-[1px] grid place-items-center cursor-pointer">
                <svg
                  width="6"
                  height="10"
                  viewBox="0 0 6 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.39759 5.36728C0.18329 5.16932 0.18329 4.83069 0.397589 4.63272L4.78572 0.579139C5.10596 0.283314 5.625 0.510449 5.625 0.946415L5.625 9.05359C5.625 9.48955 5.10596 9.71669 4.78572 9.42086L0.39759 5.36728Z"
                    fill="white"
                  />
                </svg>
              </span>
              <span className="w-4 h-4 md:w-8 md:h-8 border-[0.5px] grid place-items-center cursor-pointer">
                <svg
                  width="6"
                  height="10"
                  viewBox="0 0 6 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.60241 4.63272C5.81671 4.83068 5.81671 5.16931 5.60241 5.36728L1.21428 9.42086C0.894036 9.71669 0.375 9.48955 0.375 9.05358L0.375001 0.946413C0.375001 0.510447 0.894036 0.283311 1.21428 0.579136L5.60241 4.63272Z"
                    fill="white"
                  />
                </svg>
              </span>
            </div>
          </div>

          <div className="flex mt-3 justify-between flex-shrink">
            <img src="/assets/images/product-small.jpg" className="w-15 h-15" />
            <img
              src="/assets/images/product-small.jpg"
              className="opacity-[0.4]"
            />
            <img
              src="/assets/images/product-small.jpg"
              className="opacity-[0.4]"
            />
            <img
              src="/assets/images/product-small.jpg"
              className="opacity-[0.4]"
            />
          </div>
        </div>

        <div className="flex-[0.5]">
          <h2 className="font-bold mt-5 md:mt-0 text-2xl">
            Manchester United 21-22 Home Shirt
          </h2>
          <div className="flex justify-between items-center mt-5">
            <div className="flex items-center gap-5">
              <p className="font-bold text-3xl">€30.00</p>
              <p className="text-[#EE503E] line-through text-sm">€89.95</p>
              <div className="bg-[#23C353] p-1 text-white text-xs">
                Save 67%
              </div>
            </div>
            <div className="flex items-center gap-2 p-2 border-[0.5px] mr-2">
              <span>
                <svg
                  width="12"
                  height="11"
                  viewBox="0 0 12 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.46642 9.83883L5.4657 9.83817C3.91064 8.42933 2.66051 7.29555 1.79313 6.23606C0.931485 5.18357 0.5 4.26558 0.5 3.297C0.5 1.72725 1.72771 0.5 3.3 0.5C4.19278 0.5 5.05732 0.917668 5.61947 1.5772L6 2.02366L6.38053 1.5772C6.94268 0.917668 7.80722 0.5 8.7 0.5C10.2723 0.5 11.5 1.72725 11.5 3.297C11.5 4.26559 11.0685 5.1836 10.2068 6.23694C9.33938 7.29715 8.08942 8.43225 6.53453 9.84396C6.53432 9.84415 6.53411 9.84434 6.5339 9.84453L6.00128 10.3253L5.46642 9.83883Z"
                    stroke="#393A38"
                  />
                </svg>
              </span>
              <p className="hidden md:block">Add to Favorites</p>
            </div>
          </div>
          <p className="text-[0.68rem] mt-5 md:text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque euismod lacinia aliquam. Morbi est nis, at lacus. Donec
            ornare, dui vel facilisis luctus, metus mi ttitor erat sapien
            scelerisque nunc. Pellentesque ornare elit tellus... Read More
          </p>
          <div className="mt-8 ">
            <div>
              <div className="flex justify-between items-center">
                <label className="font-bold flex-[0.2] text-xs">
                  Size <span className="text-red-400">*</span>
                </label>
                <div className="flex justify-between gap-3 flex-[0.8]">
                  <div className="flex items-center flex-[0.7]">
                    <select
                      id="countries"
                      className="border focus:outline-none block p-2 flex-[0.8] text-xs text-gray-400 w-full"
                    >
                      <option selected>Select shirt size</option>
                      <option value="L">Large</option>
                      <option value="M">Medius</option>
                      <option value="SM">Small</option>
                      <option value="XS">Extra small</option>
                    </select>
                  </div>
                  <p className="bg-[#F5F5F6] px-1 py-3 font-bold text-xs flex-[0.3] text-center cursor-pointer">
                    <span className="hidden md:inline">View</span> Size Chart
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-5">
              <div className="flex justify-between items-center">
                <label className="font-bold flex-[0.2] text-xs">Name</label>
                <div className="flex items-center flex-[0.8] border-[1px]">
                  <input
                    placeholder="What name would you want in the shirt?"
                    className="w-full h-full focus:outline-none p-2 text-xs"
                  />
                </div>
              </div>
            </div>

            <div className="mt-5">
              <div className="flex justify-between items-center">
                <label className="font-bold flex-[0.2] text-xs">
                  Number on shirt
                </label>
                <div className="flex items-center flex-[0.8] border-[1px]">
                  <input
                    placeholder="Enter a number between 0 and 99"
                    className="w-full h-full focus:outline-none p-2 text-xs"
                  />
                </div>
              </div>
            </div>

            <div className="mt-5">
              <div className="flex justify-between items-center">
                <label className="font-bold flex-[0.2] text-xs">Patch</label>
                <div className="flex items-center flex-[0.8] border-[1px]">
                  <input
                    placeholder="Select a patch"
                    className="w-full h-full focus:outline-none p-2 text-xs"
                  />
                </div>
              </div>
            </div>

            <div className="mt-5">
              <div className="flex items-center">
                <label className="font-bold flex-[0.2] text-xs">Quantity</label>
                <div className="flex items-center flex-[0.1] border-[1px]">
                  <input
                    default={1}
                    type="number"
                    className="w-full h-full focus:outline-none p-2 text-xs"
                  />
                </div>
              </div>
            </div>

            <div className="mt-10">
              <button className="font-bold flex items-center justify-between bg-[#F9DC38] w-full">
                <span className="pl-5">Add to Cart</span>
                <span className="p-4 bg-black">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6 16C4.9 16 4.01 16.9 4.01 18C4.01 19.1 4.9 20 6 20C7.1 20 8 19.1 8 18C8 16.9 7.1 16 6 16ZM0 0V2H2L5.6 9.59L4.25 12.04C4.09 12.32 4 12.65 4 13C4 14.1 4.9 15 6 15H18V13H6.42C6.28 13 6.17 12.89 6.17 12.75L6.2 12.63L7.1 11H14.55C15.3 11 15.96 10.59 16.3 9.97L19.88 3.48C19.96 3.34 20 3.17 20 3C20 2.45 19.55 2 19 2H4.21L3.27 0H0ZM16 16C14.9 16 14.01 16.9 14.01 18C14.01 19.1 14.9 20 16 20C17.1 20 18 19.1 18 18C18 16.9 17.1 16 16 16Z"
                      fill="#ffffff"
                    />
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden md:block mt-10 cursor-pointer">
        <img src="/assets/icons/png/rewards-badge.png" />
      </div>
    </>
  );
}

export default Shirt;
