import theCrown from "../../../assets/img/mainside/home/tvshows/thecrown.png";
import suits from "../../../assets/img/mainside/home/tvshows/suits.png";
import tbbt from "../../../assets/img/mainside/home/tvshows/tbbt.png";
import plus from "../../../assets/img/mainside/home/plus.png";
import loki from "../../../assets/img/mainside/home/popular/loki.png";
import chernobyl from "../../../assets/img/mainside/home/popular/chernobyl.png";
import rickandmorty from "../../../assets/img/mainside/home/popular/rickandmorty.png";
import quatroestrelas from "../../../assets/img/mainside/home/popular/estrelasquatro.png";
import cincoestrelas from "../../../assets/img/mainside/home/popular/estrelascinco.png";
import arrow from "../../../assets/img/rightside/arrow-white.svg";

import { useState } from "react";
import { useEffect } from "react";

const TvShows = () => {
  const [classImg, setClassImg] = useState("img1")
  const [count, setCount] = useState(1);



  useEffect(() => {
      const intervalId = setInterval(()=> {
        setCount((count) => {
          if (count >= 3) {
            return 1;
          } else {
            return count + 1;
          }
        });
      }, 5000);
      const handleKeyPress = (keypress) => {
        if (keypress.code === "ArrowRight") {
          setCount((prevState) => {
            if (prevState >= 3) {
              return 1;
            } else {
              return prevState + 1;
            }
          });
        } else if (keypress.code === "ArrowLeft") {
          setCount((prevState) => {
            if (prevState === 1) {
              return 3;
            } else {
              return prevState - 1;
            }
          });
        }
      }
      window.addEventListener("keydown", handleKeyPress);

      return () => {
        clearInterval(intervalId);
        window.removeEventListener("keydown", handleKeyPress);
      }
  }, []);

  useEffect(()=> {
    setClassImg(`img${count}`)
  }, [count]);

  return(
    <main className="home__tvshows">
      <div className="home__tvshows__slider">

        <h1>
          {
            classImg === "img1" ? "The Crown" : classImg === "img2" ? "The Big Bang Theory" : "Suits"
          }
        </h1>

        <div className="buttons-navigation">
          <button 
            onClick={() => {
              setCount(prevState => {
                if(prevState === 1) {
                  return 3;
                } else {
                  return prevState - 1;
                }
              });
            }} 
            className="arrow-left"
            >
            <img src={arrow} alt="Left" />
          </button>

          <button 
            onClick={() => {
              setCount(prevState => {
                if(prevState === 3) {
                  return 1;
                } else {
                  return prevState + 1;
                }
              });
            }}
            className="arrow-right"
            >
            <img src={arrow} alt="right" />
          </button>
        </div>

        <div className="watch-list-now">

          <button className="watch-list"> 
            <img src={plus} alt="Watchlist" />
            <span>Watchlist</span>
          </button>

          <button className="watch-now">
            Watch Now
          </button>

        </div>

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
          <div>
            <button className={classImg === "img1" ? "marcado" : ""} id="img1" onClick={() => setClassImg("img1")}></button>
            <button className={classImg === "img2" ? "marcado" : ""} id="img2" onClick={() => setClassImg("img2")}></button>
            <button className={classImg === "img3" ? "marcado" : ""} id="img3" onClick={() => setClassImg("img3")}></button>
          </div>
        </div>


      </div>
      <div className="home__tvshows__popularmovies">
        <h1 className="home__tvshows__popularmovies__title">
          Popular on WatchWise
        </h1>
        <div className="container__movie">

          <div className="movie">
            <img src={loki} alt="Loki" />

            <div className="info">
              <div className="container-um">
                <h2>
                  Loki
                </h2>
                <img src={quatroestrelas} alt="Quatro estrelas" />
              </div>

              <div className="container-dois">
                <p className="epegenero">
                  <span>
                    6 Ep
                  </span>
                  <span>
                    Superhero
                  </span>
                </p>
                <div className="buttons">
                  <button>
                    <img src={plus} alt="Add" />
                  </button>
                  <button>
                    Watch
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="movie">
            <img src={chernobyl} alt="Chernobyl" />

            <div className="info">
              <div className="container-um">
                <h2>
                  Chernobyl
                </h2>
                <img src={cincoestrelas} alt="Cinco estrelas" />
              </div>

              <div className="container-dois">
                <p className="epegenero">
                  <span>
                    5 Ep
                  </span>
                  <span>
                    Mini Series
                  </span>
                </p>
                <div className="buttons">
                  <button>
                    <img src={plus} alt="Add" />
                  </button>
                  <button>
                    Watch
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="movie">
            <img src={rickandmorty} alt="Rick And Morty" />

            <div className="info">
              <div className="container-um">
                <h2>
                  Rick and Morty
                </h2>
                <img src={cincoestrelas} alt="Cinco estrelas" />
              </div>

              <div className="container-dois">
                <p className="epegenero">
                  <span>
                    49 Ep
                  </span>
                  <span>
                    Fantasy
                  </span>
                </p>
                <div className="buttons">
                  <button>
                    <img src={plus} alt="Add" />
                  </button>
                  <button>
                    Watch
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default TvShows;