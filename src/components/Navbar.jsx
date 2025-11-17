import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../assets/icon.png";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to={"/"} className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-[#F4C430] rounded-full flex items-center justify-center">
            <img src={logo} className='rounded-full' alt="" />
          </div>
          <span className="text-xl font-bold text-[#2C5234]">Fluffy Moms</span>
        </Link>
        
        <ul className="hidden md:flex space-x-8 text-gray-700">
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