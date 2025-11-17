import React from "react";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

const FloatingContactButtons = () => {
  return (
    <>
      <style>
        {`
          .floating-contact-wrapper {
            position: fixed;
            right: 18px;
            bottom: 90px;
            z-index: 9999;
          }

          .floating-contact-box {
            background: #5a5a5a;
            padding: 10px 8px;
            border-radius: 15px;
            display: flex;
            flex-direction: column;
            gap: 10px;
            align-items: center;
            box-shadow: 0px 4px 20px rgba(0,0,0,0.25);
            position: relative;
          }

          .floating-btn {
            background: transparent;
            width: 45px;
            height: 45px;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 50%;
            border: 2px solid #fff;
            cursor: pointer;
          }
        `}
      </style>

      <div className="floating-contact-wrapper">
        <div className="floating-contact-box">

          {/* Call Button */}
          <a href="tel:+919746163608" className="floating-btn">
            <FaPhoneAlt size={18} color="#fff" />
          </a>

          {/* WhatsApp Button */}
          <a
            href="https://wa.me/919746163608"
            target="_blank"
            rel="noopener noreferrer"
            className="floating-btn"
          >
            <FaWhatsapp size={20} color="#fff" />
          </a>

        </div>
      </div>
    </>
  );
};

export default FloatingContactButtons;
