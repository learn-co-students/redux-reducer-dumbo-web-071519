export function manageFriends(state, action){
    switch(action.type){
        case 'ADD_FRIEND':
            return (
            { ...state,
                friends: [
                    ...state.friends, action.friend]
                })
        case 'REMOVE_FRIEND':
            const badFriendIndex = state.friends.findIndex(friend => friend.id == action.id )
            return(
                { ...state,
                    friends: [
                        ...state.friends.slice(0, badFriendIndex),
                        ...state.friends.slice(badFriendIndex + 1)
                    ]
                }
            )
        default:
            return state 
    }
}
