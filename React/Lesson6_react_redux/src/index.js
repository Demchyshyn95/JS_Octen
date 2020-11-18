import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {bindActionCreators, createStore} from "redux";
import reducer from "./reducer";
import * as actions from './active'

const store = createStore(reducer);
let {dispatch,subscribe,getState} = store;
let {asd, dec, inc, res} = bindActionCreators({...actions}, dispatch)
document.getElementById('INC').addEventListener("click",() => inc(5));
document.getElementById('DEC').addEventListener("click",() => dec(5));
document.getElementById('ASD').addEventListener("click",() => asd(5));
document.getElementById('RES').addEventListener("click",() => res());
subscribe(()=>{document.getElementById('content').innerText = getState()});





/*
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
*/
