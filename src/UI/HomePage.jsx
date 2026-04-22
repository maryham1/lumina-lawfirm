import About from "../Features/About/About";
import Area from "../Features/AreaSec/Area";
import Contact from "../Features/Contact/Contact";
import HeroSection from "../Features/Herosection/HeroSection";
import LegalAss from "../Features/LegalAss/LegalAss";
import NavBar from "../Features/NavBar/NavBar";
import Presence from "../Features/Presence/Presence";
import Reason from "../Features/ReasonSec/Reason";
import Team from "../Features/TeamSec/Team";
import DirectContact from "./DirectContact";

function HomePage() {
  return (
    <main className="overflow-x-hidden relative">
      <NavBar />
      <HeroSection />
      <About />
      <Reason />
      <Area />
      <LegalAss />
      <Team />
      <Presence />
      <Contact />
      <DirectContact />
    </main>
  );
}

export default HomePage;
