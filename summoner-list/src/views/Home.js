import { Link } from "react-router-dom"; 

const Home = () => {
  return (
    <>
      <h1>
        Welcome to Summoner Search. What are you looking for?
      </h1>
      <Link to="/profile/search">
        Profile Search
      </Link>
      <Link to="/duo/search">
        Duo Search
      </Link>
    </>
  )
};
export default Home;