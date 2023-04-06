import Leftside from "./components/layout/Leftside";
import Mainside from "./components/layout/Mainside";
import Rightside from "./components/layout/Rightside";

import { useState, useEffect } from "react";

const useClosedOpen = () => {
  const [side, setSide] = useState(true);
  const closedOpen = (valor) => {
    if (valor.target) {
      setSide(!side);
      console.log(side);
      return;
    }
    setSide(valor);
  }
  return [side, closedOpen];
}



const App = () => {
  const [rightSide, setRightSide] = useClosedOpen();
  const [leftSide, setLeftSide] = useClosedOpen();
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    if(width <= 800) {
      setLeftSide(false);
      setRightSide(false);
    }
  }, []);
  window.addEventListener("resize", () => {
    setWidth(window.innerWidth);
    if (width <= 800) {
      setLeftSide(false);
      setRightSide(false);
    } else {
      setLeftSide(true);
      setRightSide(true);
    }
  });
  return (
    <div className={`App ${!leftSide ? "leftrecolhido" : ""}  ${!rightSide ? "rightrecolhido" : ""}`}>
      <Leftside  handleClosed={setLeftSide} />
      <Mainside/>
      <Rightside handleClosed= {setRightSide} />
    </div>
  )
}

export default App;
