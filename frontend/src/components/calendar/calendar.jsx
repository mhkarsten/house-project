import React, { useState } from 'react'
import { Typography, Button, ButtonGroup, AppBar, Tabs, Tab } from '@material-ui/core'

import '../../style/calendar.scss'
import Month from './month'
import Year from './year'
import Week from './week'

const Calendar = (props) => {

    const [selected, setSelected] = useState('week')
    function handleTabChange(event, newTab) {
        setSelected(newTab)

    }

    return (
        <div>
            <div>
                <Typography>Current Date: {new Date().toString()}</Typography>
                <div>
                    <AppBar position='static'>
                        <Tabs value={selected} onChange={handleTabChange}>
                            <Tab label='Week' value='week'/>
                            <Tab label='Month' value='month'/>
                            <Tab label='Year' value='year'/>
                        </Tabs>
                    </AppBar>
                    <div hidden={selected !== 'week'}>
                        <Week/>
                    </div>
                    <div hidden={selected !== 'month'}>
                        <Month currentDate={props.currentDate} HUGOEntries={props.HUGOEntries} changeView={props.changeView}/>
                    </div>
                    <div hidden={selected !== 'year'}>
                        <Year/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Calendar