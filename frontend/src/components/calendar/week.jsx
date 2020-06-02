import React, {useState, useEffect} from 'react'
import { startOfYear, format, addDays, isMonday, subDays, isEqual, addMonths, getDaysInYear, startOfWeek } from 'date-fns'

const Week = (props) => {

    const [days, setDays] = useState([])

    useEffect(() => {
        setDays(genDays())
    }, [props])

    const genWeekDay = (entry) => {
        let hours = []
        let currentTime = 0

        while (currentTime < 24) {
            hours.push(<div className='hourCell' style={{backgroundColor: props.HUGOColor.colorMin}}>hour: {currentTime}</div>)
            currentTime ++;
        }

        if (entry == 'empty') {
            return hours

        } else {
            entry.events.forEach((event, index) => {
                let eventLength = event.end - event.start

                for(let i = 0; i < eventLength + 1; i++) {
                    hours[event.start + i] =  <div className='hourCell' style={props.setHourCellColor(event)}>HUGO IS HERE</div>
                }
            })

            return hours
        }
    }

    const genDays = () => {
        let days = []
        let calendarStart = startOfWeek(props.currentDate, {weekStartsOn: 1})

        for (let i = 0; i < 7; i++) {
            let pushed = false
            props.HUGOEntries.forEach((entry, index)=>{
                if(isEqual(entry.date, addDays(calendarStart, i))) {
                    days.push({entry: entry, day: addDays(calendarStart, i)})
                    pushed = true
                }
            })

            if (!pushed) {
                days.push({entry: 'empty', day: addDays(calendarStart, i)})
            }
        }

        return days
    }

    return (
        <div className='weekBox'>
            <div className='weekHeaders'>
                {
                    Array(6).fill().map((item, index) => {
                        return (
                            <span>{format(addDays(startOfWeek(props.currentDate, {weekStartsOn: 1}), index), 'EEEE')}</span>
                        )
                    })
                }
            </div>
            <div className='weekContent'>
                {
                    days.map((day, index) => {

                        return (
                            <div className='weekDayCell'>
                                <div>{format(day.day, 'dd')}</div>
                                {   
                                    genWeekDay(day.entry)
                                }
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Week