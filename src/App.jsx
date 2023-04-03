import Leftside from "./components/layout/Leftside";
import Mainside from "./components/layout/Mainside";
import Rightside from "./components/layout/Rightside";

import { useState } from "react";

function App() {
  const [rightSide, setRightSide] = useState(true);

  const closedOpen = () => {
    setRightSide(!rightSide);
  }

  return (
    <div className={`App ${!rightSide ? "recolhido" : ""}`}>
      <Leftside />
      <Mainside />
      <Rightside handleClosed={closedOpen} />
    </div>
  )
}

export default App;
