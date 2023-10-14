import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAiKKZ-6PKK5J5RK7HsCq6fIIfI8SV0U94",
  authDomain: "tienda-koke.firebaseapp.com",
  projectId: "tienda-koke",
  storageBucket: "tienda-koke.appspot.com",
  messagingSenderId: "456198621441",
  appId: "1:456198621441:web:eae07083dff561dde77300"
};
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <App />
);
