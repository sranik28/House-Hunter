import React from "react";
import bannerImg from "../assets/banner/pexels-expect-best-323780.jpg";
import { Link } from "react-router-dom";
import "./Style/BannerText.css"
import "./Style/BannerImg.css"

const Banner = () => {
  return (
    <div className="relative w-full h-full overflow-hidden">
      <img className="w-full h-[90vh] object-cover kenburns-top" src={bannerImg} alt="" />
      <div className="absolute top-0 left-0 md:kenburns-top w-full h-full text-white bg-black/60">
        <div
          className="absolute text-xl text-center  md:top-56
        top-[195px]  font-bold left-2 md:left-[20%] text-focus-in"
        >
          <p className="text-xl">Communication Redefined, Contacts Refined</p>
          <p className="mt-4 text-4xl font-bold md:mt-0 lg:text-7xl md:text-5xl text-shadow ">
            {" "}
            Connect <span className="text-Primary">With</span>
          </p>
          <Link to="/">
            <div className="border-2 md:mt-4 md:text-[13px] w-1/2 sm:w-1/3 p-3 rounded-md font-bold py-5 !text-lg hover:border-spacing-2 hover:border-white text-center my-6 hover:bg-Primary border-Primary absolute left-24 md:left-0 mt-10 transition duration-500 ease-in-out">
             Explore
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
