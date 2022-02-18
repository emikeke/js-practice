import React, { useState, useContext } from "react";
import { data } from "./3-data"; 

// doing this makes 2 components available: consumer and provider
const PersonContext = React.createContext();

// find root component (contextapi) and return root component you want to wrap in person context, then provider
// useContext makes data values accessible without prop drilling, no matter how many levels deep
const ContextAPI = () => {
  const [ people, setPeople ] = useState(data);
  const removePerson = (id) => {
    setPeople(people => {
      return people.filter(person => person.id !== id)
    })
  }
  return (
    <PersonContext.Provider value={{removePerson}}>
      <h3>prop drilling</h3>
      <List people={people}/>
    </PersonContext.Provider>
  )
};

const List = ({people}) => {
  return(
    <>
      {people.map(person => {
        return <SinglePerson key={person.id} {...person}/>
      })}
    </>
  )
}

const SinglePerson = ({id, name}) => {
  const { removePerson } = useContext(PersonContext);
  console.log(data);
  return <div className="item">
    <h4>name</h4>
    <button onClick={() =>removePerson(id)}>remove</button>
  </div>
}

export default ContextAPI ;