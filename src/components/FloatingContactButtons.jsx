import React, { useState, useEffect } from "react";
import { FaPhoneAlt, FaWhatsapp, FaComments } from "react-icons/fa";

const FloatingContactButtons = () => {
  const [showBox, setShowBox] = useState(true);

  // Helper: auto hide box after 5 seconds
  const startAutoHideTimer = () => {
    setTimeout(() => {
      setShowBox(false);
    }, 5000);
  };

  // Run first time when component loads
  useEffect(() => {
    startAutoHideTimer();
  }, []);

  // When showBox becomes true (due to reopening), start auto-hide again
  useEffect(() => {
    if (showBox) {
      startAutoHideTimer();
    }
  }, [showBox]);

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
            animation: fadeIn 0.4s ease;
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

          .reopen-btn {
            position: fixed;
            right: 18px;
            bottom: 90px;
            background: #5a5a5a;
            width: 50px;
            height: 50px;
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
            z-index: 9999;
            box-shadow: 0px 4px 20px rgba(0,0,0,0.25);
            animation: fadeIn 0.4s ease;
          }

          @keyframes fadeIn {
            from { opacity: 0; transform: scale(0.8); }
            to { opacity: 1; transform: scale(1); }
          }
        `}
      </style>

      {/* Floating Contact Box */}
      {showBox && (
        <div className="floating-contact-wrapper">
          <div className="floating-contact-box">
            <a href="tel:+919746163608" className="floating-btn">
              <FaPhoneAlt size={18} color="#fff" />
            </a>

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
      )}

      {/* Reopen Button */}
      {!showBox && (
        <div className="reopen-btn" onClick={() => setShowBox(true)}>
          <FaComments size={22} color="#fff" />
        </div>
      )}
    </>
  );
};

export default FloatingContactButtons;
