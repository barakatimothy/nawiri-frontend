import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-6">
        <div className="flex justify-between">
          <div>
            <h3 className="font-bold">Company</h3>
            <ul>
              <li>About Us</li>
              <li>Contact</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold">Follow Us</h3>
            <ul>
              <li>Twitter</li>
              <li>Facebook</li>
            </ul>
          </div>
        </div>
        <p className="text-center mt-6">© 2024 Company Name. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
