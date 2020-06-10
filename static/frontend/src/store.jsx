import { createBrowserHistory } from 'history';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/reducer'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { routerMiddleware } from 'react-router-redux';

export const history = createBrowserHistory();

const loggerMiddleware = createLogger();
const routingMiddleware = routerMiddleware(history);

export const store = createStore(
    rootReducer,
    applyMiddleware(
        thunkMiddleware,
        loggerMiddleware,
        routingMiddleware
    )
);
