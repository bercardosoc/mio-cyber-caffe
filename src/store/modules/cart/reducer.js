import { ADD_TO_CART, REMOVE_FROM_CART } from "./actionTypes";

const cartReducer = (state = [], action) => {
    switch(action.type) {
        case ADD_TO_CART:
            const { product } = action
            return [...state, product]

        case REMOVE_FROM_CART:
            const { cart } = action
            console.log(state)
            const removed = state.find((item) => item.id === cart)
            const removedIndex = state.indexOf(removed)
            state.splice(removedIndex, 1)
            return([...state])
        
        default:
            return state
    }
} 

export default cartReducer