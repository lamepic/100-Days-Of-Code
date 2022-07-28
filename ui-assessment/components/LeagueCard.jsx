import React from "react";

function LeagueCard({ img, title }) {
  return (
    <div>
      <img src={`/assets/images/country-leagues/${img}`} />
      <p className="font-bold capitalize mt-3 text-sm">{title}</p>
    </div>
  );
}

export default LeagueCard;
