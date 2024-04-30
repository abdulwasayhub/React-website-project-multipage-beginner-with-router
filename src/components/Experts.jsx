import React from "react";
import laptop from "../assets/laptop.jpg";
import Header from "./Header";
import Footer from "./Footer";

export default function Experts() {
  return (
    <div
      id="experts"
      className="max-w-[1240px] my-10 mx-auto p:2  md:grid grid-cols-2"
    >
      <div className=" col-span-1 md:w-[80%]">
        <img src={laptop} alt="" className="inline" />
      </div>
      <div className=" flex flex-col items-center justify-center col-span-1 ">
        <h1 className="text-[#00df9a] font-bold my-2">Learn from me</h1>
        <p className="my-2 text-justify">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt
          animi accusantium corporis illo laborum asperiores inventore, quasi,
          molestiae, eveniet blanditiis minima ut cum quia! Numquam harum sit
          deserunt maiores nihil.
        </p>
        <button className="bg-black text-white p-3 rounded">Get Started</button>
      </div>
    </div>
  );
}
