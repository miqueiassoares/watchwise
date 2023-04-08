import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import Home from "../pages/Home";
import { useEffect } from "react";

const Mainside = ({ handleOnClick }) => {
  const pathname = useLocation().pathname;
  const navigate = useNavigate();

  useEffect(() => {
    if (pathname === "/") {
      navigate("/home");
    }
  }, [pathname]);

  return(
    <div className="mainside" onClick={handleOnClick}>
      <Routes>
        <Route  path={"/home"} element={<Home/>} />
      </Routes>
    </div>
  )
}

export default Mainside;