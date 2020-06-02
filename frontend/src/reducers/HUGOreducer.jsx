import { HUGOConstants } from '../actions/_constants'
import tinycolor from 'tinycolor2'

const HUGOItems = [
    {
        id: '119',
        personID: 'HUGO',
        date: new Date(2020, 4, 1),
        events: [{start: 15, end: 21}]
    },
    {
        id: '120',
        personID: 'HUGO',
        date: new Date(2020, 4, 2),
        events: [{start: 19, end: 23, overflow: 10}]
    },
    {
        id: '121',
        personID: 'HUGO',
        date: new Date(2020, 4, 3),
        events: [{start: 0, end: 4, overflow: 10}]
    },
    {
        id: '118',
        personID: 'HUGO',
        date: new Date(2020, 4, 12),
        events: [{start: 14, end: 16}]
    },
    {
        id: '111',
        personID: 'HUGO',
        date: new Date(2020, 4, 17),
        events: [{start: 5, end: 12}]
    },
    {
        id: '112',
        personID: 'HUGO',
        date: new Date(2020, 4, 18),
        events: [{start: 12, end: 15}]
    },
    {        
        id: '113',
        personID: 'HUGO',
        date: new Date(2020, 4, 19),
        events: [{start: 19, end: 23, overflow: 8}]
    },
    {
        id: '114',
        personID: 'HUGO',
        date: new Date(2020, 4, 20),
        events: [{start: 0, end: 2, overflow: 8}, {start: 12, end: 23}]
    },
    {
        id: '115',
        personID: 'HUGO',
        date: new Date(2020, 4, 21),
        events: [{start: 18, end: 23, overflow: 10}]
    },
    {
        id: '116',
        personID: 'HUGO',
        date: new Date(2020, 4, 22),
        events: [{start: 0, end: 3, overflow: 10}, {start: 19, end: 23, overflow: 8}]
    },
    {
        id: '117',
        personID: 'HUGO',
        date: new Date(2020, 4, 23),
        events: [{start: 0, end: 2, overflow: 8}, {start: 20, end: 23}]
    }
]

const HUGOFilter = {
    type: 'year',
    interval: {start: new Date(2020, 1, 1), end: new Date(2020, 1, 1)}
}

const HUGOColor = {
    colorMax: tinycolor('#3366ff'),
    colorMin: tinycolor('#ff0000'),
    
    valueMax: Math.max.apply(Math, HUGOItems.map((entry) => { return entry.events.map((event) => { return event.end - event.start }).reduce((a, b) => a + b, 0)})),
    valueMin: Math.min.apply(Math, HUGOItems.map((entry) => { return Math, entry.events.map((event) => { return event.end - event.start }).reduce((a, b) => a + b, 0)}))
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