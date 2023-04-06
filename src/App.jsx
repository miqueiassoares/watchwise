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
  const [classe, setClasse] = useState("");

  
  useEffect(() => {
    if (!leftSide && !leftSide) {
      setClasse("twoSides");
    }  else if (leftSide) {
      setClasse("leftAberto");
      setRightSide(false);
    } else {
      setClasse("");
    }
  }, [leftSide]);
  
  useEffect(() => {
    if (width > 800 && !rightSide) {
      setClasse("rightrecolhidoFull");
    } else if (!leftSide && !rightSide) {
      setClasse("twoSides");
    } else if (width <= 800 && rightSide) {
      setClasse("rightAberto");
      setLeftSide(false);
    } else {
      setClasse("");
    }
  }, [rightSide]);
  
  window.addEventListener("resize", () => {
    setWidth(window.innerWidth);
    if (width <= 800) {
      setClasse("twoSides");
    } else {
      setClasse("");
    }
  });

  useEffect(()=> {
    if (width <= 800) {
      setLeftSide(false);
      setRightSide(false);
      setClasse("twoSides");
    }
  }, []);

  return (
    <div className={`App  ${classe}`}>
      <Leftside  handleClosed={setLeftSide} />
      <Mainside/>
      <Rightside handleClosed= {setRightSide} />
    </div>
  )
}

export default App;
