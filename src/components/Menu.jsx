import { X, ChevronRight, MessageSquare } from "lucide-react";
import { NavLink } from "react-router-dom";

const MobileMenu = ({ isOpen, toggleMenu }) => {
  return (
    <div
      className={`fixed inset-0 menubar bg-black bg-opacity-90 z-50 transition-all duration-300 md:hidden ${
        isOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0 pointer-events-none"
      } flex justify-end`}
    >
      <div className="w-72 h-full bg-[#1c1a19] text-white p-5 shadow-lg transform transition-transform duration-300 ease-in-out translate-x-full" style={{ transform: isOpen ? 'translateX(0)' : 'translateX(100%)' }}>
        <div className="flex justify-between items-center border-b border-gray-700 pb-4">
          <button className="flex items-center gap-2 text-sm">
            <img src="/flag.png" alt="Language" className="w-5 h-5" />
            EN
          </button>
          <button onClick={toggleMenu}>
            <X className="w-6 h-6" />
          </button>
        </div>
        <nav className="mt-5">
          <ul className="space-y-4 text-lg font-semibold">
          <li><NavLink to="/LoyaltyProgram" className="block" onClick={toggleMenu}>LOYALTY PROGRAM</NavLink></li>
            <li><NavLink to="/Bonus" className="block" onClick={toggleMenu}>BONUSES</NavLink></li>
            <li className="flex justify-between items-center">
              <NavLink to="/LoyaltyProgram" className="block" onClick={toggleMenu}>INFO</NavLink>
              <ChevronRight className="w-4 h-4 text-gray-400" />
            </li>
            <li><NavLink to="/Bonus" className="block" onClick={toggleMenu}>PRIVACY POLICY</NavLink></li>
            <li><NavLink to="/Casino" className="block" onClick={toggleMenu}>AFFILIATES</NavLink></li>
            <li className="flex items-center gap-2">
              <NavLink to="/" className="block" onClick={toggleMenu}>CONTACT US</NavLink>
              <MessageSquare className="w-4 h-4 text-gray-400" />
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default MobileMenu;
