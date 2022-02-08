import React, { useState, useEffect } from "react";

const UseEffectBasics = () => {
  // start with 0
  // did 2 things with useEffect 1. preserve value between renders 2. triggered a renderer so everytime a button is clicked, useEffect is being run (by default useEffect is run after every render)
  const [ value, setValue ] = useState(0);

  useEffect(() => {
    console.log("call useEffect");
    if (value >= 1 ) {
      document.title = `New Messages: ${value}`;
    }
  }, [value]);
  console.log("render component");
  return(
    <>
      <h2>{value}</h2>
      <button type="btn" onClick={() => {setValue(value +1)}}>click me</button>
    </>
)};

export default UseEffectBasics;