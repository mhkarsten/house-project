import { loginConstants } from '../actions/_constants'
//login
//logout
//wrong password
//newUser
//wrong new user information

const loginReducer = (state = {}, action) => {
    switch (action.type) {
        case loginConstants.LOGIN_REQUEST:
            return {
                ...state,
                loggingIn: true,
            };
        case loginConstants.LOGIN_SUCCESS:
            return {
                ...state,
                loggedIn: true,
            };
        case loginConstants.LOGIN_FAILURE:
            return {
                ...state
            };
        case loginConstants.LOGOUT:
            return {
                ...state
            };
        default:
            return state
    }
}

export default loginReducer