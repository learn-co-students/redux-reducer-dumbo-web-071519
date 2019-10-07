export function manageFriends(state = {friends:[]}, action){
    switch (action.type) {
        case "ADD_FRIEND":
            return {...state, friends: [...state.friends, action.friend]}
        case "REMOVE_FRIEND":
            const newFriendArray = state.friends.filter((friend) => {
              return friend.id !== action.id}) 
            return{...state, friends: newFriendArray}
        default:
            return state;
    }
}
