import homeIcon from "../../../assets/img/leftside/Home.svg";
import awardIcon from "../../../assets/img/leftside/Award.svg";
import celebritiesIcon from "../../../assets/img/leftside/Celebrities.svg";
import discoverIcon from "../../../assets/img/leftside/Discover.svg";
import recentIcon from "../../../assets/img/leftside/library/Recent.svg";
import topRatedIcon from "../../../assets/img/leftside/library/TopRated.svg";
import downloadedIcon from "../../../assets/img/leftside/library/Downloaded.svg";
import playlistsIcon from "../../../assets/img/leftside/library/Playlists.svg";
import watchlistIcon from "../../../assets/img/leftside/library/Watchlist.svg";
import completedIcon from "../../../assets/img/leftside/library/Completed.svg";
import settingsIcon from "../../../assets/img/leftside/general/Settings.svg";
import logOutIcon from "../../../assets/img/leftside/general/LogOut.svg";
import { Link, useLocation } from "react-router-dom";


const Navigation = ({ title, itens }) => {
  const pathname = useLocation().pathname;

  return (
    <div className="leftside__navigation">
      <h1>{title}</h1>
      <ul className="leftside__navigation__list">
        {itens.map((item, index) => {
          const path = `/${item.toLowerCase().replace(/\s+/g, '')}`;
          return (
          <li key={index}>
            <Link to={path} className={pathname === path ? "active" : ""} >
              <img
                className="leftside__navigation__icon"
                src={
                item === "Home" ? homeIcon : 
                item === "Discover" ? discoverIcon :
                item === "Celebrities" ? celebritiesIcon :
                item === "Award" ? awardIcon :
                item === "Recent" ? recentIcon :
                item === "Top Rated" ? topRatedIcon :
                item === "Downloaded" ? downloadedIcon :
                item === "Playlists" ? playlistsIcon :
                item === "Watchlists" ? watchlistIcon :
                item === "Completed" ? completedIcon :
                item === "Settings" ? settingsIcon : logOutIcon
              } alt={item} />
              <span>{item}</span>
            </Link>
          </li>
        )})
        }
      </ul>
    </div>
  );
}

export default Navigation;