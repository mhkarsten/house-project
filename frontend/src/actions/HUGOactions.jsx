import { HUGOConstants } from '../actions/_constants'

export const HUGOActions = {
    newHugoEntry,
    deleteHugoEntry
}

function newHugoEntry() {

    return {type: HUGOConstants.HUGO_ENTRY}
}

function deleteHugoEntry(id) {

    return {type: HUGOConstants.HUGO_ENTRY_DELETE, id}
}