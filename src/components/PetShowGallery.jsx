import React from 'react';

const PetShowGallery = () => {
  const images = Array(8).fill("https://via.placeholder.com/300x300");

  return (
    <section className="container mx-auto px-4 py-16">
      <h2 className="text-4xl font-bold text-center mb-4 text-dark">
        Pet Show Participation by Fluffy Moms Pet's
      </h2>
      <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
        We're proud to participate in pet shows and community events, 
        celebrating the bond between pets and their families.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {images.map((image, index) => (
          <div key={index} className="relative overflow-hidden rounded-2xl aspect-square group">
            <img 
              src={image} 
              alt={`Pet show ${index + 1}`}
              className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PetShowGallery;