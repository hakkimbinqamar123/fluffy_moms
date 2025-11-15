import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "John Doe",
      image: "https://via.placeholder.com/60x60",
      rating: 5,
      text: "Fluffy Moms is amazing! My dog always comes back happy and well-groomed. The staff is professional and caring. Highly recommended!",
      date: "2 weeks ago"
    },
    {
      name: "John Doe",
      image: "https://via.placeholder.com/60x60",
      rating: 5,
      text: "Best pet grooming service in town! They take such good care of my cat. The facility is clean and the groomers are skilled and gentle.",
      date: "1 month ago"
    }
  ];

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4 text-dark">
          Our Client Saying
        </h2>
        <p className="text-center text-gray-600 mb-12">
          Don't take our word for it - hear what our happy pet parents have to say!
        </p>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-secondary p-8 rounded-2xl relative">
              <div className="text-6xl text-primary absolute top-4 left-4 opacity-20">"</div>
              
              <div className="relative z-10 space-y-4">
                <div className="flex text-primary text-xl">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>

                <p className="text-gray-700 leading-relaxed">
                  {testimonial.text}
                </p>

                <div className="flex items-center space-x-4 pt-4 border-t border-gray-200">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-dark">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.date}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;