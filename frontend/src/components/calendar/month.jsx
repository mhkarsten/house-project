import React, { useState, useEffect } from 'react'
import { Typography, Button } from '@material-ui/core'
import { endOfMonth, startOfMonth, addMonths, subMonths, format, addDays, isMonday, subDays, isEqual } from 'date-fns'

const Month = (props) => {
    
    const [datePaginate, setDatePaginate] = useState(props.currentDate)
    const [days, setDays] = useState([]) 
    const [startValue, setStartValue] = useState(startOfMonth(props.currentDate))
    console.log(props.HUGOEntries)

    useEffect(() => {
        setDays(genDays())
        props.changeView('month', {start: startValue, end: endOfMonth(startValue)})
    }, [datePaginate])

    useEffect(() => {
        setDays(genDays())
    }, [props])

    const paginateMonthInc = (event) => {
        setDatePaginate(addMonths(datePaginate, 1))
        setStartValue(startOfMonth(addMonths(datePaginate, 1)))
    }

    const paginateMonthDec = (event) => { 
        setDatePaginate(subMonths(datePaginate, 1))
        setStartValue(startOfMonth(subMonths(datePaginate, 1)))
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
            <div className='monthPaginate'>
                <Button onClick={paginateMonthInc}>Next</Button>
                <Typography>Current Month: {format(datePaginate, 'MMMM')} {format(datePaginate, 'y')}</Typography>
                <Button onClick={paginateMonthDec}>Previous</Button>
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
                                <div className='monthCell'>
                                    <span className='monthCellLabel'>{format(day.day, 'd')}</span>
                                    <span>{day.entry == null ? 'no': 'yes'}</span>
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