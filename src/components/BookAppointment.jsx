import React, { useState } from 'react';

const BookAppointment = () => {
  const [formData, setFormData] = useState({
    petName: '',
    breed: '',
    age: '',
    weight: '',
    ownerName: '',
    contactNumber: '',
    email: '',
    services: {
      bathDry: false,
      haircutTrim: false,
      nailTrim: false,
      brushOut: false,
      other: false,
    },
    otherServices: '',
    medicalConditions: '',
    focusAreas: '',
    preferredDate: '',
    preferredTime: '9:00 AM',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFormData({
      ...formData,
      services: { ...formData.services, [name]: checked },
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add your form submission logic here
    alert('Appointment booked successfully!');
  };

  return (
    <div className="bg-[#F5EFE0] min-h-screen py-16">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Book Your Appointment
          </h1>
          <p className="text-gray-700 text-lg">
            Your one-stop destination for pet essentials and premium products.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-6">
            {/* Left Column */}
            <div className="space-y-6">
              {/* Pet Information */}
              <div className="bg-[#F3E8FF] rounded-3xl p-6">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-10 h-10 bg-[#D8B4FE] rounded-full flex items-center justify-center">
                    <span className="text-purple-700 text-xl">🐾</span>
                  </div>
                  <h2 className="text-xl font-bold text-black">Pet Information</h2>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-gray-700 mb-2">Pet Name</label>
                    <input
                      type="text"
                      name="petName"
                      value={formData.petName}
                      onChange={handleInputChange}
                      placeholder="Fluffy"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-300"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-700 mb-2">Breed</label>
                    <input
                      type="text"
                      name="breed"
                      value={formData.breed}
                      onChange={handleInputChange}
                      placeholder="Golden Retriever"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-300"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-700 mb-2">Age</label>
                    <input
                      type="text"
                      name="age"
                      value={formData.age}
                      onChange={handleInputChange}
                      placeholder="3 years"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-300"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-700 mb-2">Weight</label>
                    <input
                      type="text"
                      name="weight"
                      value={formData.weight}
                      onChange={handleInputChange}
                      placeholder="25 lbs"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-300"
                    />
                  </div>
                </div>
              </div>

              {/* Owner Information */}
              <div className="bg-[#E0F7F4] rounded-3xl p-6">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-10 h-10 bg-[#99E6DC] rounded-full flex items-center justify-center">
                    <span className="text-teal-700 text-xl">👤</span>
                  </div>
                  <h2 className="text-xl font-bold text-black">Owner Information</h2>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm text-gray-700 mb-2">Owner Name</label>
                    <input
                      type="text"
                      name="ownerName"
                      value={formData.ownerName}
                      onChange={handleInputChange}
                      placeholder="John Smith"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-teal-300"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm text-gray-700 mb-2 flex items-center">
                        <span className="text-green-600 mr-2">📞</span>
                        Contact Number
                      </label>
                      <input
                        type="tel"
                        name="contactNumber"
                        value={formData.contactNumber}
                        onChange={handleInputChange}
                        placeholder="(555) 123-4567"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-teal-300"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-gray-700 mb-2 flex items-center">
                        <span className="text-green-600 mr-2">✉️</span>
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="john@email.com"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-teal-300"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Appointment Details */}
              <div className="bg-[#E3F2FD] rounded-3xl p-6">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-10 h-10 bg-[#90CAF9] rounded-full flex items-center justify-center">
                    <span className="text-blue-700 text-xl">📅</span>
                  </div>
                  <h2 className="text-xl font-bold text-black">Appointment Details</h2>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-gray-700 mb-2 flex items-center">
                      <span className="text-blue-600 mr-2">📅</span>
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      name="preferredDate"
                      value={formData.preferredDate}
                      onChange={handleInputChange}
                      placeholder="mm/dd/yyyy"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-300"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-700 mb-2 flex items-center">
                      <span className="text-blue-600 mr-2">🕐</span>
                      Preferred Time
                    </label>
                    <select
                      name="preferredTime"
                      value={formData.preferredTime}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-300 appearance-none bg-white"
                    >
                      <option>9:00 AM</option>
                      <option>10:00 AM</option>
                      <option>11:00 AM</option>
                      <option>12:00 PM</option>
                      <option>1:00 PM</option>
                      <option>2:00 PM</option>
                      <option>3:00 PM</option>
                      <option>4:00 PM</option>
                      <option>5:00 PM</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              {/* Service Options */}
              <div className="bg-[#E8F5E9] rounded-3xl p-6">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-10 h-10 bg-[#A5D6A7] rounded-full flex items-center justify-center">
                    <span className="text-green-700 text-xl">✂️</span>
                  </div>
                  <h2 className="text-xl font-bold text-black">Service Options</h2>
                </div>

                <div className="space-y-4">
                  <label className="flex items-center space-x-3 cursor-pointer">
                    <input
                      type="checkbox"
                      name="bathDry"
                      checked={formData.services.bathDry}
                      onChange={handleCheckboxChange}
                      className="w-5 h-5 rounded border-2 border-gray-300 text-green-600 focus:ring-2 focus:ring-green-300"
                    />
                    <span className="text-gray-700">Bath & Dry</span>
                  </label>

                  <label className="flex items-center space-x-3 cursor-pointer">
                    <input
                      type="checkbox"
                      name="haircutTrim"
                      checked={formData.services.haircutTrim}
                      onChange={handleCheckboxChange}
                      className="w-5 h-5 rounded border-2 border-gray-300 text-green-600 focus:ring-2 focus:ring-green-300"
                    />
                    <span className="text-gray-700">Haircut/Trim</span>
                  </label>

                  <label className="flex items-center space-x-3 cursor-pointer">
                    <input
                      type="checkbox"
                      name="nailTrim"
                      checked={formData.services.nailTrim}
                      onChange={handleCheckboxChange}
                      className="w-5 h-5 rounded border-2 border-gray-300 text-green-600 focus:ring-2 focus:ring-green-300"
                    />
                    <span className="text-gray-700">Nail Trim</span>
                  </label>

                  <label className="flex items-center space-x-3 cursor-pointer">
                    <input
                      type="checkbox"
                      name="brushOut"
                      checked={formData.services.brushOut}
                      onChange={handleCheckboxChange}
                      className="w-5 h-5 rounded border-2 border-gray-300 text-green-600 focus:ring-2 focus:ring-green-300"
                    />
                    <span className="text-gray-700">Brush Out</span>
                  </label>

                  <label className="flex items-center space-x-3 cursor-pointer">
                    <input
                      type="checkbox"
                      name="other"
                      checked={formData.services.other}
                      onChange={handleCheckboxChange}
                      className="w-5 h-5 rounded border-2 border-gray-300 text-green-600 focus:ring-2 focus:ring-green-300"
                    />
                    <span className="text-gray-700">Other</span>
                  </label>

                  <textarea
                    name="otherServices"
                    value={formData.otherServices}
                    onChange={handleInputChange}
                    placeholder="Please specify other services..."
                    rows="3"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-300 resize-none"
                  ></textarea>
                </div>
              </div>

              {/* Special Instructions */}
              <div className="bg-[#FCE4EC] rounded-3xl p-6">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-10 h-10 bg-[#F8BBD0] rounded-full flex items-center justify-center">
                    <span className="text-pink-700 text-xl">❤️</span>
                  </div>
                  <h2 className="text-xl font-bold text-black">Special Instructions</h2>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm text-gray-700 mb-2">
                      Medical Conditions/Allergies
                    </label>
                    <textarea
                      name="medicalConditions"
                      value={formData.medicalConditions}
                      onChange={handleInputChange}
                      placeholder="Please mention any medical conditions, allergies, or sensitivities..."
                      rows="4"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-pink-300 resize-none"
                    ></textarea>
                  </div>

                  <div>
                    <label className="block text-sm text-gray-700 mb-2">Focus Areas</label>
                    <textarea
                      name="focusAreas"
                      value={formData.focusAreas}
                      onChange={handleInputChange}
                      placeholder="Any specific areas that need extra attention..."
                      rows="4"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-pink-300 resize-none"
                    ></textarea>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="text-center mt-10">
            <button
              type="submit"
              className="bg-[#F4C430] text-black px-16 py-4 rounded-full font-bold text-lg hover:bg-[#E5B520] transition-all shadow-lg hover:shadow-xl"
            >
              Book Session
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookAppointment;