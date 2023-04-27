import React from "react";
import Image from "next/image";
import ArrowIcon from "../../assets/svgs/arrow.svg";
import topbarImg from "../../assets/svgs/topbar.svg";

function Topbar() {
  return (
    <div className="flex w-full h-9 relative items-center justify-center">
      <Image src={topbarImg} alt="" className="absolute top-0 left-0" />
      <div className="flex items-center relative z-20">
        <p className="text-sm text-white font-medium">
          **Earn up to $200 for getting started
        </p>
        <Image src={ArrowIcon} alt="" className="" />
      </div>
    </div>
  );
}

export default Topbar;
