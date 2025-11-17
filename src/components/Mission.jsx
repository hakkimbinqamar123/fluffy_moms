import React from 'react';
import mission from "../assets/mission.png";
import vector from "../assets/foot.png";

const Mission = () => {
  return (
    <section className="relative bg-[#F5EFE0] overflow-hidden py-20 px-8 md:px-14 lg:px-20">

      {/* FOOTPRINT — BOTTOM LEFT (large) */}
      <img
        src={vector}
        alt="footprint"
        className="absolute bottom-10 left-12 w-40  rotate-[-15deg]"
      />
      
      {/* FOOTPRINT — TOP RIGHT (medium) */}
      <img
        src={vector}
        alt="footprint"
        className="absolute top-10 right-24 w-24 rotate-[-0deg]"
      />

      <div className="container mx-auto px-6 lg:px-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* LEFT TEXT CONTENT */}
          <div className="space-y-3 max-w-xl">
            <h2 className="text-4xl font-bold text-gray-900">
              Our Mission
            </h2>

            <p className="text-gray-700 text-lg leading-relaxed">
              Driven to create meaningful experiences that inspire growth and
              innovation.
            </p>

            <p className="text-gray-700 leading-relaxed">
              Our mission is to create a safe, welcoming, and fun environment where
              pets can relax and enjoy the grooming experience. We believe in
              building strong relationships with our clients and their pets, and we’re
              committed to providing personalized care that meets the unique needs
              of each furry friend.
            </p>

          </div>

          {/* RIGHT IMAGE */}
          <div className="flex justify-center relative">
            <img
              src={mission}
              alt="Our Mission"
              className="rounded-3xl w-[470px] h-[500px] object-cover shadow-xl"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Mission;
