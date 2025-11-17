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
        "Yes, scheduling an appointment ensures your pet receives dedicated time and attention.",
    },
    {
      question: "How long does grooming take?",
      answer:
        "A full grooming session typically takes between 1.5 to 3 hours depending on your pet’s size and coat condition.",
    },
    {
      question: "How often should my pet be groomed?",
      answer:
        "Most pets benefit from grooming every 4–6 weeks, depending on breed and coat type.",
    },
    {
      question: "What if I need to cancel or reschedule?",
      answer:
        "Please inform us at least 24 hours in advance so we can adjust our schedule accordingly.",
    },
    {
      question: "What happens if my pet has a medical emergency during grooming?",
      answer:
        "Our trained team will act immediately and contact you. If needed, we will seek veterinary assistance.",
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
