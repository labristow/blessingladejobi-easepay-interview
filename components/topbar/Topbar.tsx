import React, { useState } from "react";
import Image from "next/image";
import { SVGS } from "@/assets/svgs/SVGS";
import { gsap } from "gsap";

function Topbar() {
  // const [isVisible, setIsVisible] = useState<boolean>(true);
  const hideTopbar = () => {
    const tl = gsap.timeline();
    tl.to(".topbar", {
      opacity: 0,
      animation: 1,
    })
      .to(".navbar", {
        y: -40,
      })
      .to(".topbar-close-btn", {
        display: "none",
      });
  };
  return (
    <div className="topbar topbar-bg flex w-full h-9 relative items-center justify-center">
      <div className="w-full flex items-center justify-center relative z-20">
        <p className="text-sm text-white font-medium">
          **Earn up to $200 for getting started
        </p>
        <SVGS.ArrowIcon />
      </div>
      <button
        onClick={hideTopbar}
        className="topbar-close-btn absolute right-2 z-20"
      >
        <SVGS.CloseIcon />
      </button>
    </div>
  );
}

export default Topbar;
