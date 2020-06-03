import { homeConstants } from './_constants'

export const homeActions = {
    newStat,
    selectStat,
    deleteStats,
    incrementStats,
    decrementStats,

    newPost
}

function newStat(title, userId, time, value) {
    return {type: homeConstants.STAT_NEW, title, userId, time, value}
}

function selectStat(statName, checked) {
    return {type: homeConstants.STAT_SELECT, statName, checked}
}

function deleteStats() {
    return {type: homeConstants.STAT_DELETE}
}

function incrementStats() {
    return {type: homeConstants.STAT_INCREMENT}
}

function decrementStats() {
    return {type: homeConstants.STAT_DECREMENT}
}

function newPost(sender, postDate, postTitle, postBody) {
    return {type: homeConstants.POST_NEW, sender, postDate, postTitle, postBody}
}

