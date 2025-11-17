import React, { useState, useEffect, useRef } from "react";
import client1 from "../assets/client1.png";
import client2 from "../assets/img1.avif";
import { RiDoubleQuotesL } from "react-icons/ri";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Balamurali",
      role: "",
      text: "I love shopping here! They offer high-quality food, toys, and accessories. The staff is knowledgeable and helped me choose the right food for my dog. Prices are fair.",
      image: client1,
    },
    {
      name: "Sajin",
      role: "",
      text: "Their customer service is unmatched—everyone is so kind and willing to answer questions. My dog pulls me inside every time because she knows she’s getting treats and attention!",
      image: client1,
    },
    {
      name: "Sapna",
      role: "",
      text: "This shop has everything I need for my pets at great prices. The staff is cheerful and always ready to help, making it a wonderful place for parents.",
      image: client2,
    },
    {
      name: "Lekshmi priya",
      role: "",
      text: "My dog gets nervous at salons, but here she left happy. The groomer was quick and did a nice job. She looks truly amazing and we’ll return now.",
      image: client2,
    }
  ];

  const infiniteList = [...testimonials, ...testimonials];
  const [index, setIndex] = useState(0);
  const sliderRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => prev + 1);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (index === testimonials.length) {
      sliderRef.current.style.transition = "none";
      setIndex(0);

      setTimeout(() => {
        sliderRef.current.style.transition = "transform 0.7s ease-in-out";
      }, 50);
    }
  }, [index]);

  return (
    <section className="bg-[#FFF7E8] py-20 px-8 md:px-14 lg:px-20 overflow-hidden">
      <div className="max-w-7xl mx-auto">

        <h2 className="text-3xl md:text-4xl font-bold text-center text-black mb-3">
          Our Client Saying
        </h2>

        <p className="text-center text-gray-600 mb-14">
          "Happy pets, Happier Owners."
        </p>

        <div className="w-full flex justify-center overflow-hidden">

          <div
            ref={sliderRef}
            className="flex w-full md:w-1/2 transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {infiniteList.map((item, i) => (
              <div key={i} className="w-full flex-shrink-0 px-3">
                
                <div className="bg-[#F4F4A4] rounded-3xl p-10 shadow-md relative w-full 
                     min-h-[500px] sm:min-h-[500px] md:min-h-[350px]
                     flex flex-col">

                  <RiDoubleQuotesL className="text-[#FF8A00] text-5xl absolute top-6 left-8" />

                  {/* Main text */}
                  <p className="text-gray-700 leading-relaxed mb-6 mt-16">
                    {item.text}
                  </p>

                  <div className="flex items-center gap-4 mt-auto">
                    <img
                      src={item.image}
                      className="w-14 h-14 rounded-full object-cover"
                      alt={item.name}
                    />
                    <div>
                      <h4 className="font-bold text-lg text-black">{item.name}</h4>
                      <p className="text-sm text-gray-600">{item.role}</p>
                    </div>
                  </div>

                </div>

              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default Testimonials;
