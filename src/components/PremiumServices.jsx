import React, { useEffect, useRef } from 'react';
import grooming from "../assets/grooming.png";
import haircuts from "../assets/haircuts.png";
import nailcare from "../assets/nailcare.png";
import bathing from "../assets/bathing.png";
import boarding from "../assets/boarding.png";
import boutique from "../assets/boutique.png";
import pickup from "../assets/pickup.png";
import training from "../assets/training.png";

const PremiumServices = () => {
  const services = [
    { title: "Grooming", image: grooming, description: "Professional pet grooming services" },
    { title: "Haircut & Styling", image: haircuts, description: "Trendy cuts and styling" },
    { title: "Nail Care", image: nailcare, description: "Gentle nail trimming" },
    { title: "Bathing", image: bathing, description: "Luxurious bath experience" },
    { title: "Pet Boarding", image: boarding, description: "Premium pet accessories" },
    { title: "Dog Show Training", image: training, description: "Professional training" },
    { title: "Pet Boutique", image: boutique, description: "Professional pet grooming services" },
    { title: "Pickup & Drop", image: pickup, description: "Convenient transport" },
  ];

  const carouselRef = useRef(null);
  const cardWidth = 260; // Approx width of one card including margin

  // AUTO SCROLL EVERY 3 SECONDS
  useEffect(() => {
    const interval = setInterval(() => {
      if (!carouselRef.current) return;

      const maxScroll = carouselRef.current.scrollWidth - carouselRef.current.clientWidth;

      // If reached end → go back to start
      if (carouselRef.current.scrollLeft >= maxScroll) {
        carouselRef.current.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        carouselRef.current.scrollBy({ left: cardWidth, behavior: "smooth" });
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="container mx-auto px-6 md:px-20 py-16" id="services">

      <h2 className="text-xl md:text-4xl font-bold text-center mb-10 text-gray-800 whitespace-nowrap">
        Our Premium Services
      </h2>

      {/* MOBILE CAROUSEL WITH AUTO-SCROLL */}
      <div
        ref={carouselRef}
        className="md:hidden flex gap-6 overflow-x-scroll snap-x snap-mandatory no-scrollbar pb-1"
        style={{ scrollbarWidth: "none" }}
      >
        {services.map((service, index) => (
          <div
            key={index}
            className="min-w-[250px] snap-center flex-shrink-0 rounded-2xl overflow-hidden bg-white shadow-lg hover:shadow-xl transition"
          >
            <div className="relative h-40">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-3 left-3 bg-[#6B5E4C]/70 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full">
                {service.title}
              </div>
            </div>

            <div className="bg-[#FFF2C9] p-5 min-h-[90px]">
              <p className="text-gray-800 text-sm font-medium leading-relaxed">
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* DESKTOP GRID */}
      <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-8 mt-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="rounded-2xl overflow-hidden bg-white shadow-lg hover:shadow-xl transition"
          >
            <div className="relative h-48">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-3 left-3 bg-[#6B5E4C]/70 text-white px-4 py-1 rounded-full">
                {service.title}
              </div>
            </div>
            <div className="bg-[#FFF2C9] p-5 min-h-[90px]">
              <p className="text-gray-800 text-sm font-medium leading-relaxed">
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
};

export default PremiumServices;
