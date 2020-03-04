import { loginConstants } from '../actions/_constants'
//login
//logout
//wrong password
//newUser
//wrong new user information

const loginReducer = (state = {loggedIn: false}, action) => {
    switch (action.type) {
        case loginConstants.LOGIN_REQUEST:
            return {
                loggingIn: true,
                user: action.user
            };
        case loginConstants.LOGIN_SUCCESS:
            return {
                loggedIn: true,
                user: action.user
            };
        case loginConstants.LOGIN_FAILURE:
            return {};
        case loginConstants.LOGOUT:
            return {};
        default:
            return state
    }
}

export default loginReducer