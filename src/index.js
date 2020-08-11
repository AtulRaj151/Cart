import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as firebase from 'firebase';
import 'firebase/firestore';
import * as serviceWorker from './serviceWorker';


var firebaseConfig = {
  apiKey: "AIzaSyAPf15_cbgbi5OcbYM_hi1kHNL1LUM2AWQ",
  authDomain: "cart-53525.firebaseapp.com",
  databaseURL: "https://cart-53525.firebaseio.com",
  projectId: "cart-53525",
  storageBucket: "cart-53525.appspot.com",
  messagingSenderId: "484919967998",
  appId: "1:484919967998:web:8e583fd9a10210d917a5af",
  measurementId: "G-BXB135JZ0P"
};

firebase.initializeApp(firebaseConfig);


ReactDOM.render(

    <App />,
  
  document.getElementById('root')
);

serviceWorker.unregister();

