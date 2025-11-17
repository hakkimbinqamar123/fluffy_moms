import React from "react";
import { LuCalendar } from "react-icons/lu";
import service1 from "../assets/service1.png";
import service2 from "../assets/service2.png";
import service3 from "../assets/service3.png";

const ServicesInShop = () => {
  const services = [
    {
      title: "Pet Care Essentials",
      description:
        "Ensure your pet stays healthy by providing a balanced diet tailored to their age, health, and needs. Maintain good hygiene too...",
      date: "10 Nov, 2025",
      image: service1,
    },
    {
      title: "Pet Health and Wellness",
      description:
        "Create a safe and comfortable space for rest. Remove hazards, secure toxic substances, and protect your pet from accidents...",
      date: "10 Nov, 2025",
      image: service2,
    },
    {
      title: "Pet Safety and Comfort",
      description:
        "Engage your pet’s mind with puzzles, toys, scent work, or training to prevent boredom and behavioral issues...",
      date: "10 Nov, 2025",
      image: service3,
    },
  ];

  return (
    <section className="bg-[#F8F4C8] py-20 px-8 md:px-14 lg:px-20">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-black mb-2">
          See Our pet Services <br /> News & Blogs
        </h2>

        <p className="text-gray-700 mb-12 max-w-2xl">
          Explore our curated articles designed to help you care for your pets with confidence.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {services.map((service, index) => (
            <div
              key={index}
              className="bg-[#F4F4A4] rounded-2xl p-4 shadow-sm hover:shadow-lg transition"
            >
              {/* Image */}
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-56 object-cover rounded-xl mb-5"
              />

              {/* Date */}
              <div className="flex items-center gap-2 text-gray-700 text-sm mb-3">
                <LuCalendar className="text-xl" />
                <span>{service.date}</span>
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-black mb-2">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-700 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default ServicesInShop;
