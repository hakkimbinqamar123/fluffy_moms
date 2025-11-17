import React, { useState } from "react";
import { IoAdd, IoRemove } from "react-icons/io5";

const FAQ = () => {
  const faqs = [
    {
      question: "What services do you offer?",
      answer:
        "We offer full-service grooming for dogs and cats, including bathing, haircut & styling, nail trimming, ear cleaning, teeth brushing, de-shedding, flea & tick treatment, and more.",
    },
    {
      question: "Do I need to make an appointment?",
      answer:
        "Yes, appointments are recommended to ensure availability. However, we also accept walk-ins based on our groomers’ schedule.",
    },
    {
      question: "How long does grooming take?",
      answer: `Grooming time depends on your pet’s size, coat condition, and the services requested. 
      On average:

      • Small pets: 1–2 hours
      • Medium pets: 2–3 hours
      • Large pets or special cases: 3–4 hours

      We’ll give you an estimated pickup time when you drop off your pet.`,
    },

    {
      question: "How often should my pet be groomed?",
      answer:
        "We recommend grooming every 4–6 weeks, depending on your pet’s breed, coat type, and lifestyle.",
    },
    {
      question: "What if I need to cancel or reschedule?",
      answer:
        "Please provide at least 24 hours’ notice to cancel or reschedule your appointment to avoid a cancellation fee.",
    },
    {
      question: "What happens if my pet has a medical emergency during grooming?",
      answer:
        "In the rare event of a medical issue, we will contact you immediately and, if necessary, take your pet to the nearest veterinary clinic.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(0); // first item open

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-[#FFF7E8] py-20 px-8 md:px-14 lg:px-20">
      <div className="max-w-5xl mx-auto">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-black mb-3">
          You’ve Got Questions, We’ve Got Answers
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Find quick answers to common pet care queries from feeding and grooming to health and training tips. <br />
          If you need more guidance, our team is just a message away.
        </p>

        {/* FAQ List */}
        <div className="space-y-5">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`bg-[#F4F4A4] rounded-2xl p-6 md:p-7 transition-all cursor-pointer shadow-sm`}
              onClick={() => toggleFAQ(index)}
            >
              <div className="flex items-center justify-between">
                <h3 className="text-lg md:text-xl font-semibold text-gray-900">
                  {faq.question}
                </h3>

                {/* Icon */}
                {openIndex === index ? (
                  <IoRemove className="text-2xl text-gray-800" />
                ) : (
                  <IoAdd className="text-2xl text-gray-800" />
                )}
              </div>

              {/* Answer */}
              {openIndex === index && (
                <p className="mt-4 text-gray-700 leading-relaxed">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FAQ;
