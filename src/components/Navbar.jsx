import React, { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";
import Button from "./Button";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="max-w-6xl mx-auto mt-6 bg-[#222] rounded-full md:rounded-full px-6 py-3 relative">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 bg-orange-500 flex items-center justify-center rounded-full overflow-hidden">
            
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrC8q0dcWa7-sa-Ba5qHX_RNKn-UK-iXBaxiaChGicsw&s=10"
              alt="logo"
              className="w-full h-full object-cover"
            />
          </div>

          <h1 className="text-white text-xl font-bold hover:text-orange-500">
            Clever
          </h1>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-gray-300 text-sm">
          <li>
            <Link to="/benefits" className="hover:text-white">
              Benefits
            </Link>
          </li>

          <li>
            <Link to="/HowItWorks" className="hover:text-white">
              How It Works
            </Link>
          </li>

          <li>
            <Link to="/testimonials" className="hover:text-white">
              Testimonials
            </Link>
          </li>
        </ul>

        {/* Desktop Button */}
        <div className="hidden md:block">
          <Button
            size="sm"
            rounded="full"
            className="cursor-pointer hover:bg-orange-500"
          >
            Join Waitlist
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white text-3xl"
        >
          {menuOpen ? <IoClose /> : <CiMenuBurger />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden absolute left-0 top-20 w-full bg-[#222] rounded-2xl p-6 shadow-lg">
          <ul className="flex flex-col gap-5 text-gray-300">
            <li>
              <Link
                to="/benefits"
                onClick={() => setMenuOpen(false)}
                className="hover:text-white"
              >
                Benefits
              </Link>
            </li>

            <li>
              <Link
                to="/HowItWorks"
                onClick={() => setMenuOpen(false)}
                className="hover:text-white"
              >
                How It Works
              </Link>
            </li>

            <li>
              <Link to="/testimonials"
                onClick={() => setMenuOpen(false)}
                className="hover:text-white">
                Testimonials
              </Link>
            </li>
             <Button
            size="lg" variant="secondary"rounded="full"
            className="cursor-pointer mt-5  ">Join Waitlist

          </Button>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
