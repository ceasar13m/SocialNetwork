import React from 'react';
import './index.css';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import SignUp from "./components/Auth/SignUp";



ReactDOM.render(<SignUp />, document.getElementById('root'));

serviceWorker.unregister();


