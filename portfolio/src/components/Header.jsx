import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-800 text-white p-5">
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        <h1 className="text-2xl font-bold">Kavin's Portfolio</h1>
        <ul className="hidden md:flex gap-6">
        <li><a href="#hero" className="hover:text-blue-400">Home</a></li>
          <li><a href="#services" className="hover:text-blue-400">About</a></li>
          <li><a href="#about" className="hover:text-blue-400">Services</a></li>
          <li><a href="#portfolio" className="hover:text-blue-400">Portfolio</a></li>
          <li><a href="#contact" className="hover:text-blue-400">Contact</a></li>
        </ul>
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {isOpen && (
        <motion.div className="md:hidden flex flex-col bg-gray-900 p-5 absolute w-full left-0"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}>
          <a href="#about" className="py-2 hover:text-blue-400 text-center" onClick={() => setIsOpen(false)}>About</a>
          <a href="#services" className="py-2 hover:text-blue-400 text-center" onClick={() => setIsOpen(false)}>Services</a>
          <a href="#portfolio" className="py-2 hover:text-blue-400 text-center" onClick={() => setIsOpen(false)}>Portfolio</a>
          <a href="#contact" className="py-2 hover:text-blue-400 text-center" onClick={() => setIsOpen(false)}>Contact</a>
        </motion.div>
      )}
    </nav>
  );
};

export default Header;
