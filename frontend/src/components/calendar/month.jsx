import React, { useState, useEffect } from 'react'
import { Typography, Button } from '@material-ui/core'
import { endOfMonth, startOfMonth, addMonths, subMonths, format, addDays, isMonday, subDays, isEqual } from 'date-fns'
import tinycolor from 'tinycolor2'
import { MaterialPicker } from 'react-color'

const Month = (props) => {
    
    const [datePaginate, setDatePaginate] = useState(props.currentDate)
    const [days, setDays] = useState([]) 
    const [startValue, setStartValue] = useState(startOfMonth(props.currentDate))
    const [minChanger, setMinChanger] = useState(true)
    const [maxChanger, setMaxChanger] = useState(true)

    const colorMax = props.HUGOColor.colorMax
    const colorMin = props.HUGOColor.colorMin

    const valueMax = props.HUGOColor.valueMax
    const valueMin = props.HUGOColor.valueMin

    useEffect(() => {
        setDays(genDays())
        props.changeView('month', {start: startValue, end: endOfMonth(startValue)})
    }, [datePaginate])

    useEffect(() => {
        setDays(genDays())
    }, [props])

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

    const paginateMonthInc = (event) => {
        setDatePaginate(addMonths(datePaginate, 1))
        setStartValue(startOfMonth(addMonths(datePaginate, 1)))
    }

    const paginateMonthDec = (event) => { 
        setDatePaginate(subMonths(datePaginate, 1))
        setStartValue(startOfMonth(subMonths(datePaginate, 1)))
    }

    const setCellColor = (day) => {
        if (day.entry == null) {
            return {backgroundColor: colorMin}
        } else {
            return {backgroundColor: tinycolor.mix(colorMin, colorMax, (day.entry.length/valueMax)*100)}
        }
    }

    const genDays = () => {
        let days = []
        let calendarStart = startOfMonth(datePaginate)
        while (!isMonday(calendarStart)) {
            calendarStart = subDays(calendarStart, 1)
        }

        for (let i = 0; i < 35; i++) {
            let pushed = false
            props.HUGOEntries.forEach((entry, index)=>{
                if(isEqual(entry.date, addDays(calendarStart, i))) {
                    days.push({entry: entry, day: addDays(calendarStart, i)})
                    pushed = true
                }
            })

            if (!pushed) {
                days.push({entry: null, day: addDays(calendarStart, i)})
            }
        }

        return days
    }

    return (
        <div className='monthCalBody'>
            <div>
                <div className='monthPaginate'>
                    <Button onClick={paginateMonthInc}>Next</Button>
                    <Typography>Current Month: {format(datePaginate, 'MMMM')} {format(datePaginate, 'y')}</Typography>
                    <Button onClick={paginateMonthDec}>Previous</Button>
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
            <div className='monthCalBody'>
                <div className='weekDayHeader'>
                    {
                        Array(7).fill().map((value, index) => {
                            return(
                                <span>{format(addDays(new Date(), index), 'EEEE')}</span>
                            )
                        })
                    }
                </div>
                <div className='monthBody'>
                    {
                        days.map((day, index) => {
                            return(
                                <div className='monthCell' style={setCellColor(day)}>
                                    <span className='monthCellLabel'>{format(day.day, 'd')}</span>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Month