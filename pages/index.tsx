import Topbar from "../components/topbar/Topbar";
import Navbar from "../components/navbar/Navbar";
import HeroContainer from "../components/hero/HeroContainer";

export default function Home() {
  return (
    <div className={`w-full h-screen overflow-y-auto`}>
      <Navbar />
      <HeroContainer />
    </div>
  );
}
