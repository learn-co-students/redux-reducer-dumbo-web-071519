export function manageFriends(state = { friends: []}, action){
    if (action.type ==='ADD_FRIEND'){
     
        return {...state, friends: [...state.friends, action.friend]}
    }
    else if (action.type ==='REMOVE_FRIEND'){
      
     let newArr = state.friends.filter(friend => friend.id !== action.id)
        
        return { friends: newArr}
    }
    else return state

}
