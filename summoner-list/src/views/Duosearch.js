import { useEffect, useState } from "react"; 
//import DropdownRoles from "../components/Dropdown/Dropdownroles";
import DropdownTiers from "../components/Dropdown/Dropdowntiers"; 
import DropdownDivisions from "../components/Dropdown/Dropdowndivisions";
//import DropdownChampions from "../components/Dropdown/Dropdownchampions";
import Button from "../components/Button/Button";
import "./Duosearch.css";
//import { findByRole } from "@testing-library/react";

const DuoSearch = () => {
  const [ division, setDivision ] = useState(""); // summoner division
  const [ tier, setTier ] = useState(""); // summoner tier
  //const [ role, setRole ] = useState(""); // summoner tier
  const [ input, setInput ] = useState([]); // data for league v-4
  const [ error, setError ] = useState(null); // error handling if no summoner search exists

  const API_KEY = "";
  const summonerAllTierURL = `https://na1.api.riotgames.com/lol/league/v4/entries/RANKED_SOLO_5x5/${tier}/${division}?&api_key=${API_KEY}`; // finds every player in this tier
  var results = [];

  async function requestSearch() {
    fetch(summonerAllTierURL)
      .then(res => {
        if(!res.ok) {
          console.log(res);
          throw new Error("Page not found")
        }
        return res.json();
      })
      .then(data => {
        setInput(data); // gets summonerName, data from api league-v4
        console.log(data, "data");
        results = findNameList(data); // sets summonerName to new obj
        console.log(findNameList(data), "findName");
        const summonerPuuidURL = `https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${results[0]["summonerName"]}?api_key=${API_KEY}`;
        setError(null);
        fetch(summonerPuuidURL)
          .then(res => {
            if(!res.ok) {
              console.log(res);
              throw new Error("Page not found")
            }
            return res.json();
          })
          .then (data2 => {
            console.log(data2, "PUUID"); // gets PUUID from api
            const summonerMatchIDURL = `https://americas.api.riotgames.com/lol/match/v5/matches/by-puuid/${data2.puuid}/ids?start=0&count=100&api_key=${API_KEY}`;
            setError(null);
            fetch(summonerMatchIDURL)
            .then(res => {
              if(!res.ok) {
                console.log(res);
                throw new Error("Page not found")
              }
              return res.json();
            })
            .then (data3 => {
              //console.log(data3, "match ID"); // gets match ID from api
              const summonerMatchDetailsURL = `https://americas.api.riotgames.com/lol/match/v5/matches/${data3[0]}?api_key=${API_KEY}`;
              setError(null);
              fetch(summonerMatchDetailsURL)
                .then(res => {
                  if(!res.ok) {
                    console.log(res);
                    throw new Error("Page not found")
                  }
                  return res.json();
                })
                .then (data4 => {
                  //console.log(data4, "match details -> role"); // gets match details from API 
                  const participants = data4["info"]["participants"];
                  findRole(participants, results[0]["summonerName"]);
                  //console.log(findRole(participants, results[0]["summonerName"]), "findRole");
                  setError(null);
                })
            })
          })
        })
      .catch(err => {
        console.log(err)
        setError("No search found, please try again with different values.");
      })
  }

  function findNameList(data) {
    let objData = Object.assign(data);
    var playerName = [];
    for (let element of objData) {

      playerName.push({"summonerName": element.summonerName})
    }
    return playerName;
  }

  function findRole(data, summonerName) {
    let position = "";
    for (let element of data) {
      if (summonerName === element.summonerName) {
        position = element.teamPosition;
        return position;
      }
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    requestSearch();
  }

  return (
    <div className="duo-search">
      <h1>Duo Search</h1>
      <form className="form-page-duo" onSubmit={handleSubmit}>
        <div className="dropdown-wrapper">
          <DropdownTiers className="dropdown-tiers" onChange={(e) => {setTier(e.target.value); setError(null)}} value={tier}/>
          <DropdownDivisions className="dropdown-divisions" onChange={(e) => {setDivision(e.target.value); setError(null)}} value={division}/>
          {/* <DropdownRoles className="dropdown-role" onChange={(e) => setRole(e.target.value)} value={role}/> */}
        </div>
        <Button variant="btn btn-danger" buttonText="Submit"/>
      </form>
      {error ? <>{Error && <div className="error">{error}</div>}</>
    :
    <>{JSON.stringify(input) !== "[]" ? 
      <div>
        {input.map((player) => (
          <li key={player.summonerName}>
            {player.summonerName} 
            {` winrate: ${Math.round((player.wins)/((player.wins + player.losses))*100)}%`} 
            {` total games played: ${player.wins + player.losses}`}
          </li>
        ))}
      </div>
      : 
      <div className="text-search">{"empty no value selected"}</div>}</>
    }</div>
  )
};
export default DuoSearch;