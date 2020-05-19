import React, {useState, useEffect} from 'react'
import tinycolor from 'tinycolor2'
import { MaterialPicker } from 'react-color'
import { startOfYear, format, addDays, isMonday, subDays, isEqual, addMonths } from 'date-fns'

const Year = (props) => {

    const [days, setDays] = useState([])

    useEffect(() => {
        setDays(genDays())
    }, [props])

    const genDays = () => {
        let days = []
        let calendarStart = startOfYear(props.currentDate)

        for (let i = 0; i < 365; i++) {
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
                            <span>{format(addMonths(startOfYear(props.currentDate), index), 'MMMM')}</span>
                        )
                    })
                }
            </div>
            <div className='yearContent'>
                {
                    days.map((day)=>{
                        return (
                            <div className='yearCell' style={props.setCellColor(day)}>
                            </div>
                        )
                    })
                }
            </div>
            <div>

            </div>
        </div>
    )
}

export default Year