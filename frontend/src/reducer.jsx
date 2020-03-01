import { combineReducers } from 'redux'
import buildsReducer from './reducers/buildsReducer'
import homeReducer from './reducers/homeReducer'
import loginReducer from './reducers/loginReducer'

export default combineReducers({
    buildsReducer,
    homeReducer,
    loginReducer,
})