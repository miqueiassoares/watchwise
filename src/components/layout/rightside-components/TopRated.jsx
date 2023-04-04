import ArrowWhite from "../../../assets/img/rightside/arrow-white.svg";
import Add from "../../../assets/img/rightside/Add-icon.png"

const TopRated = () => {
  return(
    <div className="continue">
      <div className="continue__controls">
        <h2 className="continue__controls__title">Top Rated</h2>
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
      <div className="toprated__series">
        <div className="toprated__series__serie">
          <h3>Supernatural</h3>
          <div className="info">
            <span className="eps">320 Ep</span>
            <span className="genero">Horror, Fantasy</span>
          </div>
          <div className="buttons">
            <button className="add">
              <img src={Add} alt="Add" />
            </button>
            <button className="watch">
              Watch
            </button>
          </div>
        </div>
        <div className="toprated__series__serie">
          <h3>Rick and Morty</h3>

          <div className="info">
            <span className="eps">49 Ep</span>
            <span className="genero">Sitcom</span>
          </div>

          <div className="buttons">
            <button className="add">
              <img src={Add} alt="Add" />
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