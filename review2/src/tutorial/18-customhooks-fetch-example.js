import React, { useState, useEffect } from "react";
// when making our own customer hooks, make sure to use "use" in fornt of it
import { useFetch } from "./18-customhooks-useFetch";

const url = "https://api.github.com/users";

const Example = () => {
  const { loading, products } = useFetch(url);
  return(
    <>
      <div>
        <h2>{loading ? "loading ..." : "data"}</h2>
      </div>
    </>
  );
}

export default Example;