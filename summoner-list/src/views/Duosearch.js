import { useState } from "react"; 
import DropdownTier from "../components/Dropdown/Dropdowntiers"; 
import DropdownRank from "../components/Dropdown/Dropdownrank";
import Button from "../components/Button/Button";
import "./Duosearch.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const DuoSearch = () => {
  
  const [ rank, setRank ] = useState(""); // summoner rank
  const [ tier, setTier ] = useState(""); // summoner tier
  const [ input, setInput ] = useState([]); // data for league v-4
  const [ error, setError ] = useState(null); // error handling if no summoner search exists

  const API_KEY = "";
  const summonerAllTierURL = `https://na1.api.riotgames.com/lol/league/v4/entries/RANKED_SOLO_5x5/${tier}/${rank}?&api_key=${API_KEY}`; // finds every player in this tier

  function requestSearch() {
    var summonerList = [];
    var iterationStep = 10;
    var nextI = 0;

      fetch(summonerAllTierURL)
      .then(res => {
        if(!res.ok) {
          throw new Error("Page not found")
        }
        return res.json();
      })
      .then(data => { // loops through each player in division and tier
        if (typeof data === 'undefined' ){
          return;
        }
        data.forEach(element => { // gets summoner name
          if (hitMaximumNumber(nextI, iterationStep)){
            return;
          }
          nextI++;
          const summonerPuuidURL = `https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${element.summonerName}?api_key=${API_KEY}`;
          fetch(summonerPuuidURL)
          .then(res => {
            if(!res.ok) {
              throw new Error("Page not found")
            }
            return res.json();
          })
          .then(dataPUUID => { // gets PUUID throguh summoner name
            const resultInput = {summonerName: element.summonerName, profileIconId: dataPUUID.profileIconId, tier: element.tier, rank: element.rank, wins: element.wins, losses: element.losses, role: dataPUUID.puuid};
            const summonerMatchIDURL = `https://americas.api.riotgames.com/lol/match/v5/matches/by-puuid/${dataPUUID.puuid}/ids?start=0&count=1&api_key=${API_KEY}`;
            fetch(summonerMatchIDURL)
              .then(res => {
                if(!res.ok) {
                  throw new Error("Page not found")
                }
                return res.json();
              })
              .then (data2 => { // loops though each match ID
                data2.forEach(eachMatch => {
                  const summonerOneMatchDetailsURL = `https://americas.api.riotgames.com/lol/match/v5/matches/${eachMatch}?api_key=${API_KEY}`;
                  fetch(summonerOneMatchDetailsURL)
                  .then(res => {
                    if(!res.ok) {
                      throw new Error("Page not found")
                    }
                    return res.json();
                  })
                  .then(dataMatchDetal => { // loops through 10 participants match details to find role
                    var roleSummonerName = findRole(dataMatchDetal, resultInput.summonerName);
                    resultInput.role = roleSummonerName !== ''? roleSummonerName : 'N/A';
                    if (summonerList.findIndex(position => position.summonerName === resultInput.summonerName && position.profileIconId === resultInput.profileIconId && position.tier === resultInput.tier && position.rank ===resultInput.rank && position.wins === resultInput.wins && position.losses === resultInput.losses && position.role === resultInput.role) <= -1){
                      summonerList.push(resultInput);
                      setInput([...input,...summonerList]);
                    }
                  })
                })
              })
            })
          })
        })
      .catch(err => {
        console.log(err)
        setError("No search found, please try again with different values.");
      })
  }

  function findRole(data, summonerName) {
    let position = "";
    for (let element of data.info.participants) {
      if (summonerName === element.summonerName) {
        position = element.teamPosition;
        return position;
      }
    }
  }

  function hitMaximumNumber(i, maximumNumber){
    var returnValue = false;
    if(i === maximumNumber){
      returnValue = true;
    }
    return returnValue;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    requestSearch();
  }
  
  return (
    <div className="duo-search">
      <h1>Duo Search</h1>
      <form className="form-page-duo" onSubmit={handleSubmit}>
        <p>Please select a tier and rank below: </p>
        <div className="dropdown-wrapper">
          <DropdownTier className="dropdown-tiers" onChange={(e) => {setTier(e.target.value); setError(null)}} value={tier}/>
          <DropdownRank className="dropdown-rank" onChange={(e) => {setRank(e.target.value); setError(null)}} value={rank}/>
        </div>
          <div className="iconbutton-4">
            <FontAwesomeIcon icon={faMagnifyingGlass} className="icon-4" style={{fontSize: "1.85rem", marginTop: "0.85rem"}}/> 
            <Button variant="btn btn-warning" buttonText="Submit" style={{fontSize: "2rem", width: "14rem", marginTop: "1.5rem", marginLeft: "46rem"}}/>
          </div>  
      </form>
      {error ? <>{Error && <div className="error">{error}</div>}</> : <>{JSON.stringify(input) !== "[]" ? 
      <div className="display-wrapper">
        <div className="duo-page">
          {input.map((player) => (
            <ul key={player.summonerName}>
              <div className="page2">
                <div><img width="448" height="448" src={`http://ddragon.leagueoflegends.com/cdn/12.5.1/img/profileicon/${player.profileIconId}.png`} alt="summoner-icon" className="icon-profile" /></div>
                  <div className="text-container">
                    <div className="name-info">{player.summonerName}</div>
                    <div className="tier-wrapper">{` Tier: ${player.tier}`}
                      <div className="league-rank">{` Rank: ${player.rank}`}</div>
                      <div className="wins">{` Winrate: ${Math.round((player.wins)/((player.wins + player.losses))*100)}%`}</div>
                      {` Total Games: ${player.wins + player.losses}`}
                    </div>
                    <div className="winrate">{` Role: ${player.role}`}</div>
                  </div>
              </div>
            </ul>
          ))}
        </div>
      </div> : <div className="text-search"></div>}</>}
    </div>
  )
};
export default DuoSearch;
