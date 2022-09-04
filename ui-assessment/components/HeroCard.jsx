import React from "react";

function HeroCard({ icon, title, subtitle }) {
  return (
    <div className="overflow-hidden bg-[#FEFAE1] p-8 pt-[1.5rem]">
      <div className="relative flex h-10 w-10 items-center justify-center bg-[#F8D307]">
        <div className="absolute right-full h-10 w-10 origin-bottom-right skew-y-[40deg] transform bg-[#f8d40779]"></div>
        <div className="absolute bottom-full h-10 w-10 origin-bottom-right skew-x-[50deg] transform bg-[#f8d4073a]"></div>
        <img src={`/assets/icons/png/${icon}`} width={20} height={20} />
      </div>
      <div>
        <h1 className="mt-5 text-sm md:text-xl font-black">{title}</h1>
        <p className="mt-2 text-xs md:text-sm">{subtitle}</p>
      </div>
    </div>
  );
}

export default HeroCard;
