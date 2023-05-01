import { gsap } from "gsap";
import React, { useEffect, useRef } from "react";
import bgVideo from "../../public/video/hero-background.mp4";
import Image from "next/image";
import ArrowIcon from "../../assets/svgs/arrow.svg";
import HeroPhoneImage from "../../assets/svgs/hero-phone-image.svg";
import HeroDashboardImage from "../../assets/svgs/hero-dashboard-image.svg";
import Partner1 from "../../assets/svgs/techcrunch.svg";
import Partner2 from "../../assets/svgs/forbes.svg";
import Partner3 from "../../assets/svgs/entrepreneur.svg";
import Partner4 from "../../assets/svgs/techtime.svg";
import Partner5 from "../../assets/svgs/thewallstreet.svg";
import { SVGS } from "@/assets/svgs/SVGS";

function HeroContainer() {
  const heroVideoRef = useRef("");

  useEffect(() => {
    const tl = gsap.timeline({
      repeat: -1,
      repeatDelay: 3,
    });
    tl.fromTo(
      ".wrapper",
      {
        y: -10,
      },
      {
        y: -115,
        duration: 2,
        delay: 3,
      }
    )
      .to(".wrapper", {
        y: -218,
        duration: 2,
        delay: 3,
      })
      .to(".wrapper", {
        y: -325,
        duration: 2,
        delay: 3,
      })
      .to(".wrapper", {
        y: -10,
        duration: 2,
        delay: 3,
      });

    heroVideoRef.current.addEventListener("ended", () => {
      setTimeout(() => {
        heroVideoRef.current.currentTime = 0;
        playVideoHandler();
      }, 3000);
    });
  }, []);

  const playVideoHandler = () => {
    heroVideoRef.current.play();
  };

  return (
    <div className="w-full h-auto relative">
      <div className="w-full relative z-10 -mt-40 pt-56 md:pt-64 h-[80vh] md:h-[120vh] bg-primary flex flex-col items-center">
        <div className="absolute top-0 left-0 w-full h-full">
          <video
            ref={heroVideoRef}
            className="hero-video"
            width="2560px"
            height="100px"
            playsInline=""
            // loop
            muted
            autoPlay
            disablePictureInPicture
            // preload="metadata"
          >
            <source src={bgVideo} type='video/mp4; codecs="hvc1"'></source>
            <source src={bgVideo} type="video/webm"></source>
            {/* Sorry, your browser doesn't support embedded videos. */}
          </video>
        </div>

        <div className="hero-inner-text w-full px-6 md:px-0 md:max-w-[940px] relative z-20">
          <h2 className="font-primary hero-h2 text-white relative z-20">
            Business banking with
          </h2>
          <div className="animation-container h-20 overflow-hidden">
            <div className="wrapper">
              <h1 className="hero-h1 whitespace-nowrap">Zero Fees</h1>
              <h1 className="hero-h1 whitespace-nowrap">Free Wires</h1>
              <h1 className="hero-h1 whitespace-nowrap">Unlimited Rewards</h1>
              <h1 className="hero-h1 whitespace-nowrap">No credit Check</h1>
            </div>
          </div>
          <h4 className="text-lg text-gray-200 w-full md:w-3/4 my-4 ...">
            Thousands of entrepreneurs bank on Winden to start or grow their
            business. Open an account in under 3 minutes.
          </h4>
          <button className="h-[56px] w-[192px] relative z-10 flex justify-center items-center bg-[#6936F5] text-white">
            Get Started
            <Image src={ArrowIcon} alt="" />
          </button>
          <div className="flex items-center gap-2 mt-6">
            <SVGS.ApprovalIcon />
            <p className="text-white text-sm">
              Sign up today and earn up to $200. Conditions apply. **
            </p>
          </div>
        </div>
      </div>

      <div className="w-full h-auto relative z-20 px-6 md:px-0 -mt-[24%] flex justify-center">
        <Image
          src={HeroDashboardImage}
          alt=""
          className="w-full h-[36vh] md:h-[165vh]"
        />
        <Image src={HeroPhoneImage} alt="" className="absolute -bottom-[16%]" />
      </div>
      <div className="h-auto md:h-[80vh] py-20 w-full flex flex-wrap md:flex-nowrap items-center justify-between px-6 md:px-[12%]">
        <Image src={Partner1} alt="" className="w-full scale-50 md:scale-75" />
        <Image src={Partner2} alt="" className="w-full scale-50 md:scale-75" />
        <Image src={Partner3} alt="" className="w-full scale-50 md:scale-75" />
        <Image src={Partner4} alt="" className="w-full scale-50 md:scale-75" />
        <Image src={Partner5} alt="" className="w-full scale-50 md:scale-75" />
      </div>
    </div>
  );
}

export default HeroContainer;
