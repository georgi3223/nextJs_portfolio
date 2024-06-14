import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-black py-6">
      <div className="max-w-screen-xl mx-auto px-4 flex justify-between items-center">
        <p className="text-sm">
          © {new Date().getFullYear()} Georgi&aposs Portfolio. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
