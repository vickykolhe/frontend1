import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 px-6 md:px-36">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-24">
        {/* Logo and About */}
        <div>
          <h2 className="text-2xl font-bold mb-3">Welcome to Khelio</h2>
          <p className="text-sm text-gray-400">
            Unleash your creativity and explore groundbreaking AI-powered game
            simulations.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>
              <a href="/" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="/explore" className="hover:underline">
                Explore
              </a>
            </li>
            <li>
              <a href="/about" className="hover:underline">
                About Us
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Socials */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
          <div className="flex space-x-4">
            <a href="#" aria-label="Twitter" className="hover:text-blue-400">
              🐦
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-pink-500">
              📷
            </a>
            <a href="#" aria-label="YouTube" className="hover:text-red-500">
              ▶️
            </a>
            <a href="#" aria-label="LinkedIn" className="hover:text-blue-300">
              💼
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="mt-10 border-t border-gray-700 pt-5 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Khelio. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
