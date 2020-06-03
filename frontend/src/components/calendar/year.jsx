import React, {useState, useEffect} from 'react'
import { startOfYear, format, addDays, isMonday, subDays, isEqual, addMonths, getDaysInYear } from 'date-fns'

const Year = (props) => {

    const [days, setDays] = useState([])


    useEffect(() => {
        setDays(genDays())
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props])

    const genDays = () => {
        let days = []
        let calendarStart = startOfYear(props.currentDate)
        let emptyDays = startOfYear(props.currentDate) 

        while (!isMonday(emptyDays)) {
            emptyDays = subDays(emptyDays, 1)
            days.push({entry: null, day: 'empty'})
        }

        for (let i = 0; i < getDaysInYear(calendarStart); i++) {
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
        <div className='yearBody'>
            <div className='yearHeaders'>
                {
                    Array(12).fill().map((value, index) => {
                        return(
                            <span key={'yearHeader' + index.toString()}>{format(addMonths(startOfYear(props.currentDate), index), 'MMMM')}</span>
                        )
                    })
                }
            </div>
            <div className='yearContent'>
                {
                    days.map((day, index) => {
                        if (typeof day.day === 'string') {
                            return (
                                <div className='emptyCell' key={day.toString() + index.toString() + 'yearCont'}>
                                </div>
                            )
                        } else {
                            return (
                                <div key={day.toString() + index.toString() + 'yearCont'} className={'yearCell ' + index} style={props.setCellColor(day)} name={day.day.toString()}>
                                </div>
                            )
                        }   
                    })
                }
            </div>
            <div>

            </div>
        </div>
    )
}

export default Year