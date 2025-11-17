import React from 'react';
import show1 from "../assets/show1.png";
import show2 from "../assets/show2.png";
import show3 from "../assets/show3.png";
import show4 from "../assets/show4.png";
import show5 from "../assets/show5.png";
import show6 from "../assets/show6.png";
import show7 from "../assets/show7.png";
import show8 from "../assets/show8.png";

const PetShowGallery = () => {
  const images = [show1, show2, show3, show4, show5, show6, show7, show8];

  return (
    <section className="bg-white py-16 px-8 md:px-14 lg:px-20">
  <div className="max-w-7xl mx-auto">

    <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-dark">
      Pet Show Participation by Fluffy Moms Pet's
    </h2>

    <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
      We're proud to participate in pet shows and community events, celebrating
      the bond between pets and their families.
    </p>

    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
      {images.map((image, index) => (
        <div
          key={index}
          className="relative overflow-hidden rounded-2xl aspect-square group"
        >
          <img
            src={image}
            alt={`Pet show ${index + 1}`}
            className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
          />
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition"></div>
        </div>
      ))}
    </div>

  </div>
</section>

  );
};

export default PetShowGallery;
