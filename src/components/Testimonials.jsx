import React, { useState, useEffect, useRef } from "react";
import client1 from "../assets/client1.png";
import { RiDoubleQuotesL } from "react-icons/ri";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Balamurali",
      role: "",
      text: "I love shopping at this pet store! They always have a great variety of high-quality food, toys, and accessories. The staff is super knowledgeable and helped me choose the perfect food for my dog. Prices are fair and the store is always clean and organized. Highly recommend!",
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
      text: "This shop has everything I need for my pets at great prices. The staff is always cheerful and ready to help. A wonderful place for all pet parents!",
      image: client1,
    },
    {
      name: "Lekshmi priya",
      role: "",
      text: "My dog usually gets nervous at grooming salons, but here she walked out smiling and wagging her tail! The groomer was gentle, quick, and did an excellent job with her haircut. She looks amazing. I’ll definitely be back.",
      image: client1,
    }
  ];

  // Duplicate list for infinite loop
  const infiniteList = [...testimonials, ...testimonials];

  const [index, setIndex] = useState(0);
  const sliderRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => prev + 1);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // Reset index smoothly when halfway reached
  useEffect(() => {
    if (index === testimonials.length) {
      // Remove transition → instant jump
      sliderRef.current.style.transition = "none";
      setIndex(0);

      // After the jump → re-enable smooth transition
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
          Your one-stop destination for pet essentials and premium products.
        </p>

        <div className="w-full flex justify-center overflow-hidden">

          <div
            ref={sliderRef}
            className="flex w-full md:w-1/2 transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateX(-${index * 100}%)`,
            }}
          >
            {infiniteList.map((item, i) => (
              <div key={i} className="w-full flex-shrink-0 px-3">
                <div className="bg-[#F4F4A4] rounded-3xl p-10 shadow-md relative w-full min-h-[330px] flex flex-col justify-between">
                  
                  <RiDoubleQuotesL className="text-[#FF8A00] text-5xl absolute top-6 left-8" />

                  <div className="mt-10">
                    <p className="text-gray-700 leading-relaxed mb-6">{item.text}</p>

                    <div className="flex items-center gap-4">
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
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default Testimonials;
