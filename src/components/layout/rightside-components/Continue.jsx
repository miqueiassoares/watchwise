import ArrowWhite from "../../../assets/img/rightside/arrow-white.svg";
import desenho from "../../../assets/img/rightside/filmes/Desenho.png";
import WandaVision from "../../../assets/img/rightside/filmes/WandaVision.png";


const Continue = () => {
  return(
    <div className="continue">
      <div className="continue__controls">
        <h2 className="continue__controls__title">Continue</h2>
        <div className="continue__controls__avancar__recuar">
          <button className="lado-esquerdo">
            <img src={ArrowWhite} alt="left" />
          </button>
          <button className="lado-direito">
            <img src={ArrowWhite} alt="left" />
          </button>
        </div>
        <div className="seemore">
          <span>See More</span>
          <img src={ArrowWhite} alt="See More" />
        </div>
      </div>
      <div className="continue__movies">
        <div className="continue__movies__movie">
          <img src={WandaVision} alt="WandaVision" />
          <div className="info">
            <h3>WandaVision</h3>
            <p>1 Episode left</p>
            <div className="progresse-bar">
              <span></span>
            </div>
          </div>
          <button className="drop">Drop</button>
          <button className="watch">Watch</button>
        </div>
        <div className="continue__movies__movie">
          <img src={desenho} alt="Harley Quinn" />
          <div className="info">
            <h3>Harley Quinn</h3>
            <p>25 Episode left</p>
            <div className="progresse-bar">
              <span></span>
            </div>
          </div>
          <button className="drop">Drop</button>
          <button className="watch">Watch</button>
        </div>
      </div>
    </div>
  );
}

export default Continue;