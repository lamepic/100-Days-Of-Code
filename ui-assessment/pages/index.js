import Head from "next/head";
import Image from "next/image";
import CollectionCard from "../components/CollectionCard";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import LeagueCard from "../components/LeagueCard";
import Navbar from "../components/Navbar";
import ShirtCard from "../components/ShirtCard";
import { shirtData, leagueData, collectionData } from "../lib/data";

export default function Home() {
  return (
    <div>
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
          {shirtData.map((shirt, idx) => {
            const { img, newPrice, oldPrice, title, subtitle } = shirt;
            return (
              <ShirtCard
                img={img}
                title={title}
                newPrice={newPrice}
                oldPrice={oldPrice}
                subtitle={subtitle}
                key={idx}
              />
            );
          })}
        </div>
      </div>
      <div className="md:px-16 px-5 mt-16">
        <h1 className="uppercase font-extrabold md:text-2xl">
          Country Leagues
        </h1>
        <div className="mt-10 grid md:grid-cols-5 grid-cols-2 gap-2 gap-y-4">
          {leagueData.map((league, idx) => {
            const { title, img } = league;
            return <LeagueCard title={title} img={img} key={idx} />;
          })}
        </div>
      </div>
      <div className="md:px-16 px-5 mt-16">
        <h1 className="uppercase font-extrabold md:text-2xl">
          Other Collections
        </h1>
        <div className="mt-10 grid md:grid-cols-3 grid-cols-2 gap-5">
          {collectionData.map((collection, idx) => {
            const { title, img } = collection;
            return <CollectionCard title={title} img={img} key={img} />;
          })}
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
    </div>
  );
}
