import React from "react";

function HeroCard({ icon, title, subtitle }) {
  return (
    <div className="h-28 bg-[#FEFAE1] p-2">
      <div>
        <span className="bg-[#F8D307] inline-block p-2">
          <img src={`/assets/icons/png/${icon}`} width={20} height={20} />
        </span>
        <p className="font-semibold text-sm">{title}</p>
        <p className="text-xs">{subtitle}</p>
      </div>
    </div>
  );
}

export default HeroCard;
