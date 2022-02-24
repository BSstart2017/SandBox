import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'firebase/firestore'
import 'firebase/auth'
import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

firebase.initializeApp({
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
    measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
    }
);

export const Context = createContext(null)

const auth = firebase.auth()
const firestore = firebase.firestore()

console.log(auth)
console.log(firestore)
// @ts-ignore
ReactDOM.render( <Context.Provider value={{
        firebase,
        auth,
        firestore
    }}>
        <App />
    </Context.Provider>,
    document.getElementById('root')
);
