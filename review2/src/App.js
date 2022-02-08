import './App.css';
import React from 'react';

// explicit name component and its location
// import ErrorExample from './tutorial/1-error-example';
// import UseStateBasics from './tutorial/2-useState-example';
//import UseStateArray from './tutorial/3-useState-example';
//import UseStateObject from './tutorial/4-useState-example';
//import UseStateCounter from './tutorial/5-useState-example';
//import UseEffectBasics from './tutorial/6-useEffect-example';
//import UseEffectCleanup from './tutorial/7-useEffect-cleanup';
//import UseEffectFetchData from './tutorial/8-useEffect-fetchdata';
//import MultipleReturns from './tutorial/9-useEffect-multiplereturns';
//import ShortCircuit from './tutorial/10-useState-shortcircuit';
//import ShowHide from './tutorial/11-useEffect-showhide';
//import ControlledInputs from './tutorial/12-useState-controlledinputs';
import ControlledMultipleInputs from './tutorial/13-useState-multipleinputs';

function App() {
  return (
    // always wrapped around a div
    <div className="container">
      <ControlledMultipleInputs />
    </div>
  );
}

export default App;
