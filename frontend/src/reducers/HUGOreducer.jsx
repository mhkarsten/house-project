
import { HUGOConstants } from '../actions/_constants'

var today = new Date();
Math.ceil((today - new Date(today.getFullYear(),0,1)) / 86400000);

const HUGOItems = [
    {
        id: '111',
        year: '2020',
        day: 138,
        length: 7
    },
    {
        id: '112',
        year: '2020',
        day: 139,
        length: 7
    },
    {        
        id: '113',
        year: '2020',
        day: 140,
        length: 7
    },
    {
        id: '114',
        year: '2020',
        day: 141,
        length: 7
    }
]

export const HUGOReducer = (state={HUGOItems}, action) => {
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
            default:
                return state
    }
}