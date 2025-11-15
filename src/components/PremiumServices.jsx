import React from 'react';

const PremiumServices = () => {
  const services = [
    { title: "Pet Grooming", image: "https://via.placeholder.com/300x200", description: "Full grooming services" },
    { title: "Pet Spa", image: "https://via.placeholder.com/300x200", description: "Relaxing spa treatments" },
    { title: "Veterinary Care", image: "https://via.placeholder.com/300x200", description: "Health checkups" },
    { title: "Pet Training", image: "https://via.placeholder.com/300x200", description: "Behavioral training" },
    { title: "Pet Boarding", image: "https://via.placeholder.com/300x200", description: "Safe overnight care" },
    { title: "Pet Photography", image: "https://via.placeholder.com/300x200", description: "Professional photos" },
    { title: "Pet Adoption", image: "https://via.placeholder.com/300x200", description: "Find your new friend" },
    { title: "Pet Accessories", image: "https://via.placeholder.com/300x200", description: "Quality products" }
  ];

  return (
    <section className="container mx-auto px-4 py-16">
      <h2 className="text-4xl font-bold text-center mb-12 text-dark">
        Our Premium Services
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition group">
            <div className="relative overflow-hidden h-48">
              <img 
                src={service.image} 
                alt={service.title}
                className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
              />
            </div>
            <div className="p-5 bg-secondary">
              <h3 className="font-semibold text-lg mb-2 text-dark">{service.title}</h3>
              <p className="text-gray-600 text-sm">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PremiumServices;