// the state right before the update, and then the action (what we are trying to do)
// reducer will run when dispatch is called
// HAVE to return state in reducer
export const reducer = (state, action) => {
  if (action.type === "ADD_ITEM"){
    const newPeople = [...state.people, action.payload]
    console.log(state);
    return {...state, people: newPeople, isModalOpen: true, modalContent: "item added"}
  }
  if (action.type === "NO_VALUE"){
    return {...state, showModal: true, modalContent: "please enter value"}
  }
  if (action.type === "CLOSE_MODAL"){
    return {...state, isModalOpen: false}
  }
  if (action.type === "REMOVE_ITEM"){
    const newPeople = state.people.filter(person => person.id !== action.payload);
    return {...state,  people: newPeople};
  }
  throw new Error("no matching action type");
};