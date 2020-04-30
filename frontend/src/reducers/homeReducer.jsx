// import { homeConstants } from './constants'


// 187g flour 


const homeConstants = {
    STAT_NEW: '',
    STAT_DELETE: '',
    STAT_INCREMENT:'',
    STAT_DECREMENT:'',
    STAT_SELECT:'',

    POST_NEW:'',
    POST_EDIT:'', 
}
const homeReducer = (state={}, action) => {
    switch(action.type) {
        case homeConstants.STAT_NEW:
            return {
                ...state
            }
        case homeConstants.STAT_DELETE:
            return {
                ...state
            }
        case homeConstants.STAT_INCREMENT:
            return {
                ...state
            }
        case homeConstants.STAT_DECREMENT:
            return {
                ...state
            }
        default:
            return state
    }
}

export default homeReducer

//send message
//recieve messages