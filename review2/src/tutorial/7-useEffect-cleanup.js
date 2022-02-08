import React, { useState, useEffect } from "react";

const UseEffectCleanup = () => {
  // gets current browser page size in pixels
  const [ size, setSize ] = useState(window.innerWidth);

  // the moment we invoke checkSize we update the state value setSize 
  const checkSize = () => {
    setSize(window.innerWidth);
  };

  // each time we rerender the page useEffect is called
  useEffect(() => {
    console.log("useEffect");
    window.addEventListener("resize", checkSize);

    // optional, clean up will be invoked before useEffect is invoked
    // important when components gets complex and theres components appearing and dissapearing 
    return () => {
      console.log("clean up");
      window.removeEventListener("resize", checkSize);
    }
  });
  console.log("render");
  return (
    <>
      <h1>size</h1>
      <h2>{size} px</h2>
    </>
  )
};

export default UseEffectCleanup;