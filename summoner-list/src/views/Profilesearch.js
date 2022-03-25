import { useEffect, useState } from "react"; 
import Textfield from "../components/Textfield/Textfield";
import "./Profilesearch.css";
import "./Profilesearch-fail.css";
import "./Profilesearch-succeed.css";

const ProfileSearch = () => {
  const [search, setSearch] = useState(""); // user search
  const [playerData, setPlayerData] = useState({}); // playerID
  const [playerLeague, setPlayerLeague] = useState({}); // playerLeague
  const [error, setError] = useState(null); // error handling if no summoner search exists

  const API_KEY = "";
  const summonerNameURL = `https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${search}?api_key=${API_KEY}`;
  const summonerLeagueURL = `https://na1.api.riotgames.com/lol/league/v4/entries/by-summoner/${playerData.id}?api_key=${API_KEY}`;
  const winrate = (Math.round(playerLeague.wins / (playerLeague.wins + playerLeague.losses) * 100));

  async function requestSummonerName() {
    fetch(summonerNameURL)
      .then(res => {
        console.log(res);
        if(!res.ok) {
          console.log(res);
          throw new Error("Page not found")
        }
        return res.json();
      })
      .then(data => {
        setPlayerData(data);  
        setError(null);
      })
      .catch(err => {
        console.log(err)
        setError("No summoner found, please try again with a different name.");
      })
  }

  useEffect(() => {
    if (playerData.id) {
      requestSummonerLeague();
    } // eslint-disable-next-line 
  }, [playerData]); 

  async function requestSummonerLeague() {
    const res = await fetch(summonerLeagueURL);
    const json = await res.json();
    if (json.length >= 1) {
      setPlayerLeague(json[0]);
      console.log(json[0]);
    }
    if (json.length === 0 ) {
      setPlayerLeague({tier: "UNRANKED"})
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    requestSummonerName();
    setSearch("");
    console.log("form submitted");
  }
  
  return (
    <div className="search-page">
      <h1>Profile Search</h1>
      <div className="form-wrapper">
        <form className="form-page" onSubmit={handleSubmit}>
          <Textfield 
            className="form-control form-control-lg"
            type="text"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value)
              setError(null);
            }}
          />
        </form>
      </div>
      {error ? <>{Error && <div className="error">{error}</div>}</>
      :
      <>
        {JSON.stringify(playerData) !== "{}" ? 
        <div className="display-wrapper">
          {playerData.profileIconId ? <div><img width="448" height="448" src={`http://ddragon.leagueoflegends.com/cdn/12.5.1/img/profileicon/${playerData.profileIconId}.png`} alt="summoner-icon" className="icon-profile" /></div> : "" }
          <div className="page">
              <div className="text-container">
                {playerData.name ? <div className="name-info">{playerData.name}</div> : ""}
                <div className="tier-wrapper">
                  {playerData.summonerLevel ? <div className="level-info">Level {playerData.summonerLevel}</div> : ""}
                  <div className="league-rank">
                    {playerLeague.tier ? <div className="tier">{playerLeague.tier}&nbsp;</div> : <div className>Unranked</div>} {playerLeague.rank ? <div className="rank">{playerLeague.rank}&nbsp;</div> : " "} {playerLeague.leaguePoints ? <div>{playerLeague.leaguePoints} LP</div> : "0 LP"}
                  </div>
                  {playerLeague.wins ? <div className="wins">{playerLeague.wins} Wins</div> : " "} {playerLeague.losses ? <div>{playerLeague.losses} Losses</div> : " "}
                </div>
                {winrate ? <div className="winrate">{winrate}% Winrate</div> : ""}
              </div>
            </div>
        </div>
        : 
        <div className="search-text">
        </div>
      } 
      </>
      }
    </div>
  )
};
export default ProfileSearch;