import React from 'react'
import { Typography } from '@material-ui/core'

import '../style/contribution.scss'

const Contribution = (props) => {
    console.log(props.contribs)
    return (
        <div className='contribBody'>
            <div className='contribTitle'>
                <Typography className=''>Your </Typography>
                {
                    props.type == 'stats' ? <Typography>Stats</Typography>:
                    props.type == 'posts' ? <Typography>Posts</Typography>: null
                }
            </div>
            {
                props.contribs.map((contrib, index) => {
                    return (
                        <div className='contribEntry' key={contrib.time.toString()}>
                            <Typography>{ contrib.title }: { props.type == 'stats' ? contrib.value : null }</Typography>
                            <Typography>Posted At: { contrib.time }</Typography>
                        </div>
                    )
                })
            }

        </div>
    );
}

export default Contribution