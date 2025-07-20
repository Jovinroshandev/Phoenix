import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Navbar({ scrollToSection }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const menuList = [
    { label: 'HOME', key: 'home' },
    { label: 'WHY CHOOSE PHOENIX', key: 'why' },
    { label: 'OUR STORY', key: 'book' },
    { label: 'BUY', key: 'book' },
    { label: 'SOCIALS', key: 'social' }
  ];

  return (
    <div className="flex sticky top-0 z-50 justify-between items-center py-5 px-6 md:px-24 backdrop-blur-lg bg-white/10 border border-white/20">
      <div className="font-bold text-white text-2xl">Phoenix</div>

      {/* Hamburger - Mobile Only */}
      <button
        className="text-white text-2xl md:hidden"
        onClick={() => setMobileOpen(!mobileOpen)}
      >
        <i className="fa-solid fa-bars"></i>
      </button>

      {/* Desktop Menu */}
      <div className="hidden md:block">
        <div className="flex gap-6 bg-[#FF634A] bg-gradient-to-t from-[#FF634A] to-red-700 py-2 px-5 rounded-full">
          {menuList.map(({ label, key }, index) => (
            <motion.p
              key={index}
              onClick={() => scrollToSection(key)}
              whileHover={{ scale: 1.1, rotate: 1 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="cursor-pointer hover:bg-[#f76239] rounded-full text-white font-bold px-4 py-2"
            >
              {label}
            </motion.p>
          ))}
        </div>
      </div>

      {/* Mobile Menu - only shown when `mobileOpen` is true */}
      {mobileOpen && (
        <div className="absolute top-20 left-6 right-6 bg-[#FF634A] rounded-xl p-4 md:hidden z-40">
          {menuList.map(({ label, key }, index) => (
            <motion.p
              key={index}
              onClick={() => {
                scrollToSection(key);
                setMobileOpen(false); // close menu after click
              }}
              whileTap={{ scale: 0.95 }}
              className="cursor-pointer text-white font-bold py-2 border-b border-white/20"
            >
              {label}
            </motion.p>
          ))}
        </div>
      )}
    </div>
  );
}
