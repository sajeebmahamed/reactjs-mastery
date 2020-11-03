import React from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducer from './reducer';


// const store = createStore(reducer)
const store = createStore(
    reducer, /* preloadedState, */
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
const StateProvider = ({ children }) => {
    return <Provider store={store}> {children} </Provider>
}

export {
    StateProvider
}