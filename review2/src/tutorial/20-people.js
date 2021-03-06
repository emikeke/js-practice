import React, { useState } from "react";
import { data } from "./3-data";
import { Link } from "react-router-dom"

const People = () => {
  const [ people, setPeople ] = useState(data);
  return (
    <>
      <h2>people</h2>
      {people.map(person => {
        return (
          <div key={person.id} className="item">
            <h4>{person.name}</h4>
            <Link to={`/person/${person.id}`}>Learn More</Link>
          </div>
        )
      })}
    </>
  )
};

export default People;