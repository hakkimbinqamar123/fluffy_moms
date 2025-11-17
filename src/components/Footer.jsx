import React from "react";
import { Link } from "react-router-dom";
import footerLogo from "../assets/moon1.png";
import footerbg from '../assets/footerbg.png';
import { FiPhone, FiMail, FiMapPin, FiInstagram, FiFacebook, FiYoutube } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="bg-[#5A7E4D] text-white mt-20">

      {/* TOP CTA SECTION WITH IMAGE OVERLAY */}
      <div className="relative">
        {/* Background image */}
        <div
          className="h-[300px] w-full bg-cover bg-center opacity-90"
          style={{
            backgroundImage: `url(${footerbg})`,
          }}
        ></div>


        {/* CTA centered */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h2 className="text-3xl md:text-4xl font-semibold text-white mb-2">
            Ready to pamper your pet?
          </h2>
          <p className="text-white/80 mb-6">
            Book your appointment now and give your furry friend the care they deserve!
          </p>
          <Link to={"/book-appointment"}>
            <button className="bg-[#FFC84A] text-black px-8 py-4 rounded-full font-semibold text-lg shadow-md hover:bg-[#f6b833] transition">
              Book Your Appointment Now
            </button>
          </Link>
        </div>
      </div>

      {/* MAIN FOOTER */}
      <div className="container mx-auto px-8 md:px-14 lg:px-20 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

          {/* LOGO COLUMN */}
          <div>
  <img
    src={footerLogo}
    style={{ width: "200px", height: "200px" }}
    alt="Fluffy Moon"
    className="block mb-0"
  />
</div>


          {/* CONTACT INFO */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-[#F4C430]">Contact Info</h4>

            <p className="flex items-center gap-3 text-gray-200">
              <FiPhone /> +91 97463 43608
            </p>
            <p className="flex items-center gap-3 text-gray-200">
              <FiMail /> fluffymoonpets@gmail.com
            </p>
            <p className="flex items-center gap-3 text-gray-200">
              <FiMapPin /> Kulathoor, Kazhakuttam
            </p>
          </div>

          {/* WORKING HOURS */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-[#F4C430]">Working Hours</h4>

            <p className="text-gray-200">Mon–Sun (10 am to 8pm)</p>
            <p className="text-[#F4C430]">Tue: Closed</p>
          </div>

          {/* LEGAL + SOCIAL */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-[#F4C430]">Legal And Policies</h4>

            <ul className="space-y-2 text-gray-200">
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

            <h4 className="text-lg font-semibold text-[#F4C430] mt-6">Follow Us</h4>

            <div className="flex gap-4">
              <a className="w-10 h-10 bg-[#F4C430] rounded-full flex items-center justify-center hover:bg-[#e7b529] transition">
                <FiInstagram className="text-black text-lg" />
              </a>
              <a className="w-10 h-10 bg-[#F4C430] rounded-full flex items-center justify-center hover:bg-[#e7b529] transition">
                <FiFacebook className="text-black text-lg" />
              </a>
              <a className="w-10 h-10 bg-[#F4C430] rounded-full flex items-center justify-center hover:bg-[#e7b529] transition">
                <FiYoutube className="text-black text-lg" />
              </a>
            </div>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="border-t border-white/30 mt-10 pt-6 flex justify-between text-sm text-gray-200">
          <p>© 2025 Fluffy Moon. All rights reserved.</p>
          <p>
            Powered by <span className="font-semibold text-white">Ducbot</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
