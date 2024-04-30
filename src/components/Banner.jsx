import React from "react";
import { ReactTyped } from "react-typed";
import Header from "./Header";
import Footer from "./Footer";

export default function Banner() {
  return (
    <div
      id="banner"
      className="bg-[#1F75FE] w-full h-screen left-0 right-0 py-[100px]"
    >
      <div className="max-w-[1240px] mx-auto font-bold my-[100px]">
        <div className="text-xl md:text-3xl mb-4">Learn with me</div>
        <h2 className="text-white text-3xl md:text-[60px]">Grow with me</h2>
        <div className="text-[20px] md:text-[60px] text-white">
          Learn
          <ReactTyped
            className="pl-4"
            strings={[
              "Web Development",
              "Digital Marketing",
              "SEO",
              "Cyber Security",
              "Ethical Hacking",
              "Machine Learning",
              "Artificial Intelligence",
            ]}
            typeSpeed={100}
            loop={true}
            backSpeed={120}
          />
          <br />
        </div>
        <button className="bg-black text-white p-3 rounded">Get Started</button>
      </div>
    </div>
  );
}
