import { getFirebase, reduxReactFirebase } from 'react-redux-firebase';
import { createStore, compose,applyMiddleware} from 'redux';
import { getFirestore, reduxFirestore } from 'redux-firestore';
import notesReducer from '../reducers/notesReducer';
import firebase from '../firebase/config'
import thunk from 'redux-thunk';



export const store =createStore (notesReducer,compose(
    applyMiddleware(thunk.withExtraArgument ({getFirebase,getFirestore})),
    reduxReactFirebase (firebase),
    reduxFirestore (firebase),
));

     