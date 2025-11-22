import React from "react";
import mainCat from "../assets/images/hero/main-cat.png";
import peopleWithPets from "../assets/images/hero/people-with-pets.png";
import petsOutdoors from "../assets/images/hero/pets-outdoors.png";
import dogPortrait from "../assets/images/hero/dog-portrait.png";
import footprint from "../assets/foot.png";
import Ellipse from "../assets/Ellipse 2.png";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative overflow-visible" id="hero">
      <div
        className="absolute inset-0 bg-cover bg-center md:hidden z-0"
        style={{ backgroundImage: `url(${mainCat})` }}
        aria-hidden="true"
      />

      <div className="absolute inset-0 md:hidden bg-black/30 z-5 pointer-events-none" />

      <div className="grid lg:grid-cols-[55%_45%] w-full relative z-10 overflow-visible">
        {/* LEFT SIDE */}
        <div
          className="
            bg-transparent md:bg-[#F5EFE0] relative
            px-6 sm:px-8 md:px-16 lg:px-20 
            py-12 md:py-16 lg:py-20 
            min-h-[650px] 
            flex items-center
          "
        >
          {/* TEXT CONTENT */}
          <div className="relative z-20 max-w-xl bottom-12">
            <img
              src={footprint}
              className="hidden md:block relative left-[-50px]"
              style={{ height: "180px", width: "180px" }}
              alt="Footprint"
            />

            <h1 className="text-4xl md:text-4xl lg:text-5xl font-bold md:text-black text-white mb-8 [word-spacing:10px]">
              <span>Where Every Pet Feels</span><br />
              <span className="mt-4 inline-block">Loved & Pampered</span>
            </h1>

            <p className="text-white md:text-[#4a4a4a] text-base md:text-lg mb-6 leading-[1.3]">
              At Fluffy Moon, we provide top-notch grooming in a safe, fun, and caring
              environment. Our mission is to make every pet feel relaxed, happy, and
              looking their best.
            </p>

            <div className="flex justify-between items-center w-full">
              <Link to="/book-appointment">
                <button className="bg-[#F4C430] text-white px-16 py-4 rounded font-semibold text-base hover:bg-[#C89A1B] transition-all shadow-md hover:shadow-lg">
                  Book a Grooming Session
                </button>
              </Link>

              <img
                src={footprint}
                className="hidden md:block"
                style={{ height: "80px", width: "80px" }}
                alt="Footprint"
              />
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="relative min-h-[570px] overflow-visible hidden md:block bg-[#F5EFE0]">
          {/* MAIN CAT */}
          <img
            src={mainCat}
            alt="Cat"
            className="w-full right-0 left-0 h-[680px] object-fit object-right"
            style={{ transform: "scale(0.95)" }}
          />


          <div className="absolute top-8 left-[-12%] lg:left-[-18%] z-30">

            <div className="relative w-60 h-44 md:w-64 md:h-38 rounded-2xl shadow-xl border-4 border-white bg-white overflow-visible">

              {/* MAIN IMAGE */}
              <div className="w-full h-full rounded-2xl overflow-hidden">
                <img
                  src={peopleWithPets}
                  alt="People with pets"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <img
              src={Ellipse}
              alt="Ellipse"
              className="absolute bottom-[-3px] left-[-20px] w-18 h-18 z-40"
            />
          </div>


          {/* BOTTOM LEFT OVERLAP */}
          <div className="absolute -bottom-8 left-[-14%] lg:left-[-28%] z-30">
            <div className="relative">
              <div className="w-52 h-40 md:w-64 md:h-40 rounded-2xl overflow-hidden shadow-xl border-4 border-white bg-white">
                <img src={petsOutdoors} alt="Pets outdoors" className="w-full h-full object-cover" />
              </div>
              <img
              src={Ellipse}
              alt="Ellipse"
              className="absolute bottom-[-8px] right-[-16px] w-18 h-18 z-40"
            />
            </div>
          </div>

          {/* DOG PORTRAIT */}
          <div className="absolute -bottom-4 right-8 md:right-14 z-30">
            <div className="w-36 h-48 md:w-48 md:h-64 rotate-[6deg]">
              <img src={dogPortrait} alt="Dog portrait" className="w-full h-full object-fill" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
