import React from 'react';

const ProfessionalGroomer = () => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/3">
            <img 
              src="https://via.placeholder.com/300x300" 
              alt="Professional Groomer"
              className="rounded-full w-64 h-64 object-cover mx-auto shadow-2xl border-8 border-primary"
            />
          </div>

          <div className="md:w-2/3 space-y-6">
            <div className="flex items-center space-x-3">
              <span className="text-primary text-2xl">★</span>
              <h2 className="text-3xl font-bold text-dark">
                Meet our Professional Groomer
              </h2>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-dark">About Muhammad</h3>
              <p className="text-gray-600 leading-relaxed">
                With over 10 years of experience in pet grooming, Muhammad is a certified 
                professional who specializes in all breeds. His gentle approach and attention 
                to detail ensure that every pet receives personalized care tailored to their 
                specific needs.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Muhammad has trained internationally and holds certifications from leading 
                grooming academies. He's passionate about creating a stress-free environment 
                where pets feel comfortable and loved throughout their grooming experience.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <div className="bg-secondary px-6 py-3 rounded-full">
                  <span className="font-semibold text-dark">10+ Years Experience</span>
                </div>
                <div className="bg-secondary px-6 py-3 rounded-full">
                  <span className="font-semibold text-dark">Certified Professional</span>
                </div>
                <div className="bg-secondary px-6 py-3 rounded-full">
                  <span className="font-semibold text-dark">All Breeds Specialist</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfessionalGroomer;