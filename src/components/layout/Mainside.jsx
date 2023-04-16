import { Routes, Route, useLocation, useNavigate } from "react-router-dom";

import { useEffect } from "react";

import Home from "../pages/Home";

const Mainside = ({ handleOnClick }) => {
  const pathname = useLocation().pathname;
  const navigate = useNavigate();

  useEffect(() => {
    if (pathname === "/" || pathname.toLowerCase() === "/home") {
      navigate("/home");
    }
  }, [pathname]);

  return(
    <div className="mainside" onClick={handleOnClick}>
      <Routes>
        <Route exact path={"/home"} element={<Home/>} />
      </Routes>
    </div>
  );
}

export default Mainside;