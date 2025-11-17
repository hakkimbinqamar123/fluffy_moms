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
    </div>
  );
};

export default PrivacyPolicy;