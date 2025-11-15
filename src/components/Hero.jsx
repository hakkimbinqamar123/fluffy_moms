import React from "react";
import mainCat from "../assets/images/hero/main-cat.png";
import peopleWithPets from "../assets/images/hero/people-with-pets.png";
import petsOutdoors from "../assets/images/hero/pets-outdoors.png";
import dogPortrait from "../assets/images/hero/dog-portrait.png";

const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="grid lg:grid-cols-2 w-full">

        {/* LEFT SIDE */}
        <div className="bg-[#F5EFE0] relative px-10 md:px-16 lg:px-20 py-20 lg:py-28 min-h-[650px] flex items-center">

          {/* Large Paw Print */}
          <div className="absolute top-10 left-10 opacity-20">
            <svg width="95" height="95" viewBox="0 0 90 90" fill="none">
              <ellipse cx="45" cy="56" rx="16" ry="20" fill="#D4C5A9" />
              <ellipse cx="32" cy="32" rx="9" ry="11" fill="#D4C5A9" />
              <ellipse cx="58" cy="32" rx="9" ry="11" fill="#D4C5A9" />
              <ellipse cx="20" cy="43" rx="7" ry="9" fill="#D4C5A9" />
              <ellipse cx="70" cy="43" rx="7" ry="9" fill="#D4C5A9" />
            </svg>
          </div>

          {/* Small Paw */}
          <div className="absolute bottom-36 right-14 opacity-20">
            <svg width="65" height="65" viewBox="0 0 60 60" fill="none">
              <ellipse cx="30" cy="37" rx="12" ry="15" fill="#D4C5A9" />
              <ellipse cx="20" cy="20" rx="6" ry="8" fill="#D4C5A9" />
              <ellipse cx="40" cy="20" rx="6" ry="8" fill="#D4C5A9" />
              <ellipse cx="13" cy="28" rx="5" ry="6" fill="#D4C5A9" />
              <ellipse cx="47" cy="28" rx="5" ry="6" fill="#D4C5A9" />
            </svg>
          </div>

          {/* TEXT COPY */}
          <div className="relative z-10 max-w-xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-[1.1] mb-6">
              Where Every Pet Feels <br /> Loved & Pampered
            </h1>

            <p className="text-gray-700 text-base md:text-lg mb-8 leading-relaxed max-w-md">
              At Fluffy Moon, we provide top-notch grooming in a safe, fun, and caring environment. Our mission is to make every pet feel relaxed, happy, and looking their best.
            </p>

            <button className="bg-[#F4C430] text-black px-10 py-4 rounded-full font-semibold text-base hover:bg-[#E5B520] transition-all shadow-md hover:shadow-lg">
              Book a Grooming Session
            </button>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="relative min-h-[650px]">

          {/* MAIN CAT */}
          <img
            src={mainCat}
            alt="Cat"
            className="w-full h-full object-cover"
          />

          {/* TOP OVERLAP IMAGE */}
          <div className="absolute top-8 left-[-12%] lg:left-[-18%] z-30">
            <div className="w-40 h-28 md:w-48 md:h-32 rounded-2xl overflow-hidden shadow-xl border-4 border-white bg-white">
              <img
                src={peopleWithPets}
                alt="People with pets"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* BOTTOM LEFT OVERLAP */}
          <div className="absolute bottom-14 left-[-14%] lg:left-[-20%] z-30">
            <div className="relative">
              <div className="absolute -bottom-5 -right-5 w-28 h-28 bg-[#E8D5B8] rounded-full -z-10"></div>

              <div className="w-44 h-32 md:w-52 md:h-36 rounded-2xl overflow-hidden shadow-xl border-4 border-white bg-white">
                <img
                  src={petsOutdoors}
                  alt="Pets outdoors"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* DOG PORTRAIT */}
          <div className="absolute bottom-10 right-8 md:right-14 z-30">
            <div className="w-32 h-40 md:w-40 md:h-48 rounded-2xl overflow-hidden shadow-xl border-[6px] border-[#F4C430] bg-white rotate-[10deg]">
              <img
                src={dogPortrait}
                alt="Dog portrait"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
