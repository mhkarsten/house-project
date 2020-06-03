import { combineReducers } from 'redux'
import buildsReducer from './buildsReducer'
import { statsReducer, postsReducer } from './homeReducer'
import loginReducer from './loginReducer'
import { accountReducer } from './accountReducer'
import { HUGOReducer } from './HUGOreducer'

export default combineReducers({
    HUGOEntries: HUGOReducer,
    user: accountReducer,
    builds: buildsReducer,
    stats: statsReducer,
    posts: postsReducer,
    loginReducer,
})