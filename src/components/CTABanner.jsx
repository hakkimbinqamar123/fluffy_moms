import React from "react";
import ctaImage from "../assets/cta.png";
import footprint from "../assets/footprint.png";
import { Link } from "react-router-dom";

const CTABanner = () => {
  return (
    <section className="bg-[#FFF7E8] py-20 px-4 sm:px-8 md:px-20">
      <div className="container mx-auto">

        {/* Outer yellow rounded banner */}
        <div className="relative bg-[#F4F4A4] rounded-[30px] px-6 md:px-16 py-10 flex flex-col md:flex-row items-center gap-10 shadow-sm">

          {/* LEFT IMAGE */}
          <div className="relative md:absolute md:-left-10 md:top-1/2 md:-translate-y-[60%]">
            <img
              src={ctaImage}
              alt="Happy pet"
              className="w-[240px] md:w-[290px] lg:w-[330px] 
               h-[260px] md:h-[300px] lg:h-[340px] 
               object-cover md:object-contain md:object-bottom"
            />
          </div>

          {/* TEXT + BUTTON */}
          <div className="md:ml-[260px] lg:ml-[300px] flex flex-col items-center md:items-start text-center md:text-left">

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 leading-snug">
              Where Every Pet Feels Loved,<br />
              Pampered, and Cared For
            </h2>

            <Link to={"/book-appointment"}>
              <button className="mt-6 bg-[#F4C430] text-white px-8 py-3 rounded font-semibold shadow hover:bg-yellow-400 transition flex items-center gap-2">
                Book a Grooming Session
              </button>
            </Link>
          </div>

          {/* FOOTPRINTS */}

          {/* First footprint - moved up on mobile */}
          <img
            src={footprint}
            className="
              absolute 
              bottom-20 md:bottom-6 
              right-10 md:right-40 
              w-10 
              rotate-[15deg]
              opacity-100 md:opacity-70
            "
            style={{ filter: "brightness(0) invert(1)" }}
            alt="paw"
          />

          {/* Second footprint - moved up on mobile */}
          <img
            src={footprint}
            className="
              absolute 
              bottom-28 md:bottom-10 
              right-24 md:right-60 
              w-12 
              rotate-[10deg]
              opacity-70 md:opacity-80
            "
            style={{ filter: "brightness(0) invert(1)" }}
            alt="paw"
          />

        </div>
      </div>
    </section>
  );
};

export default CTABanner;
