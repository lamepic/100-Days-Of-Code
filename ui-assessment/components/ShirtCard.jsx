import Link from "next/link";
import React from "react";

function ShirtCard({ title, subtitle, oldPrice, newPrice, img }) {
  return (
    <div className="w-60 flex-shrink-0">
      <div>
        <img src={`/assets/images/${img}`} className="h-full contain w-full" />
      </div>
      <Link href="/shirt">
        <div className="p-4 border-2 cursor-pointer">
          <p className="font-light text-sm">{title}</p>
          {subtitle ? <p>{subtitle}</p> : <br />}
          <div className="flex gap-3 mt-2">
            <p className="font-semibold">{newPrice}</p>
            {oldPrice && (
              <p className="line-through text-red-500 text-sm">{oldPrice}</p>
            )}
          </div>
        </div>
      </Link>
    </div>
  );
}

export default ShirtCard;
