import { gsap } from "gsap";
import React, { useEffect } from "react";
import Image from "next/image";
import ArrowIcon from "../../assets/svgs/arrow.svg";
import HeroImage from "../../assets/svgs/hero-image.svg";
import Partner1 from "../../assets/svgs/techcrunch.svg";
import Partner2 from "../../assets/svgs/forbes.svg";
import Partner3 from "../../assets/svgs/entrepreneur.svg";
import Partner4 from "../../assets/svgs/techtime.svg";
import Partner5 from "../../assets/svgs/thewallstreet.svg";

function HeroContainer() {
  useEffect(() => {
    const tl = gsap.timeline({
      repeat: -1,
      repeatDelay: 3,
    });
    tl.fromTo(
      ".wrapper",
      {
        y: 0,
      },
      {
        y: -110,
        duration: 2,
        delay: 3,
      }
    )
      .to(".wrapper", {
        y: -220,
        duration: 2,
        delay: 3,
      })
      .to(".wrapper", {
        y: -330,
        duration: 2,
        delay: 3,
      })
      .to(".wrapper", {
        y: 0,
        duration: 2,
        delay: 3,
      });
  }, []);

  return (
    <div className="w-full h-screen px-[320px]">
      <div className="hero-inner-text mt-[80px]">
        <h2 className="font-primary hero-h2 text-white">
          Business banking with
        </h2>
        <div className="animation-container h-24 overflow-hidden">
          <div className="wrapper">
            <h1 className="hero-h1">Zero Fees</h1>
            <h1 className="hero-h1">Free Wires</h1>
            <h1 className="hero-h1">Unlimited Rewards</h1>
            <h1 className="hero-h1">No credit Check</h1>
          </div>
        </div>
        <h4 className="text-lg text-gray-200 w-3/4 my-4 ...">
          Thousands of entrepreneurs bank on Winden to start or grow their
          business. Open an account in under 3 minutes.
        </h4>
        <button className="h-[56px] w-[192px] flex justify-center items-center rounded-md bg-[#6936F5] text-white">
          Get Started
          <Image src={ArrowIcon} alt="" />
        </button>
      </div>

      <div className="w-full h-screen">
        <Image src={HeroImage} alt="" />
        <div className="h-24 w-full flex items-center justify-between">
          <Image src={Partner1} alt="" className="w-full scale-75" />
          <Image src={Partner2} alt="" className="w-full scale-75" />
          <Image src={Partner3} alt="" className="w-full scale-75" />
          <Image src={Partner4} alt="" className="w-full scale-75" />
          <Image src={Partner5} alt="" className="w-full scale-75" />
        </div>
      </div>
    </div>
  );
}

export default HeroContainer;
