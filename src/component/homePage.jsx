import { Check, CheckLg, Fire } from "react-bootstrap-icons";
import HeroSection from "./heroSection";
import Mycarousel from "./myCarousel";
import MyFooter from "./myFooter";
import MyNavbar from "./myNavbar";
import PillNav from "./PillNav/PillNav";
import Steps from "./steps";
import "../assets/fire.svg";
import RegisterButton from "./registerButton";
import SignInButton from "./signInButton";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Logout } from "../redux/actions/logoutAction";
import { Alert, DropdownButton, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../style/homePage.css";
const HomePage = () => {
  const dispatch = useDispatch();
  const [visible, setVisible] = useState(false);

  const user = useSelector((state) => {
    return state.signIn.user;
  });

  const signInState = useSelector((state) => {
    return state.signIn.isAuthenticated;
  });
  console.log("stato signin", signInState);
  useEffect(() => {
    if (signInState) {
      setVisible(true);
      const timer = setTimeout(() => {
        return setVisible(false);
      }, 2000);
      return () => clearTimeout(timer);
    } else {
      setVisible(false);
    }
  }, [signInState]);
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
      {!signInState ? (
        <div className="d-flex flex-row-reverse">
          <RegisterButton />
          <SignInButton />
        </div>
      ) : (
        <>
          {visible && (
            <Alert
              variant="warning"
              className=" position-fixed start-50 text-center z-3 translate-middle fw-bold  mt-5 "
              style={{ top: "3em" }}
            >
              Login effettuato
              <CheckLg className=" ms-1 fs-5 text-success" />
            </Alert>
          )}
          <div className="d-flex flex-row-reverse me-5 ">
            <DropdownButton
              variant="warning"
              className="text-center me-1 mt-3  "
              title={
                <h6>
                  Ciao, <span className=" fw-bold"> {user?.nome || "..."}</span>
                </h6>
              }
              drop="start"
              // showCaret={false}
            >
              <Link className=" dropdown-item" to={"/profile"}>
                Profilo
              </Link>

              <NavDropdown.Item href="#action/3.1">
                Termini e Condizioni
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <Link
                to={"/"}
                className=" dropdown-item logout text-center"
                onClick={() => {
                  dispatch(Logout());
                }}
              >
                {" "}
                Logout
              </Link>
            </DropdownButton>
          </div>
        </>
      )}

      <HeroSection />
      <Steps />
      <Mycarousel />
      <MyFooter />
    </>
  );
};
export default HomePage;
