import { useState } from "react"; 
import Textfield from "../components/Textfield/Textfield";
import Button from "../components/Button/Button";

const ProfileSearch = () => {
  const [search, setSearch] = useState("");
  const [playerData, setPlayerData] = useState({});

  const API_KEY = "";
  const summonerURL = `https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${search}?api_key=${API_KEY}`;

  async function requestSummoner() {
    const res = await fetch(summonerURL);
    const json = await res.json();
    setPlayerData(json);
    console.log(json);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    requestSummoner();
    console.log("form submitted");
  }

  return (
    <div className="profile-page">
      <h1>Profile Search Page</h1>
      <form className="form-page" onSubmit={handleSubmit}>
        <Textfield 
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <Button buttonText="submit"/>
      </form>
      {JSON.stringify(playerData) !== "{}" ? 
      <div>
        <p>have player data</p>
        <p>{playerData.name}</p>
        <p>{playerData.summonerLevel}</p>
        <img width="100" height="100" src={`http://ddragon.leagueoflegends.com/cdn/12.5.1/img/profileicon/${playerData.profileIconId}.png`} alt="summoner-icon" />
      </div>
      : 
      <p>no player data</p>}
    </div>
  )
};
export default ProfileSearch;