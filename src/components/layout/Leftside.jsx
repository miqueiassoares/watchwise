import logo from "../../assets/img/logomarca/logo-sem-fundo.png";
import Navigation from "./leftside-components/Navigation";

const Leftside = () => {
  return(
    <div className="leftside">
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