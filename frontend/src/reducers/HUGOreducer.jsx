import { HUGOConstants } from '../actions/_constants'
import tinycolor from 'tinycolor2'

const HUGOItems = [
    {
        id: '111',
        personID: 'HUGO',
        date: new Date(2020, 4, 17),
        start: '17',
        length: 3
    },
    {
        id: '112',
        personID: 'HUGO',
        date: new Date(2020, 4, 18),
        start: '18',
        length: 3
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
        length: 12
    },
    {
        id: '115',
        personID: 'HUGO',
        date: new Date(2020, 4, 21),
        start: '20',
        length: 9
    },
    {
        id: '116',
        personID: 'HUGO',
        date: new Date(2020, 4, 22),
        start: '20',
        length: 7
    },
    {
        id: '117',
        personID: 'HUGO',
        date: new Date(2020, 4, 23),
        start: '20',
        length: 5
    },
    {
        id: '118',
        personID: 'HUGO',
        date: new Date(2020, 4, 12),
        start: '20',
        length: 2
    },
    {
        id: '119',
        personID: 'HUGO',
        date: new Date(2020, 4, 1),
        start: '20',
        length: 6
    },
    {
        id: '120',
        personID: 'HUGO',
        date: new Date(2020, 4, 2),
        start: '20',
        length: 8
    }
]

const HUGOFilter = {
    type: 'year',
    interval: {start: new Date(2020, 1, 1), end: new Date(2020, 1, 1)}
}

const HUGOColor = {
    colorMax: tinycolor('#3366ff'),
    colorMin: tinycolor('#ff0000'),
    
    valueMax: Math.max.apply(Math, HUGOItems.map((entry) => { return entry.length; })),
    valueMin: Math.min.apply(Math, HUGOItems.map((entry) => { return entry.length; }))
}

export const HUGOReducer = (state={HUGOItems, HUGOFilter, HUGOColor}, action) => {
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

        case HUGOConstants.SET_HUGO_COLOR:
            return {
                ...state,
                HUGOColor: {
                    ...state.HUGOColor,
                    colorMax: action.colorMax,
                    colorMin: action.colorMin
                }
            }
        case HUGOConstants.SET_HUGO_VALUE:
            return {
                ...state,
                HUGOColor: {
                    ...state.HUGOColor,
                    valueMin: action.valueMin,
                    valueMax: action.valueMax
                }
            }
        default:
            return state
    }
}