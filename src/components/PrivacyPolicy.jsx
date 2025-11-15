import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="bg-[#F5EFE0] min-h-screen">
      {/* Privacy Policy Content */}
      <div className="container mx-auto px-6 md:px-12 lg:px-20 py-16">
        <div className="max-w-4xl">
          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-12">
            Privacy Policy
          </h1>

          {/* Privacy Content */}
          <ul className="space-y-6 text-gray-700 text-base md:text-lg list-disc pl-5">
            <li>
              Customer information is collected only for business purposes (appointments, grooming 
              records, invoicing).
            </li>
            <li>
              Personal data will not be sold or shared except as required by law.
            </li>
          </ul>
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative bg-gradient-to-r from-[#6B7D4F] to-[#8A9B6E] py-20">
        {/* Background overlay */}
        <div className="absolute inset-0 bg-black opacity-10"></div>
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to pamper your pet?
          </h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Book your appointment now and give your furry friend the care they deserve!
          </p>
          <button className="bg-[#F4C430] text-black px-10 py-4 rounded-full font-semibold text-base hover:bg-[#E5B520] transition-all shadow-lg hover:shadow-xl">
            Book Your Appointment Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;