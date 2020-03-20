import React from 'react'
import { Typography, TextField, Button, Checkbox, FormGroup, FormControlLabel } from '@material-ui/core';

const Stats = (props) => {
    const stats = props.stats
    const selectedStats = []

    function increase() {

    }

    function decrease() {

    }

    return (

        <div className='statsBody'>
            <div>
                <FormGroup>
                {
                    stats.map((stat, index) => {
                        return (
                            <FormControlLabel
                                control = {
                                    <Checkbox
                                    />
                                }
                            />
                        );
                    })
                }
                </FormGroup>
                <div>
                    <Typography>New Stat</Typography>
                    <TextField id='standard-basic'/>
                    <div>
                        <Button>+</Button>
                        <TextField id='standard-basic'/>
                        <Button>-</Button>
                    </div>
                    <div>
                        <Button>Increase</Button>
                        <Button>Decrease</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Stats