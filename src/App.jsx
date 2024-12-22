import React, { useEffect, useState } from "react";
import Main from "./components/Area/Main";
import Left from "./components/Area/Left";
import Right from "./components/Area/Right";
import Home from "./components/Home/Home";
import "./index.css";
import Social from "./components/Social/Social";
import Profile from "./components/Profile";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Languages from "./components/Languages";
import Projects from "./components/Projects";

const App = () => {
  const [isVisible, setIsVisible] = useState(true);

  const toggleVisibility = () => {
    if (window.pageYOffset > 50) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
  }, []);
  return (
    <>
      <Main>
        <Left>
          <Home />
          <Social />
          <Profile />
        </Left>
        <Right>
          <Education />
          <Experience />
          <Projects />
          <Languages />

          <Skills />
        </Right>
      </Main>
      {isVisible && (
        <span
          className="scrolltop show-scroll"
          onClick={scrollToTop}
          id="scroll-top">
          <i className="bx bxs-up-arrow-alt scrolltop__icon"></i>
        </span>
      )}
    </>
  );
};

export default App;
