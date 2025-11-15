import React from 'react';

const WhyChooseUs = () => {
  const features = [
    {
      title: "Equipment and qualified groomers",
      description: "Professional tools and certified experts for the best care",
      icon: "✂️"
    },
    {
      title: "Warm and compassionate care",
      description: "We treat every pet with love and patience",
      icon: "❤️"
    },
    {
      title: "State-of-the-art grooming facilities",
      description: "Modern, clean, and safe environment for your pets",
      icon: "🏢"
    },
    {
      title: "Assistance/delivery in real-life",
      description: "Convenient pickup and drop-off services available",
      icon: "🚗"
    }
  ];

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4 text-dark">
          Why Fluffy Moms ?
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          We're dedicated to providing exceptional care that goes beyond grooming. 
          Here's why pet parents choose us.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center space-y-4">
              <div className="text-6xl">{feature.icon}</div>
              <h3 className="font-semibold text-lg text-dark">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;