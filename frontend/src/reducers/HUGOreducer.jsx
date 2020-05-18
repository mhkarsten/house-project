import { HUGOConstants } from '../actions/_constants'

const HUGOItems = [
    {
        id: '111',
        personID: 'HUGO',
        date: new Date(2020, 4, 17),
        start: '17',
        length: 7
    },
    {
        id: '112',
        personID: 'HUGO',
        date: new Date(2020, 4, 18),
        start: '18',
        length: 7
    },
    {        
        id: '113',
        personID: 'HUGO',
        date: new Date(2020, 4, 19),
        start: '18',
        length: 7
    },
    {
        id: '114',
        personID: 'HUGO',
        date: new Date(2020, 4, 20),
        start: '20',
        length: 7
    }
]

const HUGOFilter = {
    type: 'year',
    interval: {start: new Date(2020, 1, 1), end: new Date(2020, 1, 1)}
}

export const HUGOReducer = (state={HUGOItems, HUGOFilter}, action) => {
    switch(action.type) {
        case HUGOConstants.HUGO_ENTRY:
            return {
                ...state,
                HUGOItems: [
                    ...state.HUGOItems,
                    {
                        id: action.id,
                        year: action.year,
                        day: action.day,
                        length: action.length
                    }
                ]
            }
        case HUGOConstants.HUGO_ENTRY_DELETE:
            return {
                ...state,
                HUGOItems: state.HUGOItems.filter((item) => {
                    return !item.id == action.id
                })
            }
        case HUGOConstants.CHANGE_CALENDAR_VIEW:
            return {
                ...state,
                HUGOFilter: {
                    type: action.filterType, 
                    interval: action.interval
                }
            }
        default:
            return state
    }
}