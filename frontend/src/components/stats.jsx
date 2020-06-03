import React from 'react'
import { Typography, TextField, Button, Checkbox, FormGroup, FormControlLabel } from '@material-ui/core';
import { useState } from 'react';

const Stats = (props) => {
    const [newStatName, setNewStatName] = useState('')
    const [newStatValue, setNewStatValue] = useState('')
    
    function updateNewStat(event) {
        if (event.target.name === 'newStatName') {
            setNewStatName(event.target.value)
        } else {
            setNewStatValue(event.target.value)
        }
    }

    return (
        <div className='statsChangeBox'>
            <div className='incrementBox'>
                <div>
                    <Typography>Create New Stat</Typography>
                    <form className='createNewStat' onSubmit={(e) => {
                          e.preventDefault()
                          props.newStat(newStatName, props.user.userId, new Date(), newStatValue)}}>
                        <div className='statValues'>
                            <TextField id='standard-basic' label='Name of Stat' name='newStatName' onChange={updateNewStat}/>
                            <TextField id='standard-number' label='Initial Value' name='newStatValue' type='number' onChange={updateNewStat}/>
                        </div>
                        <Button type='submit'>Create</Button>
                    </form>
                </div>
                <div className='increaseExistingStat'>
                    <Typography>Manage Stats</Typography>
                    <Typography>Number of Stats: {0}</Typography>
                    <div className='increaseButtons'>
                        <Button onClick={() => {props.increaseStats()}}>Increase</Button>
                        <Button onClick={() => {props.decreaseStats()}}>Decrease</Button>
                        <Button onClick={() => {props.deleteStats()}}>Delete</Button>
                    </div>
                </div>
            </div>
            <FormGroup className='statsBox'>
            {
                props.stats.stats.map((stat, index) => {
                    return (
                        <div className='stat' key={stat.time}>
                            <Typography>{stat.value}</Typography>
                            <FormControlLabel
                                control = {
                                    <Checkbox
                                        checked={stat.checked}
                                        onChange={(e) => {props.selectStat(e.target.name, e.target.checked)}}
                                        name={stat.title}
                                    />
                                }
                                label={stat.title}
                            />
                        </div>
                    );
                })
            }
            </FormGroup>
        </div>
    );
}

export default Stats