import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../assets/icon.png";

const Navbar = () => {
  return (
    <nav className="bg-[#5A7E4D] shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to={"/"} className="flex items-center space-x-2">
          <div className="w-11 h-11 bg-[#F4C430] flex items-center justify-center">
            <img src={logo} alt="" />
          </div>
        </Link>
        
        <ul className="hidden md:flex space-x-8 text-white">
          <li><Link to="/" className="hover:text-[#F4C430] transition">Home</Link></li>
          <li><a href="/services" className="hover:text-[#F4C430] transition">Services</a></li>
          <li><a href="/about" className="hover:text-[#F4C430] transition">About</a></li>
          <li><a href="/contact" className="hover:text-[#F4C430] transition">Contact</a></li>
        </ul>

        <Link to="/book-appointment">
          <button className="bg-[#F4C430] text-[#2C5234] px-6 py-2 rounded-full font-semibold hover:bg-[#E5B520] transition">
            Book Now
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;