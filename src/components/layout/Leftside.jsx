import logo from "../../assets/img/logomarca/logo-sem-fundo.png";
import Navigation from "./leftside-components/Navigation";
import Arrow from "../../assets/img/rightside/arrow.png";

const Leftside = ({ handleClosed }) => {
  return(
    <div className="leftside">
      <button onClick={handleClosed} className="closed">
        <img src={Arrow} alt="Open/Closed" />
      </button>
      <div className="leftside__logo">
        <img src={logo} alt="WatchWise" />
      </div>
      <Navigation 
        title="Menu"
        itens={["Home", "Discover", "Award", "Celebrities"]}
      />
      <Navigation 
        title="Library"
        itens={["Recent", "Top Rated", "Downloaded", "Playlists", "Watchlist", "Completed"]}
      />
      <Navigation 
        title="General"
        itens={["Settings", "Log Out"]}
      />
    
    </div>
  )
}

export default Leftside;