import supernatural from "../../../assets/img/rightside/filmes/supernatural.png";
import rickandmorty from "../../../assets/img/rightside/filmes/rickandmorty.png";

import ArrowWhite from "../../../assets/img/rightside/arrow-white.svg";
import plus from "../../../assets/img/mainside/home/plus.png";
import { useState } from "react";

const TopRated = () => {
  const [avancar, setAvancar] = useState(false);

  return(
    <div className="continue">
      <div className="continue__controls">
        <h2 className="continue__controls__title">Top Rated</h2>
        <div className={`continue__controls__avancar__recuar ${avancar ? "ativado" : ""}`}>
          <button 
            className="lado-esquerdo"
            onClick={() => {
              setAvancar(false);
            }}
            >
            <img src={ArrowWhite} alt="left" />
          </button>
          <button 
            className="lado-direito"
            onClick={() => {
              setAvancar(true);
            }}
            >
            <img src={ArrowWhite} alt="left" />
          </button>
        </div>
        <div className="seemore">
          <span>See More</span>
          <img src={ArrowWhite} alt="See More" />
        </div>
      </div>
      <div className="toprated__series">
        <div className="toprated__series__serie right-serie" id={avancar ? "avancar" : ""}>
          <img src={supernatural} alt="Supernatural" className="filme" />
          <h3>Supernatural</h3>
          <div className="info">
            <span className="eps">320 Ep</span>
            <span className="genero">Horror, Fantasy</span>
          </div>
          <div className="buttons">
            <button className="add">
              <img src={plus} alt="Add" />
            </button>
            <button className="watch">
              Watch
            </button>
          </div>
        </div>
        <div className="toprated__series__serie">
          <img src={rickandmorty} alt="Rick and Morty" className="filme" />
          <h3>Rick and Morty</h3>

          <div className="info">
            <span className="eps">49 Ep</span>
            <span className="genero">Sitcom</span>
          </div>

          <div className="buttons">
            <button className="add">
              <img src={plus} alt="Add" />
            </button>
            
            <button className="watch">
              Watch
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopRated;