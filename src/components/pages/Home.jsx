import TvShows from "./home/TvShows";
import Header from "./home/Header";

const Home = () => {
  return (
    <div className="home">
      <Header/>
      <TvShows />
    </div>
  );
}

export default Home;