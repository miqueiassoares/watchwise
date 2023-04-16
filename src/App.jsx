import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import Leftside from "./components/layout/Leftside";
import Mainside from "./components/layout/Mainside";
import Rightside from "./components/layout/Rightside";

const useClosedOpen = () => {
  const [side, setSide] = useState(true);

  const closedOpen = (value) => {
    if (value.target) {
      setSide((prevState) => !prevState);
    } else {
      setSide(value);
    }
  };

  return [side, closedOpen];
};

const App = () => {
  const [rightSide, setRightSide] = useClosedOpen();
  const [leftSide, setLeftSide] = useClosedOpen();
  const [className, setClassName] = useState("");
  const [width, setWidth] = useState(window.innerWidth);
  const pathname = useLocation().pathname;
  const navigate = useNavigate();

  useEffect(() => {
    if (pathname === "/" || pathname === "/home") {
      navigate("/home");
    }
  }, [pathname]);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (width <= 800) {
      if (leftSide) {
        setRightSide(false);
        setClassName("leftAberto");
      } else if (!leftSide && !rightSide) {
        setClassName("twoSides");
      }
    }
  }, [leftSide, rightSide, width]);

  useEffect(() => {
    if (width > 800) {
      if (!rightSide) {
        setClassName("rightrecolhidoFull");
      } else {
        setClassName("");
      }
    } else if (width <= 800) {
      if (rightSide) {
        setLeftSide(false);
        setClassName("rightAberto");
      } else if (!rightSide && !leftSide) {
        setClassName("twoSides");
      }
    }
  }, [leftSide, rightSide, width]);

  function clickMain() {
    if (width <= 800) {
      setLeftSide(false);
      setRightSide(false);
    }
  }

  return (
    <div className={`App ${className}`}>
      <Leftside handleClosed={setLeftSide} />
      <div className="container__main__right">

        <Mainside handleOnClick={clickMain} />

        <Rightside handleClosed={setRightSide} />
        
      </div>
    </div>
  );
};

export default App;