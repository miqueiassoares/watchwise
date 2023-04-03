import { useState } from "react";
import ArrowWhite from "../../../assets/img/rightside/arrow-white.svg";
import ArrowGray from "../../../assets/img/rightside/arrow-gray.svg";

const Continue = () => {
  const [avancar, setAvancar] = useState(true);
  return(
    <div className="continue">
      <div className="continue__controls">
        <h2 className="continue__controls__title">Continue</h2>
        <div className="continue__controls__avancar__recuar">
          <button className="lado-esquerdo">
            {

            }
          </button>
          <button className="lado-direito">
            {

            }
          </button>
        </div>
      </div>
    </div>
  );
}

export default Continue;