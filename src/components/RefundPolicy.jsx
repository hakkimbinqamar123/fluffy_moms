import React from 'react';

const RefundPolicy = () => {
  return (
    <div className="bg-[#F5EFE0] min-h-screen">
      {/* Refund Policy Content */}
      <div className="container mx-auto px-6 md:px-12 lg:px-20 py-16">
        <div className="max-w-4xl">
          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-12">
            Refund Policy
          </h1>

          {/* Product Purchases Section */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-black mb-4">
              Product Purchases (Pet Supplies & Accessories)
            </h2>
            <ul className="space-y-3 text-gray-700 list-disc pl-5">
              <li>
                Unused and unopened items may be returned within 7–14 days of purchase (choose your 
                preferred timeframe) with the original receipt for a full refund or store credit.
              </li>
              <li>
                Used, opened, or damaged items are not eligible for refunds unless found to be defective.
              </li>
              <li>
                Defective products can be exchanged or refunded within 14–30 days depending on supplier 
                warranty.
              </li>
              <li>
                Final sale items (e.g., clearance or perishable goods like treats or food) cannot be returned.
              </li>
            </ul>
          </section>

          {/* Grooming Services Section */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-black mb-4">
              Grooming Services (Pet Supplies & Accessories)
            </h2>
            <ul className="space-y-3 text-gray-700 list-disc pl-5">
              <li>
                Grooming service fees are non-refundable once the service has been completed.
              </li>
              <li>
                If a customer is unsatisfied with the grooming service:
              </li>
            </ul>
            
            <ol className="list-decimal pl-10 mt-2 mb-4 text-gray-700">
              <li>They may request a free correction within 24–48 hours, depending on policy.</li>
            </ol>

            <ul className="space-y-3 text-gray-700 list-disc pl-5 mb-4">
              <li>
                Refunds are only issued if:
              </li>
            </ul>

            <ol className="list-decimal pl-10 space-y-2 text-gray-700 mb-6">
              <li>A service was not performed as agreed.</li>
              <li>A confirmed mistake by the groomer occurred.</li>
              <li>
                The shop is not responsible for pre-existing medical or behavioral conditions that affect 
                grooming results.
              </li>
            </ol>

            {/* Cancellations & No-Shows */}
            <ul className="space-y-3 text-gray-700 list-disc pl-5 mb-4">
              <li className="font-semibold">Cancellations & No-Shows</li>
            </ul>

            <ol className="list-decimal pl-10 space-y-2 text-gray-700 mb-6">
              <li>Grooming appointment cancellations must be made at least 24 hours in advance.</li>
              <li>Late cancellations or no-shows may incur a cancellation fee (e.g., 20–50% of service cost).</li>
              <li>Repeated no-shows may require prepayment for future appointments.</li>
            </ol>

            {/* Proof of Purchase */}
            <ul className="space-y-3 text-gray-700 list-disc pl-5 mb-4">
              <li className="font-semibold">Proof of Purchase</li>
            </ul>

            <ol className="list-decimal pl-10 space-y-2 text-gray-700 mb-6">
              <li>A valid receipt or digital transaction record is required for all returns, exchanges, and refunds.</li>
            </ol>

            {/* Management Rights */}
            <ul className="space-y-3 text-gray-700 list-disc pl-5 mb-4">
              <li className="font-semibold">Management Rights</li>
            </ul>

            <ol className="list-decimal pl-10 space-y-2 text-gray-700">
              <li>The shop reserves the right to refuse returns or refunds that:</li>
              <li>Do not meet the policy criteria</li>
              <li>Show signs of misuse, neglect, or intentional damage</li>
            </ol>
          </section>
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

export default RefundPolicy;