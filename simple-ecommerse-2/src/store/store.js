import React from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducer from './reducer';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' //
import { PersistGate } from 'redux-persist/integration/react'

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cartItems']
}
const persistedReducer = persistReducer(persistConfig, reducer)
// const store = createStore(reducer)
const store = createStore(
    persistedReducer, /* preloadedState, */
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
const persistor = persistStore(store)

const StateProvider = ({ children }) => {
    return (<Provider store={store}>
        <PersistGate loading={<div>loading...</div>} persistor={persistor}>
            {children}
        </PersistGate>
    </Provider>)
}

export {
    StateProvider
}