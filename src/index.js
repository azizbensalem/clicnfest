import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { HashRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import { defineCustomElements } from "@ionic/pwa-elements/loader";
import store from './Data/store';

ReactDOM.render(
<HashRouter>
    <Provider store={store}>
         <App />
    </Provider>
</HashRouter>
, document.getElementById('root'));
defineCustomElements(window);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
