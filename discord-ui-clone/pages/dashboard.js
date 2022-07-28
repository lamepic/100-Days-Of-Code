import Image from "next/image";
import React from "react";
import { useAuth } from "../context/AuthContext";

function dashboard() {
  const { user } = useAuth();

  console.log(user);

  return (
    <div className="h-screen flex">
      <div className="flex-[0.3] flex h-[100%]">
        <div className="bg-[#202225] flex-[0.2] flex flex-col items-center">
          <span className="mt-5">
            <svg
              aria-hidden="false"
              viewBox="0 0 28 20"
              className="bg-[#404eed] w-12 h-12 text-white rounded-2xl p-2"
            >
              <path
                fill="currentColor"
                d="M20.6644 20C20.6644 20 19.8014 18.9762 19.0822 18.0714C22.2226 17.1905 23.4212 15.2381 23.4212 15.2381C22.4384 15.881 21.5034 16.3334 20.6644 16.6429C19.4658 17.1429 18.3151 17.4762 17.1884 17.6667C14.887 18.0953 12.7774 17.9762 10.9795 17.6429C9.61301 17.381 8.43836 17 7.45548 16.6191C6.90411 16.4048 6.30479 16.1429 5.70548 15.8096C5.63356 15.7619 5.56164 15.7381 5.48973 15.6905C5.44178 15.6667 5.41781 15.6429 5.39384 15.6191C4.96233 15.381 4.7226 15.2143 4.7226 15.2143C4.7226 15.2143 5.87329 17.1191 8.91781 18.0238C8.19863 18.9286 7.31164 20 7.31164 20C2.0137 19.8333 0 16.381 0 16.381C0 8.7144 3.45205 2.50017 3.45205 2.50017C6.90411 -0.07123 10.1884 0.000197861 10.1884 0.000197861L10.4281 0.285909C6.11301 1.52399 4.12329 3.40493 4.12329 3.40493C4.12329 3.40493 4.65068 3.11921 5.53767 2.71446C8.10274 1.59542 10.1404 1.2859 10.9795 1.21447C11.1233 1.19066 11.2432 1.16685 11.387 1.16685C12.8493 0.976379 14.5034 0.92876 16.2295 1.11923C18.5068 1.38114 20.9521 2.0478 23.4452 3.40493C23.4452 3.40493 21.5514 1.61923 17.476 0.381146L17.8116 0.000197861C17.8116 0.000197861 21.0959 -0.07123 24.5479 2.50017C24.5479 2.50017 28 8.7144 28 16.381C28 16.381 25.9623 19.8333 20.6644 20ZM9.51712 8.88106C8.15068 8.88106 7.07192 10.0715 7.07192 11.5239C7.07192 12.9763 8.17466 14.1667 9.51712 14.1667C10.8836 14.1667 11.9623 12.9763 11.9623 11.5239C11.9863 10.0715 10.8836 8.88106 9.51712 8.88106ZM18.2671 8.88106C16.9007 8.88106 15.8219 10.0715 15.8219 11.5239C15.8219 12.9763 16.9247 14.1667 18.2671 14.1667C19.6336 14.1667 20.7123 12.9763 20.7123 11.5239C20.7123 10.0715 19.6336 8.88106 18.2671 8.88106Z"
              ></path>
            </svg>{" "}
          </span>
          <span className="mt-5">
            <svg
              x="0"
              y="0"
              aria-hidden="false"
              viewBox="0 0 18 18"
              className="bg-[#36393f] w-12 h-12 rounded-full p-2 text-[#3ba55d]"
            >
              <polygon
                fillRule="nonzero"
                fill="currentColor"
                points="15 10 10 10 10 15 8 15 8 10 3 10 3 8 8 8 8 3 10 3 10 8 15 8"
              ></polygon>
            </svg>
          </span>
        </div>
        <div className="flex-[0.8] bg-[#2f3136]"></div>
      </div>
      <div className="flex-[0.8] flex flex-col h-[100%]">
        <div className="bg-[#36393f] flex-[0.1] border-b border-black"></div>
        <div className="bg-[#36393f] flex-[0.9]"></div>
      </div>
    </div>
  );
}

export default dashboard;
