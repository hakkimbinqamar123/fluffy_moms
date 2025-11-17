import React from 'react';
import professionalGroomer from '../assets/professional.png';
import footprint from "../assets/footprint.png"; // Add your footprint icon

const ProfessionalGroomer = () => {
  return (
    <section className="relative bg-[#FFF7E8] py-20 overflow-hidden" id='about'>

      <div className="container mx-auto px-6 lg:px-20">
        <div className="flex flex-col md:flex-row items-center gap-16">

          {/* IMAGE + BADGE */}
          <div className="relative md:w-1/2 flex justify-center">
            <div className="rounded-[40px] overflow-hidden border-[6px] border-[#F4C430] shadow-xl w-80 h-80">
              <img 
                src={professionalGroomer}
                alt="Professional Groomer"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* TEXT CONTENT */}
          <div className="md:w-1/2 space-y-6">

            {/* TITLE */}
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 leading-snug">
              <span className="text-[#F4C430]">Meet</span> our Professional Groomer
            </h2>

            {/* TAG */}
            <div>
              <span className="inline-block bg-[#F4E39E] px-6 py-2 rounded-full text-gray-800 font-semibold">
                Expert Groomer
              </span>
            </div>

            {/* NAME + DESCRIPTION */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-gray-900">Meet Abhirami</h3>

              <p className="text-gray-700 leading-relaxed">
                Who has 3 years of experience in pet grooming. They’re passionate about providing 
                top-notch care and making sure your pet looks and feels its best.
              </p>

              <p className="text-gray-700 leading-relaxed">
                With a gentle touch and a love for animals, Abhirami is dedicated to delivering 
                exceptional grooming services.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfessionalGroomer;
