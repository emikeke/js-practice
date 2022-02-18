import React, { useState, useReducer } from "react";
import Modal from "./15-modal";
//import {data} from "./3-data";
import { reducer } from "./15-reducer.js"

// add people when you click submit
// shows Modal if true

// properties of values are coming from this state value
const defaultState = {
  people: [],
  isModalOpen: false,
  modalContent: ""
};
const Index = () => {
  const [ name, setName ] = useState("");
  // takes in old state and an action, then spits back a new state
  // things are only changed once displatch is called
  const [ state, dispatch ] = useReducer(reducer, defaultState);
  //const [ showModal, setShowModal ] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    // when adding new items to setPeople array, u must add the old ones first. the spread operator does that. then u can add the new items 
    if(name) {
      const newItem = {id: new Date().getTime.toString(), name}
      dispatch({type: "ADD_ITEM", payload: newItem});
      setName("");
    } else {
      dispatch({type: "NO_VALUE"});
    }
  };
  const closeModal = () => {
    dispatch({type: "CLOSE_MODAL"});
  }
  return (
    <>
      {state.isModalOpen && <Modal closeModal={closeModal} modalContent={state.modalContent}/>}
      <form onSubmit={handleSubmit} className="form">
        <div>
          <input type="text" value={name} onChange={e => {
            setName(e.target.value);
          }}/>
        </div>
        <button type="submit">add</button>
      </form>
      {state.people.map(person => {
        return <div key={person.id}>
          <h4>{person.name}</h4>
          <button onClick={() => dispatch({type: "REMOVE_ITEM", payload: person.id})}>remove</button>
        </div>
      })}
    </>
  )
};

export default Index;