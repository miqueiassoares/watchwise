import { Link } from "react-router-dom";

import search from "../../assets/img/mainside/home/Search.svg";
import filter from "../../assets/img/mainside/home/Filter.svg";
import TvShows from "./home/TvShows";

const Home = () => {
  return (
    <div className="home">
      <header>
        <nav>
          <ul>
            <li>
              <Link>Movies</Link>
            </li>
            <li>
              <Link className="active">TV Shows</Link>
            </li>
            <li>
              <Link>Anime</Link>
            </li>
          </ul>
        </nav>
        <form autoComplete="off">
          <label htmlFor="Search">
            <img src={search} alt="Search" />
          </label>
          <input type="text" name="Search" id="Search" placeholder="Search" />
          <button>
            <img src={filter} alt="Filter" />
          </button>
        </form>
      </header>
      <TvShows />
    </div>
  );
}

export default Home;