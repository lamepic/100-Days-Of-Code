import React from "react";
import HeroCard from "./HeroCard";

function Hero() {
  return (
    <>
      <div className="md:p-5">
        <div className="bg-hero w-full h-96 cover bg-right flex flex-col justify-between relative md:px-16">
          {/* <div className="h-[100%] w-[100%] opacity-[0.3] bg-black absolute top-0 left-0"></div> */}
          <div className="h-[100%] w-[100%] absolute top-0 left-0 bg-gradient-to-t md:bg-gradient-to-r from-black"></div>
          <div className="text-2xl p-6 font-semibold z-10 md:mt-5 md:text-4xl">
            <p className="text-white">Your favorite customized </p>
            <p className="text-[#FADD18]">Club Jerseys.</p>
          </div>
          <div className="flex justify-between items-end z-10 p-5">
            <div className="flex gap-2">
              <div className="w-7 h-[0.20rem] bg-[#FADD18] md:w-12"></div>
              <div className="w-7 h-[0.20rem] bg-[#3A3939]  md:w-12"></div>
              <div className="w-7 h-[0.20rem] bg-[#3A3939]  md:w-12"></div>
              <div className="w-7 h-[0.20rem] bg-[#3A3939]  md:w-12"></div>
              <div className="w-7 h-[0.20rem] bg-[#3A3939]  md:w-12"></div>
            </div>
            <div className="text-white flex items-center justify-between">
              <button className="border-2 border-r-2  p-2 px-3 text-sm">
                Shop Now
              </button>
              <div className="bg-white py-[0.78rem] px-4 cursor-pointer">
                <svg
                  width="14"
                  height="15"
                  viewBox="0 0 14 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.9999 3.57143H10.5713C10.5713 1.6 8.97129 0 6.99986 0C5.02843 0 3.42843 1.6 3.42843 3.57143H1.99986C1.21415 3.57143 0.578432 4.21429 0.578432 5L0.571289 13.5714C0.571289 14.3571 1.21415 15 1.99986 15H11.9999C12.7856 15 13.4284 14.3571 13.4284 13.5714V5C13.4284 4.21429 12.7856 3.57143 11.9999 3.57143ZM6.99986 1.42857C8.18557 1.42857 9.14272 2.38571 9.14272 3.57143H4.857C4.857 2.38571 5.81415 1.42857 6.99986 1.42857ZM6.99986 8.57143C5.02843 8.57143 3.42843 6.97143 3.42843 5H4.857C4.857 6.18571 5.81415 7.14286 6.99986 7.14286C8.18557 7.14286 9.14272 6.18571 9.14272 5H10.5713C10.5713 6.97143 8.97129 8.57143 6.99986 8.57143Z"
                    fill="#000000"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-5 grid grid-cols-2 md:grid-cols-4 gap-2 px-2">
          <HeroCard
            title="Secure Shipping"
            subtitle="on all orders"
            icon="truck.png"
          />
          <HeroCard
            title="Telephone"
            subtitle="+1 23 456 7890"
            icon="phone.png"
          />
          <HeroCard
            title="Chat Whatsapp"
            subtitle="Mon – Fri: 9:00 – 21:00  •  Sat – Sun: 9:00 – 17:00"
            icon="whatsapp.png"
          />
          <HeroCard
            title="Quality Guarantee"
            subtitle="Verified Purchase Reviews"
            icon="check-badge.png"
          />
        </div>
      </div>
      <div className="my-5">
        <img src="/assets/icons/png/rewards-badge.png" />
      </div>
    </>
  );
}

export default Hero;
