import React, { useState } from "react";

// if statements after thr return won't work 
const ShortCircuit = () => {
  const [ text, setText ] = useState("");
  // text would = ""; because this is the default value of text in useState 

  // const firstValue = text || "hello world";
  // const secondValue = text && "hello world";

  const [ isError, setIsError ] = useState(false);

  return (
    <>
      <h1>{text || "john doe"}</h1>
      <button className="btn" onClick={() => {setIsError(!isError) && setText(text)}}>toggle error</button>
      {isError && <h1>Error...</h1>}
      {isError ? <p>show if true</p> : <p>show if false</p>}
    </>
)};

export default ShortCircuit;