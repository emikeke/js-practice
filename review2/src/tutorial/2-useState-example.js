import React, { useState } from "react";

const UseStateBasics  = () => {
  // console.log(useState("hello world"));
  // const value = useState(1)[0];

  // this is the handler value that controls our state
  // const handler = useState(1)[1];
  // console.log(value, handler);

  // use destructuring to access useState, random title is the default value
  const [ text, setText ] = useState("random title");
  const handleClick = () => {
    // if text value is random title then setText value to hello world, else setText to random title
    if (text === "random title") {
      setText("hello world");
    } else {
      setText("random title");
    }
  }
  return (
    // fragment used isntead of div to hold contents 
    <>
      {/* text is the default text state */}
      <h1>{text}</h1>
      <button type="btn" className="btn" onClick={handleClick}>change title</button>
    </> 
  )
};

export default UseStateBasics;