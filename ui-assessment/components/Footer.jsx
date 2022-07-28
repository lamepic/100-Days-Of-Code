import React from "react";
import Link from "next/link";

function Footer() {
  return (
    <div className="mt-20 bg-[#F5F5F6]">
      <div className="flex flex-col justify-between md:flex-row px-8 pt-8 md:px-28 md:pt-16">
        <div>
          <h2 className="font-bold text-sm">Main Menu</h2>
          <div className="flex gap-3 flex-col mt-5">
            <a className="text-xs">
              <Link href="#">Home</Link>
            </a>
            <a className="text-xs">
              <Link href="#">T-shirts</Link>
            </a>
            <a className="text-xs">
              <Link href="#">NBA</Link>
            </a>
            <a className="text-xs">
              <Link href="#">Tracksuits</Link>
            </a>
            <a className="text-xs">
              <Link href="#">Products Delivery • 1 – 2 days</Link>
            </a>
            <a className="text-xs">
              <Link href="#">Contact</Link>
            </a>
            <a className="text-xs">
              <Link href="#">Reviews</Link>
            </a>
          </div>
        </div>

        <div className="mt-5 md:mt-0">
          <h2 className="font-bold text-sm">Secondary Menu</h2>
          <div className="flex gap-3 flex-col mt-5">
            <a className="text-xs">
              <Link href="#">Search</Link>
            </a>
            <a className="text-xs">
              <Link href="#">Privacy Policy</Link>
            </a>
            <a className="text-xs">
              <Link href="#">Shipping Policy</Link>
            </a>
            <a className="text-xs">
              <Link href="#">Returns Policy</Link>
            </a>
            <a className="text-xs">
              <Link href="#">Terms of service</Link>
            </a>
          </div>
        </div>

        <div className="mt-5 md:mt-0">
          <h2 className="font-bold text-sm">Subscribe</h2>
          <div className="flex gap-3 flex-col mt-5">
            <p className="text-xs">
              Subscribe to our mailing list to receive the latest news.
            </p>
            <div className="border-2 flex items-center bg-white mt-3">
              <input
                placeholder="Email Address"
                className="w-full h-full pl-3 text-xs p-3 focus:outline-none"
              />
              <div className="p-4 bg-[#F9DC38] cursor-pointer">
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.00571428 12L12 6L0.00571428 0L0 4.66667L8.57143 6L0 7.33333L0.00571428 12Z"
                    fill="#111112"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-5 md:mt-0">
          <h2 className="font-bold text-sm">Follow Us</h2>
          <div className="mt-4 flex gap-4 pb-4">
            <img
              src="/assets/icons/png/facebook-f.png"
              className="w-15 h-15 bg-black p-2 px-3 cursor-pointer"
            />
            <img
              src="/assets/icons/png/twitter.png"
              className="w-15 h-15 bg-black p-2 px-3 cursor-pointer"
            />
            <img
              src="/assets/icons/png/instagram.png"
              className="w-15 h-15 bg-black p-2 px-3 cursor-pointer"
            />
          </div>
        </div>
      </div>

      <div className="mt-5 flex md:items-center bottom-0 md:flex-row-reverse flex-col md:justify-between w-full md:border-t-2 p-2 md:px-28">
        <img
          src="/assets/images/payment-partners.png"
          className="w-80 mx-auto md:mx-0"
        />
        <p className="text-xs mt-7 md:mt-0 px-6 py-3 md:px-0 border-t-2 md:border-t-0">
          &copy; 2021 Jambulani • All rights reserved
        </p>
      </div>
    </div>
  );
}

export default Footer;
