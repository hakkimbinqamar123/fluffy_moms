import React from "react";
import { FaPaw, FaUserCheck, FaHandsHelping } from "react-icons/fa";
import { GiHeartInside, GiBathtub } from "react-icons/gi";
import dogImage from "../assets/images/hero/dog.png";
import frame1 from "../assets/Frame1.png"
import frame2 from "../assets/Frame2.png"
import frame3 from "../assets/Frame4.png"
import frame4 from "../assets/Frame3.png"

const WhyChooseUs = () => {
  return (
    <section className="bg-[#F8F1E2] py-32 px-4 md:px-10">

      {/* Heading */}
      <h2 className="text-center text-3xl md:text-4xl font-bold text-gray-800">
        Why Fluffy Moon?
      </h2>

      <p className="text-center max-w-3xl mx-auto mt-3 text-gray-600">
        At Fluffy Moon, we're passionate about providing top-notch pet grooming
        services that leave your furry friends feeling pampered and looking
        their best.
      </p>

      <div className="mt-10 flex justify-center md:hidden">
        <img
          src={dogImage}
          alt="Dog"
          className="w-60 h-60 rounded-full shadow-xl border-[6px] border-white object-cover"
        />
      </div>

      <div className="mt-14 grid grid-cols-2 gap-8 md:hidden">

        {[
          { text: "Experienced and certified groomers", img: frame1 },
          { text: "Gentle and compassionate care", img: frame2 },
          { text: "State-of-the-art grooming facilities", img: frame3 },
          { text: "Personalized attention to each pet", img: frame4 },
        ].map((item, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            <div className="w-28 h-14 flex items-center justify-center">
              <img src={item.img} className="w-32 h-32" alt="" />
            </div>
            <p className="w-32 mt-3 text-gray-700 text-sm">{item.text}</p>
          </div>
        ))}

      </div>

      <div className="relative hidden md:flex justify-center mt-20">

        {/* Center Image */}
        <img src={dogImage} alt="dog" className="rounded-full object-cover" />

        {/* TOP LEFT */}
        <div className="absolute flex flex-col items-center top-20 left-[16%]">
          <div className="flex items-center gap-16 justify-center">
            <div className="flex justify-start">
              <p className="w-40 -mt-10 font-bold text-gray-700 whitespace-nowrap">
              Experienced and certified <br /> groomers
            </p>
            </div>
            <img src={frame1} style={{ width: "130px", height: "160px" }} />
          </div>
        </div>

        {/* TOP RIGHT */}
        <div className="absolute flex flex-col items-center top-20 right-[18%]">
          <div className=" flex items-center gap-10 justify-center">
            <img src={frame2} style={{ width: "130px", height: "160px" }} />
            <div>
              <p className="w-40 -mt-10 font-bold text-gray-700 whitespace-nowrap">
              Gentle and <br /> compassionate care
            </p>
            </div>
          </div>
        </div>

        {/* BOTTOM LEFT */}
        <div className="absolute flex flex-col items-center bottom-6 left-[16%]">
          <div className="flex items-center gap-2 justify-center">
            <p className="w-40 mr-14 -mt-10 font-bold text-gray-700 whitespace-nowrap">
              State-of-the-art grooming <br /> facilities
            </p>
            <img src={frame3} style={{ width: "130px", height: "160px" }} />
          </div>
        </div>

        {/* BOTTOM RIGHT */}
        <div className="absolute flex flex-col items-center bottom-6 right-[18%]">
          <div className=" flex items-center gap-14 justify-center">

            <img src={frame4} style={{ width: "130px", height: "160px" }} />
            <p className="w-40 -ml-4 -mt-10 font-bold text-gray-700 whitespace-nowrap">
              Personalized attention to <br /> each pet
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;
