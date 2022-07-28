import Head from "next/head";
import Image from "next/image";
import CollectionCard from "../components/CollectionCard";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import LeagueCard from "../components/LeagueCard";
import Navbar from "../components/Navbar";
import ShirtCard from "../components/ShirtCard";

export default function Home() {
  return (
    <div>
      <div className="bg-black text-white flex items-center justify-between">
        <div className="flex items-center gap-1 md:px-10 px-2 py-2 bg-[#242425]">
          <Image
            src="/assets/icons/svg/globe.svg"
            height={12}
            width={12}
            alt="whatsapp"
          />
          <p className="text-xs">EN</p>
          <span>
            <svg
              width="6"
              height="4"
              viewBox="0 0 6 4"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.36728 3.60241C3.16932 3.81671 2.83068 3.81671 2.63272 3.60241L0.311188 1.08928C0.0153625 0.769035 0.242499 0.25 0.678465 0.25L5.32154 0.25C5.7575 0.25 5.98464 0.769036 5.68881 1.08928L3.36728 3.60241Z"
                fill="white"
              />
            </svg>
          </span>
        </div>
        <p className="text-[0.62rem] text-[#ffffffcc]">
          SALES BEGIN•FREE SHIPPING ON ALL ORDERS
        </p>
        <div className="bg-[#27B03F] flex items-center gap-2 md:px-10 px-2 py-2">
          <Image
            src="/assets/icons/svg/whatsapp.svg"
            height={15}
            width={15}
            alt="whatsapp"
          />
          <p className="text-xs">
            Chat <span className="md:inline-block hidden">with us</span>
          </p>
        </div>
      </div>
      <Navbar />
      <Hero />
      <div className="md:px-16 px-5 mt-10">
        <div className="flex items-center justify-between md:text-2xl">
          <h1 className="uppercase font-semibold">Most Popular T-Shirts</h1>
          <div className="flex gap-2 mt-16">
            <span className="w-8 h-8 border-2 grid place-items-center cursor-pointer">
              <svg
                width="6"
                height="10"
                viewBox="0 0 6 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.39759 5.36728C0.18329 5.16932 0.18329 4.83069 0.397589 4.63272L4.78572 0.579139C5.10596 0.283314 5.625 0.510449 5.625 0.946415L5.625 9.05359C5.625 9.48955 5.10596 9.71669 4.78572 9.42086L0.39759 5.36728Z"
                  fill="black"
                />
              </svg>
            </span>
            <span className="w-8 h-8 border-2 grid place-items-center cursor-pointer">
              <svg
                width="6"
                height="10"
                viewBox="0 0 6 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.60241 4.63272C5.81671 4.83068 5.81671 5.16931 5.60241 5.36728L1.21428 9.42086C0.894036 9.71669 0.375 9.48955 0.375 9.05358L0.375001 0.946413C0.375001 0.510447 0.894036 0.283311 1.21428 0.579136L5.60241 4.63272Z"
                  fill="black"
                />
              </svg>
            </span>
          </div>
        </div>
        <div className="mt-5 flex overflow-x-auto gap-2 w-[100%] scrollbar-hide">
          <ShirtCard
            img="product-medium.jpg"
            title="Manchester United 21-22"
            newPrice="€30.00"
            oldPrice="€89.95"
          />
          <ShirtCard
            img="product-medium.jpg"
            title="Manchester United 21-22"
            newPrice="€30.00"
            oldPrice="€89.95"
          />
          <ShirtCard
            img="product-medium.jpg"
            title="Manchester United 21-22"
            newPrice="€30.00"
            oldPrice="€89.95"
          />
          <ShirtCard
            img="product-medium.jpg"
            title="Manchester United 21-22"
            newPrice="€30.00"
            oldPrice="€89.95"
          />
          <ShirtCard
            img="product-medium.jpg"
            title="Manchester United 21-22"
            newPrice="€30.00"
            oldPrice="€89.95"
          />
        </div>
      </div>
      <div className="md:px-16 px-5 mt-16">
        <h1 className="uppercase font-extrabold md:text-2xl">
          Country Leagues
        </h1>
        <div className="mt-10 grid md:grid-cols-5 grid-cols-2 gap-2">
          <LeagueCard title="champions league" img="champions-league.jpg" />
          <LeagueCard title="champions league" img="champions-league.jpg" />
          <LeagueCard title="champions league" img="champions-league.jpg" />
          <LeagueCard title="champions league" img="champions-league.jpg" />
          <LeagueCard title="champions league" img="champions-league.jpg" />
        </div>
      </div>
      <div className="md:px-16 px-5 mt-16">
        <h1 className="uppercase font-extrabold md:text-2xl">
          Other Collections
        </h1>
        <div className="mt-10 grid md:grid-cols-3 grid-cols-2 gap-5">
          <CollectionCard title="Kids" img="kids.jpg" />
          <CollectionCard title="Kids" img="kids.jpg" />
          <CollectionCard title="Kids" img="kids.jpg" />
          <CollectionCard title="Kids" img="kids.jpg" />
          <CollectionCard title="Kids" img="kids.jpg" />
          <CollectionCard title="Kids" img="kids.jpg" />
        </div>
      </div>

      {/* bottom cards */}
      <div className="md:px-16 px-5 mt-16">
        <div className="grid md:grid-cols-2 grid-cols-1 gap-5 h-96 md:h-72">
          {/* first card */}
          <div className="bg-[url('/assets/images/personalization.jpg')] bg-cover bg-right relative">
            <div className="w-full h-full bg-black opacity-[0.4]"></div>
            <div className="absolute bottom-0 text-white px-8">
              <p className="uppercase font-bold md:text-xl text-sm">
                personalization
              </p>
              <p className="text-[0.55rem] md:text-sm mt-2 md:mt-4">
                Put a custom print on the football shirt of your choice with our
                Personalization service.
              </p>
              <p className="text-[0.55rem] md:text-sm mt-1 md:mt-4 pb-4">
                Tell us what name, what number and we put it.{" "}
                <span className="font-bold">FREE!!!</span>
              </p>
            </div>
          </div>

          {/* second card */}
          <div className="bg-[url('/assets/images/social-networks.jpg')] bg-cover bg-right bg-no-repeat relative">
            <div className="w-full h-full bg-black opacity-[0.4]"></div>
            <div className="absolute bottom-0 text-white px-8">
              <p className="uppercase font-bold md:text-xl text-sm">
                social networks
              </p>
              <p className="text-[0.55rem] md:text-sm md:mt-4 mt-1">
                Share your shirts with us with the #CamisetasFutbolSpainnn
              </p>
              <div className="mt-4 flex gap-4 pb-4">
                <img
                  src="/assets/icons/png/facebook-f-black.png"
                  className="w-8 h-8 md:w-15 md:h-15 bg-white p-2 px-3 cursor-pointer"
                />
                <img
                  src="/assets/icons/png/twitter-black.png"
                  className="w-15 h-15 bg-white p-2 px-3 cursor-pointer"
                />
                <img
                  src="/assets/icons/png/instagram-black.png"
                  className="w-15 h-15 bg-white p-2 px-3 cursor-pointer"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
