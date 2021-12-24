import { createStore, compose } from 'redux';
import { rootReducer } from '../reducer';

export default function configureStore(initialState = {}) {
    const store = createStore(
        rootReducer,
        initialState,
    );
    // store.injectedReducers = {}; // Reducer registry
    return store;
}