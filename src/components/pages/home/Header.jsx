import { Link } from "react-router-dom";

import search from "../../../assets/img/mainside/home/Search.svg";
import filter from "../../../assets/img/mainside/home/Filter.svg";

const Header = () => {
  return(
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
  );
}

export default Header;