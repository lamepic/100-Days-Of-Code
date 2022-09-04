import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <div className="md:bg-[#F9DC38]">
      <div className="md:hidden py-7 px-5 flex items-center justify-between bg-[#F5F5F6]">
        <div className="flex items-center gap-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
          <svg
            width="18"
            height="18"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M11.2907 10.3433C12.2088 9.24903 12.7616 7.83803 12.7616 6.2979C12.7616 2.81967 9.94191 5.9873e-07 6.46368 0C2.98544 1.52039e-07 0.165771 2.81967 0.165771 6.2979C0.165771 9.77614 2.98544 12.5958 6.46368 12.5958C7.83398 12.5958 9.10207 12.1582 10.1358 11.415L12.7208 14L13.8341 12.8867L11.2907 10.3433ZM11.1871 6.2979C11.1871 8.90658 9.07235 11.0213 6.46368 11.0213C3.855 11.0213 1.74025 8.90658 1.74025 6.2979C1.74025 3.68923 3.855 1.57448 6.46368 1.57448C9.07235 1.57448 11.1871 3.68923 11.1871 6.2979Z"
              fill="black"
            />
          </svg>
        </div>
        <div className="flex items-center gap-6">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6 16C4.9 16 4.01 16.9 4.01 18C4.01 19.1 4.9 20 6 20C7.1 20 8 19.1 8 18C8 16.9 7.1 16 6 16ZM0 0V2H2L5.6 9.59L4.25 12.04C4.09 12.32 4 12.65 4 13C4 14.1 4.9 15 6 15H18V13H6.42C6.28 13 6.17 12.89 6.17 12.75L6.2 12.63L7.1 11H14.55C15.3 11 15.96 10.59 16.3 9.97L19.88 3.48C19.96 3.34 20 3.17 20 3C20 2.45 19.55 2 19 2H4.21L3.27 0H0ZM16 16C14.9 16 14.01 16.9 14.01 18C14.01 19.1 14.9 20 16 20C17.1 20 18 19.1 18 18C18 16.9 17.1 16 16 16Z"
              fill="#111112"
            />
          </svg>
          <span className="flex items-center gap-1">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 3C11.66 3 13 4.34 13 6C13 7.66 11.66 9 10 9C8.34 9 7 7.66 7 6C7 4.34 8.34 3 10 3ZM10 17.2C7.5 17.2 5.29 15.92 4 13.98C4.03 11.99 8 10.9 10 10.9C11.99 10.9 15.97 11.99 16 13.98C14.71 15.92 12.5 17.2 10 17.2Z"
                fill="#111112"
              />
            </svg>
            <svg
              width="6"
              height="4"
              viewBox="0 0 6 4"
              fill="#ffffff"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.36728 3.60241C3.16932 3.81671 2.83068 3.81671 2.63272 3.60241L0.311188 1.08928C0.0153625 0.769035 0.242499 0.25 0.678465 0.25L5.32154 0.25C5.7575 0.25 5.98464 0.769036 5.68881 1.08928L3.36728 3.60241Z"
                fill="#111112"
              />
            </svg>
          </span>
        </div>
      </div>

      <div className="hidden md:block border-2 ml-28 bg-white">
        <div className="flex items-center border-b-2">
          <p className="flex items-center px-10 gap-2 flex-[0.1] text-sm cursor-pointer">
            All Categories{" "}
            <span>
              <svg
                width="6"
                height="4"
                viewBox="0 0 6 4"
                fill="#ffffff"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.36728 3.60241C3.16932 3.81671 2.83068 3.81671 2.63272 3.60241L0.311188 1.08928C0.0153625 0.769035 0.242499 0.25 0.678465 0.25L5.32154 0.25C5.7575 0.25 5.98464 0.769036 5.68881 1.08928L3.36728 3.60241Z"
                  fill="#111112"
                />
              </svg>
            </span>
          </p>
          <div className="flex items-center border-l-2 border-r-2 flex-[0.7] justify-between py-2">
            <input
              placeholder="What are you looking for?"
              className="pl-5 w-[100%] outline-none"
            />
            <div className="flex items-center mr-12">
              <button className="bg-[#F9DC38] py-2 px-3 text-sm font-bold">
                Search
              </button>
              <div className="bg-black p-[0.7rem] block cursor-pointer">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M11.2907 10.3433C12.2088 9.24903 12.7616 7.83803 12.7616 6.2979C12.7616 2.81967 9.94191 5.9873e-07 6.46368 0C2.98544 1.52039e-07 0.165771 2.81967 0.165771 6.2979C0.165771 9.77614 2.98544 12.5958 6.46368 12.5958C7.83398 12.5958 9.10207 12.1582 10.1358 11.415L12.7208 14L13.8341 12.8867L11.2907 10.3433ZM11.1871 6.2979C11.1871 8.90658 9.07235 11.0213 6.46368 11.0213C3.855 11.0213 1.74025 8.90658 1.74025 6.2979C1.74025 3.68923 3.855 1.57448 6.46368 1.57448C9.07235 1.57448 11.1871 3.68923 11.1871 6.2979Z"
                    fill="white"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className="flex-[0.2] flex items-center justify-around">
            <div className="cursor-pointer py-[0.8rem] flex[0.5]">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 16C4.9 16 4.01 16.9 4.01 18C4.01 19.1 4.9 20 6 20C7.1 20 8 19.1 8 18C8 16.9 7.1 16 6 16ZM0 0V2H2L5.6 9.59L4.25 12.04C4.09 12.32 4 12.65 4 13C4 14.1 4.9 15 6 15H18V13H6.42C6.28 13 6.17 12.89 6.17 12.75L6.2 12.63L7.1 11H14.55C15.3 11 15.96 10.59 16.3 9.97L19.88 3.48C19.96 3.34 20 3.17 20 3C20 2.45 19.55 2 19 2H4.21L3.27 0H0ZM16 16C14.9 16 14.01 16.9 14.01 18C14.01 19.1 14.9 20 16 20C17.1 20 18 19.1 18 18C18 16.9 17.1 16 16 16Z"
                  fill="#111112"
                />
              </svg>
            </div>
            <div className="border h-12"></div>
            <div className="flex items-center gap-1 cursor-pointer flex[0.5]">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 3C11.66 3 13 4.34 13 6C13 7.66 11.66 9 10 9C8.34 9 7 7.66 7 6C7 4.34 8.34 3 10 3ZM10 17.2C7.5 17.2 5.29 15.92 4 13.98C4.03 11.99 8 10.9 10 10.9C11.99 10.9 15.97 11.99 16 13.98C14.71 15.92 12.5 17.2 10 17.2Z"
                  fill="#111112"
                />
              </svg>
              <svg
                width="6"
                height="4"
                viewBox="0 0 6 4"
                fill="#ffffff"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.36728 3.60241C3.16932 3.81671 2.83068 3.81671 2.63272 3.60241L0.311188 1.08928C0.0153625 0.769035 0.242499 0.25 0.678465 0.25L5.32154 0.25C5.7575 0.25 5.98464 0.769036 5.68881 1.08928L3.36728 3.60241Z"
                  fill="#111112"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="px-10 flex items-center gap-14 text-sm">
          <p className="border-b-2 border-[#F9DC38] py-1 cursor-pointer">
            <Link href="/">Home</Link>
          </p>
          <p className="flex gap-2 items-center cursor-pointer">
            T-Shirts
            <svg
              width="6"
              height="4"
              viewBox="0 0 6 4"
              fill="#ffffff"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.36728 3.60241C3.16932 3.81671 2.83068 3.81671 2.63272 3.60241L0.311188 1.08928C0.0153625 0.769035 0.242499 0.25 0.678465 0.25L5.32154 0.25C5.7575 0.25 5.98464 0.769036 5.68881 1.08928L3.36728 3.60241Z"
                fill="#111112"
              />
            </svg>
          </p>
          <p className="flex gap-2 items-center cursor-pointer">
            NBA{" "}
            <svg
              width="6"
              height="4"
              viewBox="0 0 6 4"
              fill="#ffffff"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.36728 3.60241C3.16932 3.81671 2.83068 3.81671 2.63272 3.60241L0.311188 1.08928C0.0153625 0.769035 0.242499 0.25 0.678465 0.25L5.32154 0.25C5.7575 0.25 5.98464 0.769036 5.68881 1.08928L3.36728 3.60241Z"
                fill="#111112"
              />
            </svg>
          </p>
          <p className="flex gap-2 items-center cursor-pointer">
            Tracksuits{" "}
            <svg
              width="6"
              height="4"
              viewBox="0 0 6 4"
              fill="#ffffff"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.36728 3.60241C3.16932 3.81671 2.83068 3.81671 2.63272 3.60241L0.311188 1.08928C0.0153625 0.769035 0.242499 0.25 0.678465 0.25L5.32154 0.25C5.7575 0.25 5.98464 0.769036 5.68881 1.08928L3.36728 3.60241Z"
                fill="#111112"
              />
            </svg>
          </p>
          <p className="cursor-pointer">Product Delivery • 1 - 2 days</p>
          <p className="cursor-pointer">Contact</p>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
