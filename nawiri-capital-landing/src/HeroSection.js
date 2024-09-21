import React from 'react';
import logo from './assets/logo.png'; // Ensure the path is correct

const HeroSection = () => {
  return (
    <div className="bg-[#f5f5f5] text-[#001f3f] min-h-screen flex items-start justify-center pt-16 md:pt-24"> {/* Updated background and text color */}
      <div className="max-w-7xl w-full px-8 md:px-16">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Left Section - Logo & Quick Navigation */}
          <div className="flex items-center mb-6 md:mb-0 space-x-24">
            {/* Logo */}
            <img 
              src={logo} 
              alt="Nawiri Capital Logo" 
              className="h-20 w-auto mr-24"
              style={{ maxWidth: '200px' }} 
            />
            {/* Navigation Links */}
            <nav>
              <ul className="flex space-x-10 text-lg font-medium">
                <li className="hover:text-[#ffcc00] cursor-pointer">Services</li>
                <li className="hover:text-[#ffcc00] cursor-pointer">Testimonials</li>
                <li className="hover:text-[#ffcc00] cursor-pointer">Team</li>
                <li className="hover:text-[#ffcc00] cursor-pointer">FAQ</li>
              </ul>
            </nav>
          </div>
          {/* Right Section - Login CTA */}
          <div>
            <button className="bg-[#ffcc00] hover:bg-[#ffb300] text-gray-900 font-bold py-3 px-8 rounded-full transition duration-300 shadow-lg">
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;




