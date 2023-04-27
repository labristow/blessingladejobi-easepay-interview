import Topbar from "../components/topbar/Topbar";
import Navbar from "../components/navbar/Navbar";
import HeroContainer from "../components/hero/HeroContainer";
import { Rubik } from "next/font/google";

const inter = Rubik({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className={`w-full h-screen bg-[#0B081B] ${inter.className}`}>
      <Topbar />
      <Navbar />
      <HeroContainer />
    </div>
  );
}
