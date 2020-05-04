import { combineReducers } from 'redux'
import buildsReducer from './buildsReducer'
import { statsReducer, postsReducer } from './homeReducer'
import loginReducer from './loginReducer'

export default combineReducers({
    buildsReducer,
    stats: statsReducer,
    posts: postsReducer,
    loginReducer,
})