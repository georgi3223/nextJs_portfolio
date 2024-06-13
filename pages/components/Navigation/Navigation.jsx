import React, { useState } from 'react';
import { useRouter } from 'next/router';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const handleNavigation = (section) => {
    const targetSection = document.getElementById(section);
    if (targetSection) {
      window.scrollTo({ top: targetSection.offsetTop, behavior: 'smooth' });
    }
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="sticky top-0 z-50 bg-gray-800">
      <nav className="flex justify-between items-center p-4 max-w-screen-xl mx-auto">
        <div>
          <span
            className="text-2xl font-semibold text-white cursor-pointer"
            onClick={() => handleNavigation('')}
          >
            G.N.
          </span>
        </div>
        <div className="hidden md:flex">
          <ul className="flex gap-4 list-none m-0 p-0">
            <li>
              <span
                className="text-white cursor-pointer hover:text-black"
                onClick={() => handleNavigation('about')}
              >
                About
              </span>
            </li>
            <li>
              <span
                className="text-white cursor-pointer hover:text-black"
                onClick={() => handleNavigation('skills')}
              >
                Skills
              </span>
            </li>
            <li>
              <span
                className="text-white cursor-pointer hover:text-black"
                onClick={() => handleNavigation('projects')}
              >
                Projects
              </span>
            </li>
            <li>
              <span
                className="text-white cursor-pointer hover:text-black"
                onClick={() => handleNavigation('contact')}
              >
                Contact
              </span>
            </li>
          </ul>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-2xl text-white bg-none border-none cursor-pointer">
            ☰
          </button>
        </div>
        <div
          className={`fixed top-0 left-0 w-4/5 max-w-xs h-full bg-gray-800 z-50 overflow-y-auto transition-transform duration-500 shadow-lg ${isOpen ? 'transform translate-x-0' : 'transform -translate-x-full'
            }`}
        >
          <div className="p-8">
            <ul className="list-none m-0 p-0 text-center">
              <li className="mb-4">
                <span
                  className="block text-2xl text-white cursor-pointer hover:text-black"
                  onClick={() => {
                    handleNavigation('about');
                    toggleMenu();
                  }}
                >
                  About
                </span>
              </li>
              <li className="mb-4">
                <span
                  className="block text-2xl text-white cursor-pointer hover:text-black"
                  onClick={() => {
                    handleNavigation('skills');
                    toggleMenu();
                  }}
                >
                  Skills
                </span>
              </li>
              <li className="mb-4">
                <span
                  className="block text-2xl text-white cursor-pointer hover:text-black"
                  onClick={() => {
                    handleNavigation('projects');
                    toggleMenu();
                  }}
                >
                  Projects
                </span>
              </li>
              <li className="mb-4">
                <span
                  className="block text-2xl text-white cursor-pointer hover:text-black"
                  onClick={() => {
                    handleNavigation('contact');
                    toggleMenu();
                  }}
                >
                  Contact
                </span>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navigation;
