import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.scss';
import App from './app';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux'
import { store } from './store'
import { loginConstants } from './actions/_constants'


const user = JSON.parse(sessionStorage.getItem('user'));

if (user) {
    store.dispatch({type: loginConstants.LOGIN_SUCCESS});
}

ReactDOM.render(  
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();