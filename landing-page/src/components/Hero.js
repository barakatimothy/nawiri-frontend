import React, { useEffect, useState } from 'react';

const Hero = () => {

  // Array of background images
  const images = [
    "https://www.talk-business.co.uk/wp-content/uploads/2019/01/shutterstock_766323235.jpg",
    'https://cdn.coverr.co/videos/coverr-a-businessman-working-on-a-stock-market-trading-platform-4862/thumbnail?width=640'
  ];

  // State to track current image index
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    // Cycle through images
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="relative h-[80vh] overflow-hidden"> {/* Adjusted height to 80% */}
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000"
        style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
      ></div>
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
        <h1 className="text-5xl font-bold mb-4 animate-fade-in-out">Welcome to Nawiri Capital</h1>
        <p className="text-xl mb-7 animate-fade-in-out">We are your trusted investment partner</p>
        <button className="bg-white text-blue-600 px-6 py-2 rounded-full shadow-md">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default Hero;

