import React, {createContext} from 'react'
import { useReducer } from 'react'

const init = {
    cartItems: []
}

const store = createContext(init)
const { Provider } = store

const reducer = (state, action) => {
    switch(action.type) {
        case 'SET_CART_ITEMS':
            return {
                ...state,
                cartItems: action.payload
            }
            default:
                return state
    }
}

export const StateProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, init)
    return <Provider value= {{ state, dispatch }}> {children} </Provider>
}

export {
    store,
    Provider
}