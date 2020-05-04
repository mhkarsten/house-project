import { loginConstants } from './_constants';
import { history } from '../store'

export const loginActions = {
    login,
    logout,
    register
}

function login(userName, password) {
    if (userName === 'admin' && password === 'pass') {
        history.push('/home')
        sessionStorage.setItem('user', JSON.stringify('prestent'));
        return {type: loginConstants.LOGIN_SUCCESS}
    } else {
        return {type: loginConstants.LOGIN_FAILURE}
    }
}

function logout() {
    return {type: loginConstants.LOGOUT}
}

function register(username, password) {
    return  {}
}   