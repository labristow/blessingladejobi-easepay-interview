import React from "react";
import Image from "next/image";
import Logo from "../../assets/svgs/logo.svg";
import Topbar from "../topbar/Topbar";
import Link from "next/link";

interface INavItems {
  text: string;
  path: string;
}
const navItems: INavItems[] = [
  { text: "Use Cases", path: "#use-cases" },
  { text: "Products", path: "#products" },
  { text: "Company", path: "#company" },
  { text: "Support", path: "#support" },
];
function Navbar() {
  return (
    <div className="w-full h-auto bg-primary bg-opacity-10 backdrop-blur transition-all duration-300 sticky top-0 z-50">
      <Topbar />
      <nav className="navbar sticky bg-primary top-0 h-[88px] w-full px-[160px] flex items-center justify-between z-30">
        <div className="h-full flex items-center border-b border-gray-900">
          <Link href={""}>
            <Image src={Logo} alt="" />
          </Link>
        </div>
        <ul className="nav-items hidden md:flex items-center gap-14">
          {navItems.map(({ text, path }, id) => (
            <Link href={path} key={id}>
              <span className="text-white flex whitespace-nowrap">{text}</span>
            </Link>
          ))}
        </ul>

        <div className="call-to-action hidden md:flex items-center">
          <Link href={"#login"}>
            <span className="text-white whitespace-nowrap h-12 w-[96px] flex items-center justify-center">
              Log In
            </span>
          </Link>
          <Link href={"#signup"}>
            <span className="text-white whitespace-nowrap h-12 w-[96px] navbar-btn flex items-center justify-center">
              Sign Up
            </span>
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
