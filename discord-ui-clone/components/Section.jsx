import Image from "next/image";
import React from "react";

function Section({ title, subtitle, img, bg, dir }) {
  return (
    <div className={`flex items-center justify-between px-16 ${bg} ${dir}`}>
      <div>
        <Image src={img} alt="section image" height={700} width={700} />
      </div>
      <div className="w-[30%]">
        <h2 className="text-5xl font-semibold whitespace-pre-wrap leading-normal">
          {title}
        </h2>
        <p className="text-xl mt-5 leading-8">{subtitle}</p>
      </div>
    </div>
  );
}

export default Section;
