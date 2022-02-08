import React, { useState, useEffect } from "react";

const url = "https://api.github.com/users";

const UseEffectFetchData = () => {
  // empty array is default setting
  // useState preserves the value and triggers the rerender
  const [ users, setUsers ] = useState([]);

  // perform a fetch request in the useEffect callback function
  // useEffect cannot be async, will give error if so. you can set up the async await inside the callback or set it up as a seperate function

  const getUsers = async() => {
    const response = await fetch(url);
    const users = await response.json();
    //console.log(users);
    setUsers(users);
  };

  useEffect(() => {
    getUsers();
  }, []);
  return (
    <>
      <h1>github users</h1>
      <ul className="users">{users.map((user) => {
        const { id, login, avatar_url, html_url } = user;
        return <li key={id}>
          <img src={avatar_url} alt={login}/>
          <div>
            <h4>{login}</h4>
            <a href={html_url}>profile</a>
          </div>
        </li>
      })}</ul>
    </>
  )
};

export default UseEffectFetchData;