import React from "react";
import Header from "./Header";
import Footer from "./Footer";

export default function NewsLetter() {
  return (
    <div id="newsletter" className="bg-[#00B9FB] p-14">
      <div className="max-w-[1240px] md:flex mx-auto justify-between py-[50px]">
        <div className="m-2">
          <h1 className="text-[20px] md:text-[40px] font-bold text-white">
            Want to learn new IT development skills
          </h1>
          <span className="text-white">
            Sign up to newsletter and stay update
          </span>
        </div>
        <div className="m-2">
          <input
            type="text p-3 sm:w-full mr-2 text-slate-300 rounded mb-2"
            placeholder="Email"
          />
          <button className="bg-black text-white p-3 rounded">
            Get Started
          </button>
          <br />
          <p className="text-white">
            I care about the protection of your data. Read my
            <br />{" "}
            <a href="" className="text-black">
              Privacy Policy
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
