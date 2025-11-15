import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#2C5234] text-white">
      <div className="container mx-auto px-6 py-12">
        {/* Newsletter Section */}
        <div className="bg-[#F4C430] rounded-3xl p-8 mb-12 text-center -mt-24 relative z-10">
          <h3 className="text-2xl font-bold text-black mb-4">
            Ready to pamper your pet?
          </h3>
          <button className="bg-[#2C5234] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#1f3d26] transition">
            Book an Appointment
          </button>
        </div>

        {/* Footer Content */}
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-[#F4C430] rounded-full flex items-center justify-center">
                <span className="text-2xl">🐾</span>
              </div>
              <div>
                <span className="text-xl font-bold block">FLUFFY MOON</span>
                <span className="text-xs text-gray-300">Pet Grooming & Care</span>
              </div>
            </div>
            <p className="text-gray-300 text-sm">
              Providing exceptional pet care and grooming services with love and professionalism.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4 text-[#F4C430]">Contact Info</h4>
            <ul className="space-y-3 text-gray-300 text-sm">
              <li className="flex items-start space-x-2">
                <span>📞</span>
                <span>9746243608</span>
              </li>
              <li className="flex items-center space-x-2">
                <span>📧</span>
                <span>fluffymoonpets@gmail.com</span>
              </li>
              <li className="flex items-start space-x-2">
                <span>📍</span>
                <span>Kulathoor, Kazhakuttam</span>
              </li>
            </ul>
          </div>

          {/* Working Hours */}
          <div>
            <h4 className="font-semibold mb-4 text-[#F4C430]">Working Hours</h4>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>Mon-Sun (10 am to 8pm)</li>
              <li className="text-[#F4C430]">Tue: Closed</li>
            </ul>
          </div>

          {/* Legal And Policies */}
          <div>
            <h4 className="font-semibold mb-4 text-[#F4C430]">Legal And Policies</h4>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>
                <Link to="/terms" className="hover:text-[#F4C430] transition">
                  Terms And Condition
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="hover:text-[#F4C430] transition">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/refund-policy" className="hover:text-[#F4C430] transition">
                  Refund Policy
                </Link>
              </li>
            </ul>
            
            <h4 className="font-semibold mt-6 mb-4 text-[#F4C430]">Follow Us</h4>
            <div className="flex space-x-3">
              <a href="#" className="w-10 h-10 bg-[#F4C430] rounded-full flex items-center justify-center hover:bg-[#E5B520] transition">
                <span className="text-[#2C5234] font-bold">f</span>
              </a>
              <a href="#" className="w-10 h-10 bg-[#F4C430] rounded-full flex items-center justify-center hover:bg-[#E5B520] transition">
                <span className="text-[#2C5234] font-bold">tw</span>
              </a>
              <a href="#" className="w-10 h-10 bg-[#F4C430] rounded-full flex items-center justify-center hover:bg-[#E5B520] transition">
                <span className="text-[#2C5234] font-bold">ig</span>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-600 pt-6 text-center text-gray-300 text-sm">
          <p>© 2025 Fluffy Moon. All rights reserved | Powered by Duxloot</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;