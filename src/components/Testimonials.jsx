import React from "react";
import client1 from "../assets/client1.png";
import { RiDoubleQuotesL } from "react-icons/ri";

const Testimonials = () => {
  const testimonials = [
    {
      name: "John Doe",
      role: "Super Duper",
      text: "Fluffy Moms is amazing! My dog always comes back happy and well-groomed. The staff is professional and caring. Highly recommended!",
      image: client1,
    },
    {
      name: "John Doe",
      role: "Super Duper",
      text: "Best pet grooming service in town! They take such good care of my cat. The facility is clean and the groomers are skilled and gentle.",
      image: client1,
    }
  ];

  return (
   <section className="bg-[#FFF7E8] py-20 px-8 md:px-14 lg:px-20">
  <div className="max-w-7xl mx-auto">

    <h2 className="text-3xl md:text-4xl font-bold text-center text-black mb-3">
      Our Client Saying
    </h2>

    <p className="text-center text-gray-600 mb-14">
      Your one-stop destination for pet essentials and premium products.
    </p>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
      {testimonials.map((item, i) => (
        <div
          key={i}
          className="bg-[#F4F4A4] rounded-3xl p-10 shadow-md relative"
        >
          <RiDoubleQuotesL className="text-[#FF8A00] text-5xl absolute top-6 left-8" />

          <div className="mt-10">
            <p className="text-gray-700 leading-relaxed mb-6">{item.text}</p>

            <div className="flex items-center gap-4">
              <img
                src={item.image}
                className="w-14 h-14 rounded-full object-cover"
                alt={item.name}
              />

              <div>
                <h4 className="font-bold text-lg text-black">{item.name}</h4>
                <p className="text-sm text-gray-600">{item.role}</p>
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
