import React, { useState } from "react";

const UseStateObject = () => {
  // you can pass in the object directly into useState for default value
  //const [ person, setPerson ] = useState({name: "peter", age: 24, message: "random message"});
  //console.log(person);

  // no rule to set up as many state values as you want, instead of setting up a big object with many values you can divide it up into several smaler states
  const [ name, setName ] = useState("peter");
  const [ age, setAge ] = useState(24);
  const [ message, setMessage ] = useState("random message");

  const changeMessage = () => {
    // spread operator copies an object and its properties, after the comma you specify that needs to be changed. MAKE SURE TO USE SPREAD OPERATOR TO PRESERVE ORIGINAL VALUES THAT YOU DONT WANT TO BE CHANGED
    //setPerson({ ...person, message: "hello world" });
    //console.log(person);
    setMessage("123");
    setAge(1);
    setName("Joe");
  };
return (
  <>
    {/* this is without applying multiple states
    <h3>{person.name}</h3>
    <h3>{person.age}</h3>
    <h4>{person.message}</h4>
    */}

    <h3>{name}</h3>
    <h3>{age}</h3>
    <h4>{message}</h4>

    <button className="btn" onClick={changeMessage}>change message</button>
  </>
)};

export default UseStateObject;