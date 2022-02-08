import React from "react";

// press a button, and the name would change
const ErrorExample = () => {
  let title = "random title";

  // once clicked this will change the title text to hello people
  const handleClick = () => {
    title = "hello people";
    console.log(title);
  }
  return (

    // use this fragment instead of <div>
    <>
      <h2>{title}</h2>

      {/* set up a handleClick function to execute when this button is clicked*/}
      <button type="button" className="btn" onClick={handleClick}>
        change title
      </button>
    </>
  );
};

export default ErrorExample;