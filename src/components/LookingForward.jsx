import React from "react";
import lookingforward1 from "../assets/lookingforward1.png";
import lookingforward2 from "../assets/lookingforward2.png";

const LookingForward = () => {
  return (
    <section className="bg-white py-14">
      <div className="container mx-auto px-4 md:px-8 lg:px-20" id="contact">

        {/* Heading */}
        <div className="mb-6 md:mb-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
            We&apos;re Looking Forward to Meeting You!
          </h2>
          <p className="text-gray-600 mt-2">
            We can’t wait to connect and learn more about you!
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10 items-start">

          {/* LEFT IMAGE */}
          <div className="w-full flex justify-center md:justify-start">
            <img
              src={lookingforward1}
              alt="Happy pet parent"
              className="rounded-3xl shadow-xl w-full max-w-[550px] h-[460px] object-cover"
            />
          </div>

          {/* RIGHT COLUMN */}
          <div className="flex flex-col gap-6 max-w-[550px]">

            {/* SECOND IMAGE */}
            <img
              src={lookingforward2}
              alt="Pet care"
              className="rounded-3xl shadow-xl w-full h-[240px] object-cover"
            />

            {/* TITLE */}
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Ready to Give Your Pet the Best Care?
            </h3>

            {/* PARAGRAPH */}
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              Join hundreds of happy pet parents who trust us with their furry
              family members. Book your appointment today and experience the
              Fluffy Moon difference!
            </p>

            {/* BUTTON */}
            <a
            href="https://wa.me/919746163608?text=Hi%20I%20would%20like%20to%20book%20an%20appointment"
            target="_blank"
            rel="noopener noreferrer"
            className="w-fit"
            >
            <button className="bg-[#F4C430] text-white px-6 sm:px-8 py-3 rounded-full font-semibold hover:bg-yellow-500 transition flex items-center gap-2 text-sm sm:text-base">
                Contact Us
            </button>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};

export default LookingForward;
