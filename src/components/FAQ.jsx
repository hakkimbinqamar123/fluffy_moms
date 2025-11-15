import React from 'react';

const ServicesInShop = () => {
  const services = [
    {
      title: "Pet Care essentials",
      description: "Everything your pet needs for daily care, from food to toys and accessories.",
      image: "https://via.placeholder.com/400x300"
    },
    {
      title: "Pet-friendly store Wellness",
      description: "A welcoming space where pets are not just allowed, but celebrated and cared for.",
      image: "https://via.placeholder.com/400x300"
    },
    {
      title: "Pet Sitters and Comfort",
      description: "Trusted professionals who provide loving care when you can't be there.",
      image: "https://via.placeholder.com/400x300"
    }
  ];

  return (
    <section className="bg-secondary py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4 text-dark">
          See Our pet Services <br />
          <span className="text-primary">in a Shop</span>
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Visit our shop to explore our full range of services and products designed 
          to keep your pet happy and healthy.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition">
              <img 
                src={service.image} 
                alt={service.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-6 space-y-3">
                <h3 className="text-xl font-semibold text-dark">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesInShop;