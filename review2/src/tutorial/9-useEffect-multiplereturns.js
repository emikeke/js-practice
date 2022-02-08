import React, { useState, useEffect } from "react";

const url = "https://api.github.com/users/QuincyLarson";


// sets up different returns for different states
const MultipleReturns = () => {
  const [ isLoading, setIsLoading ] = useState(true);
  const [ isError, setIsError ] = useState(false);
  const [ user, setUser ] = useState("default user");

  // add an empty array as a second argument so that the function is only run once
  // not using async await
  useEffect(() => {
    fetch(url)

    // error doesnt load properly bc the json file needs to be mistyped for a 404 error, so the solution is to change how and if we load the json object to begin with
    // loads json object when the network error is greater than or equal to 200 and smaller than 299
      .then(res => {
        if (res.status >= 200 && res.status <= 299) {
          return res.json();
        } else {
          setIsLoading(false);
          // see isError page
          setIsError(true);
          throw new Error (res.statusText);
        }
      })
      .then(user => {
        console.log(user);
        const {login} = user;
        setUser(login);
        setIsLoading(false);
      })
      .catch(err => console.log(err));
  }, [])

  // if true
  if (isLoading) {
    return <div>
      <h1>Loading . . .</h1>
    </div>
  }

  //if true
  if (isError) {
    return <div>
      <h1>Error . . .</h1>
    </div>
  }

  // if false, default case
  return (
    <>
      <div>
        <h1>{user}</h1>
      </div>
    </>
  )
};

export default MultipleReturns;