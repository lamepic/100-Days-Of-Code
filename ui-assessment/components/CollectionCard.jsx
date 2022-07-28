import React from "react";

function CollectionCard({ title, img }) {
  return (
    <div
      className={`bg-[url('/assets/images/other-collections/${img}')] h-40 md:h-52 bg-cover md:contain relative`}
    >
      <div className="flex justify-between items-center absolute bottom-0 left-0 w-full backdrop-blur-md cursor-pointer">
        <p className="pl-3 text-white">{title}</p>
        <div className="p-4 bg-[#F9DC38] ml-auto">
          <svg
            width="6"
            height="10"
            viewBox="0 0 6 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.60241 4.63272C5.81671 4.83068 5.81671 5.16931 5.60241 5.36728L1.21428 9.42086C0.894036 9.71669 0.375 9.48955 0.375 9.05358L0.375001 0.946413C0.375001 0.510447 0.894036 0.283311 1.21428 0.579136L5.60241 4.63272Z"
              fill="black"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default CollectionCard;
