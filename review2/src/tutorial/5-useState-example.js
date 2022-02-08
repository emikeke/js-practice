import React, { useState } from "react";

const UseStateCounter = () => {
  const [ counter, setCounter ] = useState(0);
  const complexIncrease = () => {
    // setTimeout need to pass 2 things, function and callback
    setTimeout(() => {
      //setCounter(counter + 1);

      // gets the current state value not the old counter
      setCounter((prevState) => {
        return prevState + 1;
      });
    }, 2000);
  }
  return (
    <>
      <section style={{margin: "4rem 0"}}>
        <h2>regular counter</h2>
        <h2>{counter}</h2>
        <button className="btn" onClick={() => {
          setCounter(counter - 1);
        }}>decrease</button>
        <button className="btn" onClick={() => {
          setCounter(0);
        }}>reset</button>
        <button className="btn" onClick={() => {
          setCounter(counter + 1);
        }}>increase</button>

        <section style={{margin: "4rem 0"}}>
        <h2>complex counter</h2>
        <h2>{counter}</h2>
        <button className="btn" onClick={complexIncrease}>increase later</button>
      </section>
      </section>
    </>
)};

export default UseStateCounter;