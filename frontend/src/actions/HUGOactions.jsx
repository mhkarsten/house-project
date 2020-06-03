import { HUGOConstants } from '../actions/_constants'

export const HUGOActions = {
    newHugoEntry,
    deleteHugoEntry,
    changeHugoView,
    setHugoColor, 
    setHugoValue
}

function newHugoEntry() {

    return {type: HUGOConstants.HUGO_ENTRY}
}

function deleteHugoEntry(id) {

    return {type: HUGOConstants.HUGO_ENTRY_DELETE, id}
}

function changeHugoView(filterType, interval) {

    return {type:HUGOConstants.CHANGE_CALENDAR_VIEW, filterType, interval}
}

function setHugoColor(colorMax, colorMin) {

    return {type: HUGOConstants.SET_HUGO_COLOR, colorMax, colorMin}
}

function setHugoValue(valueMax, valueMin) {

    return {type: HUGOConstants.SET_HUGO_VALUE, valueMax, valueMin}
}