import React from "react";
import { FaPaw } from "react-icons/fa";
import dogImage from "../assets/images/hero/dog.png";

const WhyChooseUs = () => {
  return (
    <section className="bg-[#F8F1E2] py-16 px-4 md:px-10">

      {/* Heading */}
      <h2 className="text-center text-3xl md:text-4xl font-bold text-gray-800">
        Why Fluffy Moon ?
      </h2>

      <p className="text-center max-w-3xl mx-auto mt-3 text-gray-600">
        At Fluffy Moon, we're passionate about providing top-notch pet grooming
        services that leave your furry friends feeling pampered and looking
        their best.
      </p>

      {/* MOBILE VIEW */}
      <div className="mt-14 grid grid-cols-2 gap-8 md:hidden">
        {[
          "Experienced and certified groomers",
          "Gentle and compassionate care",
          "State-of-the-art grooming facilities",
          "Personalized attention to each pet",
        ].map((text, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            <div className="w-14 h-14 bg-white rounded-full shadow-md flex items-center justify-center">
              <FaPaw className="text-[#F4C430] text-2xl" />
            </div>
            <p className="w-32 mt-3 text-gray-700 text-sm">{text}</p>
          </div>
        ))}
      </div>

      {/* DESKTOP/TABLET VIEW */}
      <div className="relative hidden md:flex justify-center mt-20">

        {/* Center Image */}
        <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-xl border-[6px] border-white z-10">
          <img src={dogImage} alt="dog" className="w-full h-full object-cover" />
        </div>

        {/* TOP LEFT */}
        <div className="absolute flex flex-col items-center 
            -top-10 left-[22%]">
          <div className="w-14 h-14 bg-white rounded-full shadow-md flex items-center justify-center">
            <FaPaw className="text-[#F4C430] text-2xl" />
          </div>
          <p className="w-40 mt-3 text-gray-700 text-sm">
            Experienced and certified groomers
          </p>
        </div>

        {/* TOP RIGHT */}
        <div className="absolute flex flex-col items-center 
            -top-10 right-[22%]">
          <div className="w-14 h-14 bg-white rounded-full shadow-md flex items-center justify-center">
            <FaPaw className="text-[#F4C430] text-2xl" />
          </div>
          <p className="w-40 mt-3 text-gray-700 text-sm">
            Gentle and compassionate care
          </p>
        </div>

        {/* BOTTOM LEFT */}
        <div className="absolute flex flex-col items-center 
            -bottom-10 left-[22%]">
          <div className="w-14 h-14 bg-white rounded-full shadow-md flex items-center justify-center">
            <FaPaw className="text-[#F4C430] text-2xl" />
          </div>
          <p className="w-40 mt-3 text-gray-700 text-sm">
            State-of-the-art grooming facilities
          </p>
        </div>

        {/* BOTTOM RIGHT */}
        <div className="absolute flex flex-col items-center 
            -bottom-10 right-[22%]">
          <div className="w-14 h-14 bg-white rounded-full shadow-md flex items-center justify-center">
            <FaPaw className="text-[#F4C430] text-2xl" />
          </div>
          <p className="w-40 mt-3 text-gray-700 text-sm">
            Personalized attention to each pet
          </p>
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;
