import { createSelector } from 'reselect'
import { isWithinInterval } from 'date-fns'

const HUGOFilter = state => state.HUGOEntries.HUGOFilter
const HUGOEntries = state => state.HUGOEntries.HUGOItems

export const HUGOEntriesSelector = createSelector(
    [ HUGOFilter, HUGOEntries ],
    (HUGOFilter, HUGOEntries) => {
        switch (HUGOFilter.type) {
            case 'year':
                return HUGOEntries
            case 'month':
                return HUGOEntries.filter((entry, index) => {
                    if(isWithinInterval(entry.date, HUGOFilter.interval)){
                        return entry
                    }
                })
            case 'week':
                return HUGOEntries.filter((entry, index) => {
                    if(isWithinInterval(entry.date, HUGOFilter.interval)){
                        return entry
                    }
                })
        }
    }
)