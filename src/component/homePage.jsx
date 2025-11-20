import { Fire } from "react-bootstrap-icons";
import HeroSection from "./heroSection";
import Mycarousel from "./myCarousel";
import MyFooter from "./myFooter";
import MyNavbar from "./myNavbar";
import PillNav from "./PillNav/PillNav";
import Steps from "./steps";
import "../assets/fire.svg";
import RegisterButton from "./registerButton";
import SignInButton from "./signInButton";
const HomePage = () => {
  return (
    <>
      {/* <MyNavbar /> */}
      <div className=" d-flex justify-content-center">
        <PillNav
          logo={"src/assets/fire.svg"}
          logoAlt="Company Logo"
          items={[
            { label: "ASTA", href: "/impostazioni-asta" },
            { label: "STRATEGIA", href: "/strategia" },
            { label: "CAMPETTO", href: "/campetto" },
            { label: "PROFILO", href: "/profile" },
          ]}
          activeHref="/"
          className="custom-nav"
          ease="power2.easeOut"
          baseColor="#dda60eff"
          pillColor="#212529"
          hoveredPillTextColor="#ffffff"
          pillTextColor="#fcf9f9ff"
        />
      </div>
      <div className="d-flex flex-row-reverse">
        <RegisterButton />
        <SignInButton />
      </div>
      <HeroSection />
      <Steps />
      <Mycarousel />
      <MyFooter />
    </>
  );
};
export default HomePage;
