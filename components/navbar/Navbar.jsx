import React from "react";
import Image from "next/image";
import Logo from "../../assets/svgs/logo.svg";

function Navbar() {
  return (
    <nav className="sticky top-0 h-[88px] w-full px-[320px] flex items-center">
      <div className="navbar flex items-center">
        <Image src={Logo} alt="" />
      </div>
    </nav>
  );
}

export default Navbar;
