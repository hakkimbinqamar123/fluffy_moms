import React from 'react';
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

  return (
    <section className="container mx-auto px-20 py-16">
      <h2 className="text-4xl font-bold text-center mb-10 text-gray-800">
        Our Premium Services
      </h2>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="rounded-2xl overflow-hidden bg-white shadow-lg hover:shadow-xl transition"
          >
            {/* IMAGE WRAPPER */}
            <div className="relative h-48 overflow-hidden">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover"
              />

              {/* LABEL ON BOTTOM LEFT WITH OPACITY */}
              <div className="absolute bottom-3 left-3 bg-[#6B5E4C]/70 backdrop-blur-sm text-white text-sm px-4 py-1 rounded-full shadow-md flex items-center gap-2">
                <span className="w-2 h-2 bg-yellow-300 rounded-full"></span>
                {service.title}
              </div>
            </div>

            {/* YELLOW DESCRIPTION AREA */}
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
