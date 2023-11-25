import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

export const myContext = React.createContext("red")
const color = "red";
const color2 = "black"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <myContext.Provider value={{color,color2}}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </myContext.Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
