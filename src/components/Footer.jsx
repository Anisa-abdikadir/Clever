import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";
import Button from "./Button";

export default function Footer() {
  return (
    <footer className="bg-white pt-20 pb-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top */}
        <div className="flex flex-col items-center text-center">
          <img
            className="w-20 h-20 rounded-full object-cover"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrC8q0dcWa7-sa-Ba5qHX_RNKn-UK-iXBaxiaChGicsw&s=10"
            alt="Clever Logo"
          />

          <h3 className="mt-6 text-2xl md:text-3xl font-bold">Clever</h3>

          <p className="mt-4 max-w-lg text-gray-500 leading-7 text-sm sm:text-base">
            Empowering your productivity with innovative tools and seamless
            collaboration.
          </p>

          <Button
            size="xl"
            rounded="full"
            variant="primary"
            className="mt-8 border border-gray-200 hover:text-orange-400 duration-300  md:w-auto"
          >
            hello@clever.com
          </Button>
        </div>

        {/* Navigation */}
        <div className="mt-10 flex justify-center">
          <div className="bg-black rounded-3xl md:rounded-full px-6 py-5 w-full md:w-auto">
            <ul className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-white text-sm md:text-base">
              <li>
                <a href="#" className="hover:text-orange-500 duration-300">
                  Benefits
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-orange-500 duration-300">
                  Features
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-orange-500 duration-300">
                  Pricing
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-orange-500 duration-300">
                  Process
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-orange-500 duration-300">
                  Testimonials
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t mt-16"></div>

        {/* Bottom */}
        <div className="mt-8 flex flex-col lg:flex-row items-center justify-between gap-6">
          {/* Copyright */}
          <p className="text-gray-500 text-sm text-center lg:text-left">
            © 2026 Clever. All rights reserved.
          </p>

          {/* Social Icons */}
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center hover:bg-orange-500 duration-300"
            >
              <FaFacebookF />
            </a>

            <a
              href="#"
              className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center hover:bg-orange-500 duration-300"
            >
              <FaInstagram />
            </a>

            <a
              href="#"
              className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center hover:bg-orange-500 duration-300"
            >
              <FaXTwitter />
            </a>

            <a
              href="#"
              className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center hover:bg-orange-500 duration-300"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
