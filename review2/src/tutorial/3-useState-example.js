import React, { useState } from "react";
import { data } from "./3-data";

const UseStateArray = () => {
  // data array is passed as a default value in useState
  const [ people, setPeople ] = useState(data);
  const removeItem = (id) => {
    // creates a new array, for each person variable when person id =/= id remove it from the new array
    let newPeople = people.filter(person => person.id !== id);
    setPeople(newPeople);
  };
  return (
    <>
      {people.map(person => {
        const { id, name } = person;
        return ( 
            <div key={id} className="item">
              <h4>{name}</h4>
              <button onClick={() => {removeItem(id)}}>remove</button>
            </div>
          );
      })}
      {/* can use a handler function or inline function. we want to invoke it only when we click on it. so we set up an arrow function */}
      <button className="btn" onClick={() => setPeople([])}>clear items</button>
    </>
  );
};

export default UseStateArray;