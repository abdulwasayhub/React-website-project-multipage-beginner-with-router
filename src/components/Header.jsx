import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="bg-[#002E63] p-4">
      <div className="max-w-[1240] py-[12px] items-center flex justify-between mx-auto">
        <div className="text-3xl text-white font-bold">
          React with Abdul Wasay
        </div>

        <ul className={`md:flex md:gap-10 ${toggle ? "" : "hidden"}`}>
          {/* Use Link components for navigation */}
          <li>
            <Link to="/" className="text-white">
              Home
            </Link>
          </li>

          <li>
            <Link to="/about" className="text-white">
              About
            </Link>
          </li>
          <li>
            <Link to="/subscribe" className="text-white">
              Subscribe
            </Link>
          </li>
          <li>
            <Link to="/courses" className="text-white">
              Courses
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
