import React from "react";
import { PiVirus } from "react-icons/pi";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="text-white bg-blue-900 border-b border-gray-500/70">
      <div className="container flex items-center justify-between">
        <Link to={"/"} className="flex items-center gap-3">
          <PiVirus className="text-4xl text-pink-600" />
          <span className="text-xl font-semibold">Covid-19</span>
        </Link>

        <nav className="flex gap-4">
          <Link to={"/"}>Home</Link>
          <Link to={"/"}>Results</Link>
          <Link to={"/"} className="max-md:hidden">
            About
          </Link>
          <Link to={"/"} className="max-md:hidden">
            Comunication
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
