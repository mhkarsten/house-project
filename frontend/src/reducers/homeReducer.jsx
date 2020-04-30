import { homeConstants } from '../actions/_constants'

const stats = [
    {
        name: "Corona cases",
        checked: false,
        value: 252432
    },
    {
        name: "Joints Smoked",
        checked: false,
        value: 420
    },
    {
        name: "Fucks Given",
        checked: false,
        value: 0
    }
]

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

const homeReducer = (state={stats:[]}, action) => {
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
            console.log(action)
            return {
                ...state,
                [action.statName]: !action.checked
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