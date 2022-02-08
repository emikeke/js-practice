import React, { useState, useEffect } from "react";

const ShowHide = () => {
  const [ show, setShow ] = useState(false);
  return (
    <>
      <button className="btn" onClick={() => { setShow(!show) }}>show/hide</button>
      {show && <Item />}
    </>
  )
};

// another component, toggle show Item if true, toggle hide if false
const Item = () => {
  const [ size, setSize ] = useState(window.innerWidth);
  const checkSize = () => {
    setSize(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", checkSize);

    // cleanup function, important because we run this everytime we toggle show the component
    return () => {
      window.removeEventListener("resize", checkSize);
    }
  }, []);
  return (
    <>
      <h1>window</h1>
      <h2>size: {size}</h2>
    </>
  )
};

export default ShowHide;