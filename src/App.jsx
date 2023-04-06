import Leftside from "./components/layout/Leftside";
import Mainside from "./components/layout/Mainside";
import Rightside from "./components/layout/Rightside";

import { useState, useEffect } from "react";

const useClosedOpen = () => {
  const [side, setSide] = useState(true);
  const closedOpen = () => {
    setSide(!side);
  }
  return [side, closedOpen];
}

function App() {
  const [rightSide, setRightSide] = useClosedOpen();
  const [leftSide, setLeftSide] = useClosedOpen();
  
  window.addEventListener("resize", () => {
    if(window.innerWidth < 800) setRightSide(false);
  });
  return (
    <div className={`App ${!leftSide ? "leftrecolhido" : ""}  ${!rightSide ? "rightrecolhido" : ""}`}>
      <Leftside  handleClosed={setLeftSide}/>
      <Mainside/>
      <Rightside handleClosed= {setRightSide} />
    </div>
  )
}

export default App;
