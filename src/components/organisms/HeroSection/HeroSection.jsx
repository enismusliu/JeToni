import React from "react";
import heroSectionImg from "../../../assets/HeroSectionImg.png";
import "./HeroSection.css";

function HeroSection() {
  return (
    <div className="heroSection container">
      <div className="heroSectionPart1">
        <h1>Hi, I am John, Creative Technologist</h1>
        <p>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.
        </p>
        <button>Download Resume</button>
      </div>
      <div className="heroSectionPart2">
        <img src={heroSectionImg} alt="" />
      </div>
    </div>
  );
}

export default HeroSection;
