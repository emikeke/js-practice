import { Link } from "react-router-dom"; 
import "./Home.css";
import pattern from "../../src/assets/bg-design.png";
import Button from "../../src/components/Button/Button";


const Home = () => {
  return (
    <div className="home-page">
      <div className="left-page">
        <h1 className="h1-home"> Welcome to <span className="highlight">Summoner Search</span>.</h1>
        <h1 className="h1-home">What are you looking for?</h1>
        <div className="buttons">
          <Link to="/profile/search">
            <Button buttonText="Profile Search" style={{fontSize: "2.5rem", }}>
              <i class="fa-solid fa-user-plus"></i>
            </Button>
          </Link>
          <Link to="/duo/search">
            <Button buttonText="Duo Search" style={{fontSize: "2.5rem"}}>
              <i class="fa-solid fa-user-plus"></i>
            </Button> 
          </Link>
        </div>
      </div>
      <div className="right-page">
        <img className="pattern" src={pattern} alt="bg-pattern"></img>
      </div>
    </div>
  )
};
export default Home;