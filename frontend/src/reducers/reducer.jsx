import { combineReducers } from 'redux'
import buildsReducer from './buildsReducer'
import { statsReducer, postsReducer } from './homeReducer'
import loginReducer from './loginReducer'
import { accountReducer } from './accountReducer'

export default combineReducers({
    user: accountReducer,
    builds: buildsReducer,
    stats: statsReducer,
    posts: postsReducer,
    loginReducer,
})