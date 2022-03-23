import { Link } from "react-router-dom"; 
import "./Home.css";
import pattern from "../../src/assets/bg-design.png";
import Button from "../../src/components/Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faUserGroup } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  return (
    <div className="home-page">
      <div className="left-page">
        <h1 className="h1-home"> Welcome to <span className="highlight">Summoner Search</span>.</h1>
        <h1 className="h1-home">What are you looking for?</h1>
        <div className="buttons">
          <Link to="/profile/search">
            <div className="iconbutton-1">
              <FontAwesomeIcon icon={faMagnifyingGlass} className="icon-1" />
              <Button variant="btn btn-primary" style={{fontSize: "2.5rem"}} buttonText="Profile Search" />
            </div>
          </Link>
          <Link to="/duo/search">
            <div className="iconbutton-2">
              <FontAwesomeIcon icon={faUserGroup} className="icon-2" />
              <Button variant="btn btn-primary" buttonText="Duo Search" style={{fontSize: "2.5rem"}} />
            </div>
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