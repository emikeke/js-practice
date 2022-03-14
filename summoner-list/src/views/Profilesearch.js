import { useEffect, useState } from "react"; 
import Textfield from "../components/Textfield/Textfield";

const ProfileSearch = () => {
  const [search, setSearch] = useState("");
  const [playerData, setPlayerData] = useState({});
  const [playerLeague, setPlayerLeague] = useState([]);

  const API_KEY = "";
  const summonerNameURL = `https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${search}?api_key=${API_KEY}`;
  const summonerLeagueURL = `https://na1.api.riotgames.com/lol/league/v4/entries/by-summoner/${playerData.id}?api_key=${API_KEY}`;
  const winrate = Math.round(playerLeague.wins / (playerLeague.wins + playerLeague.losses) * 100);

  async function requestSummonerName() {
    const res = await fetch(summonerNameURL);
    const json = await res.json();
    setPlayerData(json);
    console.log(json);
  }

  useEffect(() => {
    if (playerData.id) {
      requestSummonerLeague();
    }
  }, [playerData]);

  async function requestSummonerLeague() {
    const res = await fetch(summonerLeagueURL);
    const json = await res.json();
    setPlayerLeague(json[0]);
    console.log(json);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    requestSummonerName();
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
      </form>
      {JSON.stringify(playerData) !== "{}" ? 
      <div>
        <p>have player data</p>
        <p>{playerData.name}</p>
        <p>level {playerData.summonerLevel}</p>
        <img width="100" height="100" src={`http://ddragon.leagueoflegends.com/cdn/12.5.1/img/profileicon/${playerData.profileIconId}.png`} alt="summoner-icon" />
        <p>rank: {playerLeague.tier}{playerLeague.rank}</p>
        <p>winrate: {winrate}%</p>
      </div>
      : 
      <p>no player data</p>}
    </div>
  )
};
export default ProfileSearch;