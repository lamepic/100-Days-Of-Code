import React from "react";

function ShirtCard({ title, subtitle, oldPrice, newPrice, img }) {
  return (
    <div className="w-60 flex-shrink-0">
      <div className="border-2">
        <img src={`/assets/images/${img}`} className="h-full contain w-full" />
      </div>
      <div className="p-4">
        <p className="font-light text-sm">{title}</p>
        {subtitle && <p>{subtitle}</p>}
        <div className="flex gap-3 mt-2">
          <p className="font-semibold">{newPrice}</p>
          {oldPrice && (
            <p className="line-through text-red-500 text-sm">{oldPrice}</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default ShirtCard;
