import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers';
import reduxImmutatableStateInvarient from 'redux-immutable-state-invariant';

export default function configureStore(initialState){
    return createStore(
        rootReducer,
        initialState,
        applyMiddleware(reduxImmutatableStateInvarient())
    );
}