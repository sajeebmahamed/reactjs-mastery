import React from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

const init = {
    products: [],
    cartItems: [],
    keyword: ""
}


// const { Provider } = store

const reducer = (state = init, action) => {
    switch (action.type) {
        case 'SET_CART_ITEMS':
            return {
                ...state,
                cartItems: action.payload
            }
        case 'SET_PRODUCTS':
            return {
                ...state,
                products: action.payload
            }
        case 'SET_KEYWORD': {
            return {
                ...state,
                keyword: action.payload
            }
        }
        default:
            return state
    }
}
// const store = createStore(reducer)
const store = createStore(
    reducer, /* preloadedState, */
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
const StateProvider = ({ children }) => {
    return <Provider store={store}> {children} </Provider>
}

export {
    store,
    StateProvider
}