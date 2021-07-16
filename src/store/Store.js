import {firebaseReducer, getFirebase, reduxReactFirebase } from 'react-redux-firebase';
import { createStore, compose,applyMiddleware,  combineReducers} from 'redux';
import { getFirestore, reduxFirestore } from 'redux-firestore';
import notesReducer from '../reducers/notesReducer';
import firebase from '../firebase/config'
import thunk from 'redux-thunk';

const allReducers = combineReducers({
    noteState: notesReducer,
    firebaseState: firebaseReducer,
})


export const store =createStore (
    allReducers,
    compose(
    applyMiddleware(thunk.withExtraArgument ({getFirebase,getFirestore})),
    reduxReactFirebase (firebase),
    reduxFirestore (firebase),
));

     