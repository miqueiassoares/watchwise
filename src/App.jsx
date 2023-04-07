// import Leftside from "./components/layout/Leftside";
// import Mainside from "./components/layout/Mainside";
// import Rightside from "./components/layout/Rightside";

// import { useState, useEffect } from "react";

// const useClosedOpen = () => {
//   const [side, setSide] = useState(true);
//   const closedOpen = (valor) => {
//     if (valor.target) {
//       setSide(!side);
//       return;
//     }
//     setSide(valor);
//   }
//   return [side, closedOpen];
// }


// const App = () => {
//   const [rightSide, setRightSide] = useClosedOpen();
//   const [leftSide, setLeftSide] = useClosedOpen();
//   const [width, setWidth] = useState(window.innerWidth);
//   const [classe, setClasse] = useState("");

  
//   useEffect(() => {
//     if (width <= 800) {
//       if (leftSide) {
//         if (rightSide) {
//           setRightSide(false)
//         }
//         setClasse("leftAberto");
//       } else if (!leftSide) {
//         if (!rightSide) {
//           setClasse("twoSides");
//         }
//       }
//     }
//   }, [leftSide]);
  
//   useEffect(() => {
//     if (width > 800) {
//       if (!rightSide) {
//         setClasse("rightrecolhidoFull");
//       } else {
//         setClasse("");
//       }
//     } else if (width <= 800) {
//       if (rightSide) {
//         if(leftSide) {
//           setLeftSide(false);
//         }
//         setClasse("rightAberto");
//       } else if (!rightSide) {
//         if (!leftSide) {
//           setClasse("twoSides");
//         }
//       }
//     }
//   }, [rightSide]);
  
//   window.addEventListener("resize", () => {
//     if (window.innerWidth <= 800) {
//       setLeftSide(false);
//       setRightSide(false);
//       console.log(rightSide, leftSide);
//     } else {
//       setLeftSide(true);
//       setRightSide(true);
//       setClasse("");
//       console.log(rightSide, leftSide);
//     }
//   });

//   useEffect(()=> {
//     if (width <= 800) {
//       setLeftSide(false);
//       setRightSide(false);
//     }
//   }, []);

//   return (
//     <div className={`App  ${classe}`}>
//       <Leftside  handleClosed={setLeftSide} />
//       <Mainside/>
//       <Rightside handleClosed= {setRightSide} />
//     </div>
//   )
// }

// export default App;

import { useState, useEffect } from "react";
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

  return (
    <div className={`App ${className}`}>
      <Leftside handleClosed={setLeftSide} />
      <Mainside />
      <Rightside handleClosed={setRightSide} />
    </div>
  );
};

export default App;