import { useEffect, useState } from "react"; 
//import DropdownRoles from "../components/Dropdown/Dropdownroles";
import DropdownTiers from "../components/Dropdown/Dropdowntiers"; 
import DropdownDivisions from "../components/Dropdown/Dropdowndivisions";
//import DropdownChampions from "../components/Dropdown/Dropdownchampions";
import Button from "../components/Button/Button";
import "./Duosearch.css";

const DuoSearch = () => {
  const [ division, setDivision ] = useState(""); // summoner division
  const [ tier, setTier ] = useState(""); // summoner tier
  const [ search, setSearch ] = useState({});
  const [ error, setError ] = useState(null); // error handling if no summoner search exists

  const API_KEY = "";
  const requestSearchURL = `https://na1.api.riotgames.com/lol/league/v4/entries/RANKED_SOLO_5x5/${tier}/${division}?&api_key=${API_KEY}`;

  async function requestSearch() {
    fetch(requestSearchURL)
      .then(res => {
        console.log(res);
        if(!res.ok) {
          console.log(res);
          throw new Error("Page not found")
        }
        return res.json();
      })
      .then(data => {
        setSearch(data);  
        console.log(data);
      })
      .catch(err => {
        console.log(err)
        setError("No search found, please try again with different values.");
      })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    requestSearch();
  }
  return (
    <>
      <h1>Duo Search</h1>
      <form className="form-page-duo" onSubmit={handleSubmit}>
        <div className="dropdown-wrapper">
          <DropdownTiers className="dropdown-tiers" onChange={(e) => {e.preventDefault(); setTier(e.target.value)}} value={tier}/>
          <DropdownDivisions className="dropdown-divisions" onChange={(e) => setDivision(e.target.value)} value={division}/>
        </div>
        <Button variant="btn btn-danger" buttonText="Submit"/>
      </form>
    </>
  )
};
export default DuoSearch;