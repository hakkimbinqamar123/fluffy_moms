import React, { useRef, useEffect, useState } from "react";
import client1 from "../assets/client1.png";
import client2 from "../assets/img1.avif";
import { RiDoubleQuotesL } from "react-icons/ri";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Balamurali",
      role: "",
      text: "I love shopping here! They offer high-quality food, toys, and accessories. The staff is knowledgeable and helped me choose the right food for my dog. Prices are fair.",
      image: client1,
    },
    {
      name: "Sajin",
      role: "",
      text: "Their customer service is unmatched—everyone is so kind and willing to answer questions. My dog pulls me inside every time because she knows she's getting treats and attention!",
      image: client1,
    },
    {
      name: "Sapna",
      role: "",
      text: "This shop has everything I need for my pets at great prices. The staff is cheerful and always ready to help, making it a wonderful place for parents.",
      image: client2,
    },
    {
      name: "Lekshmi priya",
      role: "",
      text: "My dog gets nervous at salons, but here she left happy. The groomer was quick and did a nice job. She looks truly amazing and we'll return now.",
      image: client2,
    }
  ];

  const infiniteList = [...testimonials, ...testimonials, ...testimonials];
  
  const mobileScrollRef = useRef(null);
  const desktopScrollRef = useRef(null);
  const [isMobileInteracting, setIsMobileInteracting] = useState(false);
  const [isDesktopInteracting, setIsDesktopInteracting] = useState(false);
  const mobileIntervalRef = useRef(null);
  const desktopIntervalRef = useRef(null);

  // MOBILE: Scroll to next card (one-by-one)
  const scrollToNextCardMobile = () => {
    if (!mobileScrollRef.current || isMobileInteracting) return;

    const container = mobileScrollRef.current;
    const cardWidth = container.children[0]?.children[0]?.offsetWidth || 0;
    const gap = 16;
    const scrollAmount = cardWidth + gap;

    container.scrollBy({
      left: scrollAmount,
      behavior: 'smooth'
    });

    setTimeout(() => {
      const maxScroll = container.scrollWidth - container.clientWidth;
      const currentScroll = container.scrollLeft;
      
      if (currentScroll >= maxScroll - scrollAmount) {
        const middlePosition = (testimonials.length * (cardWidth + gap));
        container.scrollTo({
          left: middlePosition,
          behavior: 'auto'
        });
      }
    }, 500);
  };

  // DESKTOP: Continuous smooth scroll
  useEffect(() => {
    const scrollContainer = desktopScrollRef.current;
    if (!scrollContainer) return;

    let animationId;
    const scrollSpeed = 0.5;

    const scroll = () => {
      if (!isDesktopInteracting) {
        scrollContainer.scrollLeft += scrollSpeed;

        const maxScroll = scrollContainer.scrollWidth / 3;
        if (scrollContainer.scrollLeft >= maxScroll) {
          scrollContainer.scrollLeft = 0;
        }
      }
      animationId = requestAnimationFrame(scroll);
    };

    animationId = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(animationId);
  }, [isDesktopInteracting]);

  // Set initial position to middle set (Mobile)
  useEffect(() => {
    if (!mobileScrollRef.current) return;
    
    const timer = setTimeout(() => {
      const container = mobileScrollRef.current;
      const cardWidth = container.children[0]?.children[0]?.offsetWidth || 0;
      const gap = 16;
      const middlePosition = testimonials.length * (cardWidth + gap);
      
      container.scrollTo({
        left: middlePosition,
        behavior: 'auto'
      });
    }, 100);

    return () => clearTimeout(timer);
  }, [testimonials.length]);

  // Mobile auto-scroll interval
  useEffect(() => {
    if (isMobileInteracting) {
      if (mobileIntervalRef.current) {
        clearInterval(mobileIntervalRef.current);
      }
      return;
    }

    mobileIntervalRef.current = setInterval(scrollToNextCardMobile, 3500);

    return () => {
      if (mobileIntervalRef.current) {
        clearInterval(mobileIntervalRef.current);
      }
    };
  }, [isMobileInteracting]);

  // Mobile interaction handlers
  const handleMobileInteractionStart = () => {
    setIsMobileInteracting(true);
    if (mobileIntervalRef.current) {
      clearInterval(mobileIntervalRef.current);
    }
  };

  const handleMobileInteractionEnd = () => {
    setTimeout(() => {
      setIsMobileInteracting(false);
    }, 2000);
  };

  // Desktop interaction handlers
  const handleDesktopMouseEnter = () => {
    setIsDesktopInteracting(true);
  };

  const handleDesktopMouseLeave = () => {
    setIsDesktopInteracting(false);
  };

  return (
    <section className="bg-[#FFF7E8] py-20 px-8 md:px-14 lg:px-20 overflow-hidden">
      <div className="max-w-7xl mx-auto">

        <h2 className="text-3xl md:text-4xl font-bold text-center text-black mb-3">
          Our Client Saying
        </h2>

        <p className="text-center text-gray-600 mb-14">
          "Happy pets, Happier Owners."
        </p>

        {/* MOBILE CAROUSEL - ONE BY ONE */}
        <div 
          ref={mobileScrollRef}
          className="md:hidden relative w-full flex overflow-x-scroll snap-x snap-mandatory no-scrollbar"
          style={{ 
            scrollbarWidth: "none",
            scrollSnapType: "x mandatory",
            WebkitOverflowScrolling: "touch"
          }}
          onTouchStart={handleMobileInteractionStart}
          onTouchEnd={handleMobileInteractionEnd}
          onMouseDown={handleMobileInteractionStart}
          onMouseUp={handleMobileInteractionEnd}
        >
          <div className="flex gap-4">
            {infiniteList.map((item, i) => (
              <div
                key={i}
                className="w-[calc(100vw-4rem)] snap-center snap-always flex-shrink-0"
              >
                <div className="
                    bg-[#F4F4A4] rounded-3xl p-8 shadow-md relative 
                    min-h-[320px]
                    h-full                            
                    flex flex-col
                    select-none
                    transition-shadow duration-300
                    hover:shadow-xl
                  "
                >
                  <RiDoubleQuotesL
                    className="text-[#FF8A00] text-5xl absolute top-6 left-6"
                  />

                  <p className="text-gray-700 leading-relaxed mb-4 mt-14">
                    {item.text}
                  </p>

                  <div className="flex items-center gap-3 mt-auto">
                    <img
                      src={item.image}
                      className="w-12 h-12 rounded-full object-cover"
                      alt={item.name}
                      draggable="false"
                    />
                    <div>
                      <h4 className="font-bold text-lg text-black">{item.name}</h4>
                      {item.role && <p className="text-sm text-gray-600">{item.role}</p>}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* DESKTOP CAROUSEL - CONTINUOUS SCROLL */}
        <div 
          ref={desktopScrollRef}
          className="hidden md:flex relative w-full overflow-x-scroll no-scrollbar cursor-grab active:cursor-grabbing"
          style={{ scrollbarWidth: "none" }}
          onMouseEnter={handleDesktopMouseEnter}
          onMouseLeave={handleDesktopMouseLeave}
        >
          <div className="flex gap-6">
            {infiniteList.map((item, i) => (
              <div
                key={i}
                className="w-[340px] lg:w-[380px] flex-shrink-0"
              >
                <div className="
                    bg-[#F4F4A4] rounded-3xl p-8 shadow-md relative 
                    min-h-[250px]
                    h-full                            
                    flex flex-col
                    select-none
                    transition-shadow duration-300
                    hover:shadow-xl
                  "
                >
                  <RiDoubleQuotesL
                    className="text-[#FF8A00] text-5xl absolute top-6 left-6"
                  />

                  <p className="text-gray-700 leading-relaxed mb-4 mt-14">
                    {item.text}
                  </p>

                  <div className="flex items-center gap-3 mt-auto">
                    <img
                      src={item.image}
                      className="w-12 h-12 rounded-full object-cover"
                      alt={item.name}
                      draggable="false"
                    />
                    <div>
                      <h4 className="font-bold text-lg text-black">{item.name}</h4>
                      {item.role && <p className="text-sm text-gray-600">{item.role}</p>}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

    </section>
  );
};

export default Testimonials;