export function managePresents(state, action){

  state = {
    numberOfPresents: 0
  }

  if (action.type === "INCREASE"){
    return {...state, numberOfPresents: state.numberOfPresents + 1}
  } else {
    return state
  }

}
