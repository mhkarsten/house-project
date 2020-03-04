import { combineReducers } from 'redux'
import buildsReducer from './buildsReducer'
import homeReducer from './homeReducer'
import loginReducer from './loginReducer'

export default combineReducers({
    buildsReducer,
    homeReducer,
    loginReducer,
})