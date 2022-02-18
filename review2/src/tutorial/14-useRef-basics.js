import React, { useEffect,  useRef } from "react";

// first set the value to useRef
// second set it as a ref attribute
const UseRefBasics = () => {
  const refContainer = useRef(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(refContainer.current.value);
  };
  useEffect(()=>{
    console.log(refContainer.current);
    // everytime we render the application, we're adding the focus on the current one. thats why u can grab the value when u submit
    refContainer.current.focus();
  });
  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <input type="text" ref={refContainer}></input>
        <button type="submit">submit</button>
      </form>
    </>
  )
};

export default UseRefBasics;