import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";

const Mainside = ({ handleOnClick }) => {
  

  return(
    <div className="mainside" onClick={handleOnClick}>
      <Routes>
        <Route  path={"/home"} element={<Home/>} />
      </Routes>
    </div>
  );
}

export default Mainside;