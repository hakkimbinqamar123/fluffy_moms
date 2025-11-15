import React from 'react';

const Mission = () => {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h2 className="text-4xl font-bold text-dark">Our Mission</h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            At Fluffy Moms, we're committed to providing the highest quality pet care 
            services that prioritize your pet's health, happiness, and well-being.
          </p>

          <ul className="space-y-4">
            <li className="flex items-start space-x-3">
              <span className="text-primary text-2xl">✓</span>
              <span className="text-gray-700">
                To create a safe, welcoming environment where pets and their owners feel valued
              </span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-primary text-2xl">✓</span>
              <span className="text-gray-700">
                To deliver professional grooming services using the latest techniques and equipment
              </span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-primary text-2xl">✓</span>
              <span className="text-gray-700">
                To build lasting relationships with pet parents through trust and exceptional service
              </span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-primary text-2xl">✓</span>
              <span className="text-gray-700">
                To promote pet wellness through education and compassionate care
              </span>
            </li>
          </ul>
        </div>

        <div className="relative">
          <img 
            src="https://via.placeholder.com/500x600" 
            alt="Our Mission"
            className="rounded-3xl shadow-2xl w-full"
          />
          <div className="absolute -bottom-5 -right-5 w-40 h-40 bg-primary rounded-full opacity-30"></div>
        </div>
      </div>
    </section>
  );
};

export default Mission;