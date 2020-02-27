export function manageFriends(state = {friends: []}, action){
  switch (action.type) {

    case "ADD_FRIEND" :
      return {friends: [...state.friends, action.friend]}

    case "REMOVE_FRIEND" :
      const newFriendArray = state.friends.filter((friend) => {
        return action.id !== friend.id
      })
      return {friends: newFriendArray}

    default:
      return state

  }
}
