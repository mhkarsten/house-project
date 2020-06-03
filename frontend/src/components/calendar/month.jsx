import React, { useState, useEffect } from 'react'
import { startOfMonth, format, addDays, isMonday, subDays, isEqual } from 'date-fns'

const Month = (props) => {
    
    const [days, setDays] = useState([]) 


    useEffect(() => {
        setDays(genDays())
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props])

    //eventually make this a callback
    const genDays = () => {
        let days = []
        let calendarStart = startOfMonth(props.currentDate)
        
        while (!isMonday(calendarStart)) {
            calendarStart = subDays(calendarStart, 1)
        }

        for (let i = 0; i < 35; i++) {
            let pushed = false
            props.HUGOEntries.forEach((entry)=>{
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
                                <span key={'monthHeader' + index.toString()}>{format(addDays(new Date(), index), 'EEEE')}</span>
                            )
                        })
                    }
                </div>
                <div className='monthBody'>
                    {
                        days.map((day, index) => {
                            return(
                                <div className='monthCell' style={props.setCellColor(day)} key={'month' + day.toString() + index.toString()}>
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