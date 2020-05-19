import React, { useState, useEffect } from 'react'
import { Typography, Button, ButtonGroup, AppBar, Tabs, Tab } from '@material-ui/core'
import { subWeeks, subYears, endOfYear, endOfMonth, startOfMonth, addMonths, subMonths, format, addDays, isMonday, subDays, isEqual, addWeeks, addYears, startOfWeek, startOfYear, endOfWeek } from 'date-fns'
import tinycolor from 'tinycolor2'
import { MaterialPicker } from 'react-color'

import '../../style/calendar.scss'
import Month from './month'
import Year from './year'
import Week from './week'

const Calendar = (props) => {

    const [selected, setSelected] = useState('month')
    const [datePaginate, setDatePaginate] = useState(props.currentDate)
    const [startValue, setStartValue] = useState(startOfMonth(props.currentDate))
    const [endValue, setEndValue] = useState(endOfMonth(props.currentDate))
    const [minChanger, setMinChanger] = useState(true)
    const [maxChanger, setMaxChanger] = useState(true)

    const colorMax = props.HUGOColor.colorMax
    const colorMin = props.HUGOColor.colorMin

    const valueMax = props.HUGOColor.valueMax
    const valueMin = props.HUGOColor.valueMin

    useEffect(() => {
        setNewBounds()
    }, [selected, datePaginate])

    useEffect(() => {
        props.changeView(selected, {start: startValue, end: endValue})
    }, [startValue, endValue])

    function handleTabChange(event, newTab) {
        setSelected(newTab)
    }

    const handleMaxChange = (color) => {
        props.changeColor(tinycolor(color.hex), colorMin)
    }

    const handleMinChange = (color) => {
        props.changeColor(colorMax, tinycolor(color.hex))
    }

    const changeColor = (event) => {
        if (event.target.className == 'valueMaxColor') {
            setMaxChanger(!maxChanger)
        } else if (event.target.className == 'valueMinColor') {
            setMinChanger(!minChanger)
        }
    }

    const setNewBounds = () => {
        let newStart, newEnd
        if (selected == 'week') {
            newStart = startOfWeek(datePaginate)
            newEnd = endOfWeek(newStart)
        } else if(selected == 'month') {

            newStart =  startOfMonth(datePaginate)
            while (!isMonday(newStart)) {
                newStart = subDays(newStart, 1)
            }
            newEnd = addDays(newStart, 34)

        } else if(selected == 'year') {
            newStart = startOfYear(datePaginate)
            newEnd = endOfYear(newStart)
        }

        setStartValue(newStart)
        setEndValue(newEnd)
    }

    const paginateInc = (event) => {
        let newDate

        if (selected == 'week') {
            newDate = addWeeks(datePaginate, 1)
        } else if(selected == 'month') {
            newDate = addMonths(datePaginate, 1)
        } else if(selected == 'year') {
            newDate = addYears(datePaginate, 1)
        }
        setDatePaginate(newDate)
    }

    const paginateDec = (event) => { 
        let newDate

        if (selected == 'week') {
            newDate = subWeeks(datePaginate, 1)
        } else if(selected == 'month') {
            newDate = subMonths(datePaginate, 1)
        } else if(selected == 'year') {
            newDate = subYears(datePaginate, 1)
        }
        setDatePaginate(newDate)
    }

    const setCellColor = (day) => {
        if (day.entry == null) {
            return {backgroundColor: colorMin}
        } else {
            return {backgroundColor: tinycolor.mix(colorMin, colorMax, (day.entry.length/valueMax)*100)}
        }
    }

    return (
        <div>
            <div>
                <Typography>Current Date: {new Date().toString()}</Typography>
                <div>
                    <div className='monthPaginate'>
                        <Button onClick={paginateInc}>Next</Button>
                        <Typography>Current Month: {format(datePaginate, 'MMMM')} {format(datePaginate, 'y')}</Typography>
                        <Button onClick={paginateDec}>Previous</Button>
                    </div>
                    <div className='sampleBody'>
                        <div hidden={minChanger}>
                            <MaterialPicker color={colorMin}
                                            onChangeComplete={handleMinChange}/>
                        </div>
                        <div className='valueMinColor' onClick={changeColor} style={{background: colorMin}}>
                        </div>
                        <Typography>0</Typography>
                        <div className='colorSampleCellBody'>
                            {
                                Array(10).fill().map((value, index) => {
                                    return (
                                        <div className='colorSampleCell' style={{backgroundColor: tinycolor.mix(colorMin, colorMax, index*10)}}></div>
                                    )
                                })
                            }
                        </div>
                        <Typography>{valueMax}</Typography>
                        <div className='valueMaxColor' onClick={changeColor} style={{background: colorMax}}>
                        </div>
                        <div hidden={maxChanger}>
                            <MaterialPicker color={colorMax}
                                            onChangeComplete={handleMaxChange}/>
                        </div>
                    </div>
                </div>
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
                        <Month currentDate={datePaginate}
                               setCellColor={setCellColor}  
                               HUGOEntries={props.HUGOEntries} 
                               changeView={props.changeView}
                               changeColor={props.changeColor}
                               HUGOColor={props.HUGOColor}/>
                    </div>
                    <div hidden={selected !== 'year'}>
                        <Year currentDate={datePaginate}
                              setCellColor={setCellColor} 
                              HUGOEntries={props.HUGOEntries} 
                              changeView={props.changeView}
                              changeColor={props.changeColor}
                              HUGOColor={props.HUGOColor}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Calendar