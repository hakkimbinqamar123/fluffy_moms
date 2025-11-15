import React from 'react';

const TermsAndConditions = () => {
  return (
    <div className="bg-[#F5EFE0] min-h-screen">
      {/* Terms Content */}
      <div className="container mx-auto px-6 md:px-12 lg:px-20 py-16">
        <div className="max-w-4xl">
          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-12">
            Terms and conditions
          </h1>

          {/* General */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-black mb-4">General</h2>
            <ul className="space-y-3 text-gray-700 list-disc pl-5">
              <li>
                These Terms & Conditions govern all purchases, services, and interactions with our Pet Shop 
                and Grooming Center ("the Company").
              </li>
              <li>
                By purchasing products, booking services, or visiting our facility, you agree to comply with 
                these terms.
              </li>
            </ul>
          </section>

          {/* Product Sales */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-black mb-4">Product Sales</h2>
            <ul className="space-y-3 text-gray-700 list-disc pl-5">
              <li>All products are sold as described.</li>
              <li>Customers are responsible for verifying product suitability before purchasing.</li>
              <li>The Company is not liable for any misuse or improper handling of products after purchase.</li>
            </ul>
          </section>

          {/* Grooming Services */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-black mb-4">Grooming Services</h2>
            <ul className="space-y-3 text-gray-700 list-disc pl-5">
              <li>
                Customers must disclose all medical or behavioral conditions of their pets (e.g., allergies, 
                aggression, anxiety, skin conditions).
              </li>
              <li>
                The Company reserves the right to refuse grooming services for pets deemed unsafe or unfit 
                for grooming.
              </li>
              <li>
                Grooming results may vary based on:
                <ol className="list-decimal pl-6 mt-2 space-y-1">
                  <li>Pet behavior</li>
                  <li>Coat condition</li>
                  <li>Breed characteristics</li>
                </ol>
              </li>
              <li>
                Minor nicks, scratches, or stress responses may occur, especially in difficult-to-groom pets. 
                The Company is not liable for unavoidable grooming-related incidents.
              </li>
              <li>
                Customers acknowledge that severe matting may require shaving, which may expose underlying skin conditions.
              </li>
              <li>Service fees are non-refundable once grooming is completed.</li>
            </ul>
          </section>

          {/* Appointment Policies */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-black mb-4">Appointment Policies</h2>
            <ul className="space-y-3 text-gray-700 list-disc pl-5">
              <li>Appointments must be booked in advance.</li>
              <li>Cancellations should be made at least 24 hours prior to the appointment.</li>
              <li>Late cancellations or no-shows may incur a cancellation fee.</li>
              <li>Late arrivals may result in a shortened service or rescheduling.</li>
            </ul>
          </section>

          {/* Pet Behavior & Safety */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-black mb-4">Pet Behavior & Safety</h2>
            <ul className="space-y-3 text-gray-700 list-disc pl-5">
              <li>The safety of pets and staff is our top priority.</li>
              <li>
                Aggressive or unpredictable pets may require:
                <ol className="list-decimal pl-6 mt-2 space-y-1">
                  <li>Muzzle use</li>
                  <li>Additional handling fees</li>
                  <li>Service refusal</li>
                </ol>
              </li>
              <li>Owners are responsible for any injuries or damages caused by their pets.</li>
            </ul>
          </section>

          {/* Health Requirements */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-black mb-4">Health Requirements</h2>
            <ul className="space-y-3 text-gray-700 list-disc pl-5">
              <li>Pets must be up to date on required vaccinations as per local regulations.</li>
              <li>The Company may request proof of vaccinations at any time.</li>
              <li>Pets showing signs of illness may be refused services to protect other animals.</li>
            </ul>
          </section>

          {/* Liability */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-black mb-4">Liability</h2>
            <ul className="space-y-3 text-gray-700 list-disc pl-5">
              <li>
                The Company is not responsible for:
                <ol className="list-decimal pl-6 mt-2 space-y-1">
                  <li>Pre-existing medical conditions</li>
                  <li>Allergic reactions to grooming products</li>
                  <li>Sudden illness or death unrelated to the grooming process.</li>
                </ol>
              </li>
              <li>In case of emergencies, the Company may seek veterinary care at the owner's expense.</li>
            </ul>
          </section>

          {/* Payment Terms */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-black mb-4">Payment Terms</h2>
            <ul className="space-y-3 text-gray-700 list-disc pl-5">
              <li>Full payment is required upon completion of grooming or at the time of purchase.</li>
              <li>Accepted payment methods include cash, card, and any other method displayed in-store.</li>
              <li>Prices are subject to change without prior notice.</li>
            </ul>
          </section>
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative bg-gradient-to-r from-[#6B7D4F] to-[#8A9B6E] py-20">
        {/* Background pattern/overlay */}
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

export default TermsAndConditions;