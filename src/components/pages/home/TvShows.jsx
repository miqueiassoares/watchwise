import theCrown from "../../../assets/img/mainside/home/tvshows/thecrown.png";
import suits from "../../../assets/img/mainside/home/tvshows/suits.png";
import tbbt from "../../../assets/img/mainside/home/tvshows/tbbt.png";
import { useState } from "react";
import { useEffect } from "react";

const TvShows = () => {
  const [classImg, setClassImg] = useState("img1")
  const [count, setCount] = useState(1);


  useEffect(() => {
      const intervalId = setInterval(()=> {
        setCount((count) => {
          if (count === 3) {
            return 1;
          } else {
            return count + 1;
          }
        });
      }, 5000);
      
      return () => {
        clearInterval(intervalId);
      }
  }, []);

  useEffect(()=> {
    setClassImg(`img${count}`)
  }, [count])




  return(
    <main className="home__tvshows">
      <div className="home__tvshows__slider">

        <div className={`slides ${classImg}`}>
          <div className="slide" id="slide1">
              <img src={theCrown} alt="The Crown" />
          </div>
          <div className="slide" id="slide2">
          <img src={tbbt} alt="The big Bang Theory" />
            </div>
          <div className="slide" id="slide3">
            <img src={suits} alt="Suits" />
          </div>
        </div>

        <div className="manual-navigation">
          <button id="img1" onClick={() => setClassImg("img1")}></button>
          <button id="img2" onClick={() => setClassImg("img2")}></button>
          <button id="img3" onClick={() => setClassImg("img3")}></button>
        </div>


      </div>
      <div className="home__tvshows__popularmovies">
        <h1 className="home__tvshows__popularmovies__title">
          Popular on WatchWise
        </h1>
        <div className="container__movie">
          <div className="movie"></div>
          <div className="movie"></div>
          <div className="movie"></div>
        </div>
      </div>
    </main>
  );
}

export default TvShows;