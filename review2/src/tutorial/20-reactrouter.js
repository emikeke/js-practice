import React from "react";
// v6 from v5 react-router-dom
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./20-home";
import About from "./20-about";
import People from "./20-people";
import Error from "./20-error";
import Person from "./20-person";
import NavBar from "./20-navbar";

// * means it wil always match
const ReactRouterSetup = () => {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/people" element={<People />} />
          <Route path="/person/:id" element={<Person />}> </Route>
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </>
  )
};

export default ReactRouterSetup;