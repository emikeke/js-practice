import { useState, useEffect } from "react";

const localCache = {};

export default function useBreedList(animal) {
  // hooks will be called in the same order its written in
  const [breedList, setBreedList] = useState([]);
  // if no one called it before the status will be unloaded, if new stuff is loading it will say loading and and if its loaded stuff, it will say loaded. represents the stte of the hook
  const [status, setStatus] = useState("unloaded");

  useEffect(() => {
    if (!animal) {
      setBreedList([]);
    } else if (localCache[animal]) {
      // if you have requested in a previous time
      setBreedList(localCache[animal]);
    } else {
      // go get it from the API
      requestBreedList();
    }
    async function requestBreedList() {
      // setBreedList is empty in between states
      setBreedList([]);
      setStatus("loading");
      const res = await fetch(
        `http://pets-v2.dev-apis.com/breeds?animal=${animal}`
      );
      const json = await res.json();
      // save response for the future
      // if no response, then sends back an empty array
      localCache[animal] = json.breeds || [];
      setBreedList(localCache[animal]);
      setStatus("loaded");
    }
  }, [animal]);
  return [breedList, status];
}
