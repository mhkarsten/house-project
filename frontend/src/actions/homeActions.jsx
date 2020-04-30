import { history } from  '../store'
import { homeConstants } from './_constants'

export const homeActions = {
    newStat,
    selectStat,
    deleteStat,
    incrementStats,
    decrementStats
}

function newStat(statName, statValue, checked) {

    return {type: homeConstants.STAT_NEW}
}

function selectStat(statName, checked) {

    return {type: homeConstants.STAT_SELECT, statName, checked}
}

function deleteStat(statName) {

    return {type: homeConstants.STAT_DELETE}
}

function incrementStats(stats) {

    return {type: homeConstants.STAT_INCREMENT}
}

function decrementStats(stats) {

    return {type: homeConstants.STAT_INCREMENT}
}

