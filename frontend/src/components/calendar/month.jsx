import React, { useState, useEffect } from 'react'
import { Typography, Button } from '@material-ui/core'
import { endOfMonth, startOfMonth, addMonths, subMonths, format, addDays, isMonday, subDays, isEqual } from 'date-fns'
import tinycolor from 'tinycolor2'
import { MaterialPicker } from 'react-color'

const Month = (props) => {
    
    const [days, setDays] = useState([]) 
    const [emptyDays, setEmptyDays] = useState([])

    const colorMax = props.HUGOColor.colorMax
    const colorMin = props.HUGOColor.colorMin

    const valueMax = props.HUGOColor.valueMax
    const valueMin = props.HUGOColor.valueMin

    useEffect(() => {
        setDays(genDays())
    }, [props])



    const genDays = () => {
        let days = []
        let calendarStart = startOfMonth(props.currentDate)
        
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
                                <div className='monthCell' style={props.setCellColor(day)}>
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