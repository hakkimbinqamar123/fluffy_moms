import React from 'react';

const CTABanner = () => {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="bg-gradient-to-r from-yellow-100 to-yellow-200 rounded-3xl p-12 flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 space-y-4">
          <h2 className="text-4xl font-bold text-dark leading-tight">
            Where Every Pet Feels Loved, <br />
            Pampered, and is Cared For
          </h2>
        </div>

        <div className="md:w-1/2 flex justify-end">
          <img 
            src="https://via.placeholder.com/300x400" 
            alt="Happy pet"
            className="rounded-2xl shadow-xl max-w-xs"
          />
        </div>

        <button className="absolute bottom-8 right-8 bg-primary text-dark px-8 py-4 rounded-full font-semibold hover:bg-yellow-500 transition">
          Book Now →
        </button>
      </div>
    </section>
  );
};

export default CTABanner;