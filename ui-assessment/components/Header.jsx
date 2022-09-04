import React from "react";
import Image from "next/image";

function Header() {
  return (
    <div className="bg-black text-white flex items-center justify-between">
      <div className="flex items-center gap-1 md:px-10 px-2 py-2 bg-[#242425] cursor-pointer">
        <Image
          src="/assets/icons/svg/globe.svg"
          height={12}
          width={12}
          alt="whatsapp"
        />
        <p className="text-xs">EN</p>
        <span>
          <svg
            width="6"
            height="4"
            viewBox="0 0 6 4"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.36728 3.60241C3.16932 3.81671 2.83068 3.81671 2.63272 3.60241L0.311188 1.08928C0.0153625 0.769035 0.242499 0.25 0.678465 0.25L5.32154 0.25C5.7575 0.25 5.98464 0.769036 5.68881 1.08928L3.36728 3.60241Z"
              fill="white"
            />
          </svg>
        </span>
      </div>
      <p className="text-[0.62rem] text-[#ffffffcc]">
        SALES BEGIN•FREE SHIPPING ON ALL ORDERS
      </p>
      <div className="bg-[#27B03F] flex items-center gap-2 md:px-10 px-2 py-2 cursor-pointer">
        <Image
          src="/assets/icons/svg/whatsapp.svg"
          height={15}
          width={15}
          alt="whatsapp"
        />
        <p className="text-xs ">
          Chat <span className="md:inline-block hidden">with us</span>
        </p>
      </div>
    </div>
  );
}

export default Header;
