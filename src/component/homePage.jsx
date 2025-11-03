import HeroSection from "./heroSection";
import Mycarousel from "./myCarousel";
import MyFooter from "./myFooter";
import MyNavbar from "./myNavbar";
import Steps from "./steps";

const HomePage = () => {
  return (
    <>
      <MyNavbar />
      <HeroSection />
      <Steps />
      <Mycarousel />
      <MyFooter />
    </>
  );
};
export default HomePage;
