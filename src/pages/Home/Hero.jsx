import React from "react";

const Hero = () => {
  return (
    <div className="text-white bg-blue-900">
      <div className="container py-10 pb-16 md:pt-[100px] md:pb-[120px] grid md:grid-cols-2 gap-5">
        <div className="flex flex-col gap-5 md:gap-10 ">
          <h1 className="text-3xl md:text-4xl">COVID-19 LIVE MONITORING</h1>
          <p className="text-gray-300">
            Coronavirus disease is an infectious illness caused by the severe
            acute respiratory syndrome coronavirus 2 (SARS-CoV-2). The first
            known case was reported in November 2019 in Wuhan, Hubei province,
            China.
          </p>
          <div className="flex gap-5">
            <button className="hero-btn hover:brightness-75">
              How to Protect Yourself
            </button>
            <button className="bg-transparent border border-white hero-btn hover:bg-white hover:text-black">
              Find a Doctor
            </button>
          </div>
        </div>
        <div className="flex justify-center">
          <img src="hero.png" className="w-[300px] md:h-[250px]" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
