import React, { useState } from "react";

//hook up controlled inputs to a state value
// can add onSubmit to form or onClick to button to submit form information
// how to connect inputs to state value??? we want to access the data that we're submitting. we do this by setting up state values
// we need to add 2 attributes to the input value 1. value (references stored state value) 2. onChange (event listener that will fire the callback function each and every time we type something in the input)
// value property that references some state value + onChange event listener where u set up a reference function or inline function
const ControlledMultipleInputs = () => {
  // const [ firstName, setFirstName ] = useState("");
  // const [ email, setEmail ] = useState("");
  // const [ age, setAge ] = useState("");
  const [ person, setPerson ] = useState({firstName: "", email: "", age: ""});
  const [ people, setPeople ] = useState([]);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setPerson({...person});
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
    <article>
      <form className="form">
        <div className="form-control">
          <label htmlFor="firstName">Name: </label>
          <input type="text" id="firstName" name="firstName" value={person.firstName} onChange={handleChange}/>
        </div>
        <div className="form-control">
          <label htmlFor="firstName">Email: </label>
          <input type="text" id="email" name="email" value={person.email} onChange={handleChange}/>
        </div>
        <div className="form-control">
          <label htmlFor="firstName">Age: </label>
          <input type="text" id="age" name="age" value={person.age} onChange={handleChange}/>
        </div>
        <button type="submit" onClick={handleSubmit}>add person</button>
      </form>
      {people.map(person => {
          const { id, firstName, email } = person;
        return <div key={id}>
          <h4>{firstName}</h4>
          <p>{email}</p>
        </div>
      })}
    </article>
    </>
  )
};

export default ControlledMultipleInputs;