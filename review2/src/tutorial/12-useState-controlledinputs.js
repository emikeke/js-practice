import React, { useState } from "react";

//hook up controlled inputs to a state value
// can add onSubmit to form or onClick to button to submit form information
// how to connect inputs to state value??? we want to access the data that we're submitting. we do this by setting up state values
// we need to add 2 attributes to the input value 1. value (references stored state value) 2. onChange (event listener that will fire the callback function each and every time we type something in the input)
// value property that references some state value + onChange event listener where u set up a reference function or inline function
const ControlledInputs = () => {
  const [ firstName, setFirstName ] = useState("");
  const [ email, setEmail ] = useState("");
  const [ people, setPeople ] = useState([]);

  const handleSubmit = (e) => {
    // prevents refresh page the moment u submit the form
    e.preventDefault();
    if (firstName && email) {
      const person = { id: new Date().getTime().toString(), firstName, email };
      console.log(person);
      // saves to state when you submit
      setPeople(people => {
        return [...people, person];
      });
      setFirstName("");
      setEmail("");
    } else {
      console.log("empty values");
    }
  };
  return (
    <>
    <article>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="firstName">Name: </label>
          <input type="text" id="firstName" name="firstName" value={firstName} onChange={e => {
            setFirstName(e.target.value)
          }}/>
        </div>
        <div className="form-control">
          <label htmlFor="firstName">Email: </label>
          <input type="text" id="email" name="email" value={email} onChange={e => {
            setEmail(e.target.value)
          }}/>
        </div>
        <button type="submit" >add person</button>
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

export default ControlledInputs;