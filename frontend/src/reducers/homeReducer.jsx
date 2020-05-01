import { homeConstants } from '../actions/_constants'

const stats = {
    'Corona Cases':{
        checked: false,
        value: 252432
    },
    'Joints Smoked':{
        checked: false,
        value: 420
    },
    'Fucks Given': {
        checked: false,
        value: 0
    }
}

const messages = [
    {
        sender: 'Daniel',
        time: '12/3/19',
        body: 'Hugo is gay!'
    },
    {
        sender: 'Peter',
        time: '24/8/17',
        body: 'Hugo is gay!'
    },
    {
        sender: 'Hugo',
        time: '12/3/99',
        body: 'Hugo is gay!'
    }
]

const homeReducer = (state={stats:stats, messages:messages}, action) => {
    switch(action.type) {
        case homeConstants.STAT_NEW:
            return {
                ...state,
                stats: [
                    ...state.stats,
                    {
                        ...action.stat
                    }
                ]
            }
        case homeConstants.STAT_DELETE:
            return {
                ...state
            }
        case homeConstants.STAT_SELECT:
            console.log(state)
            return {
                ...state,
                [action.statName]: {
                    checked: action.checked
                }
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