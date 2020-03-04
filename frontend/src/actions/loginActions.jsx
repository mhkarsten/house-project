import {loginConstants} from './_constants';
import { store, history } from '../store'
import { push, replace } from 'react-router-redux'

export const loginActions = {
    login,
    logout,
    register
}

function login(userName, password) {

    if (userName == 'admin' && password == 'pass') {
        history.push('/home')
        return {type: loginConstants.LOGIN_SUCCESS}
    } else {
        return {type: loginConstants.REGUSTER_FAILURE}
    }
}

function logout() {
    return {type: loginConstants.LOGOUT}
}

function register(username, password) {
    return 
}   