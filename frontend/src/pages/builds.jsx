import React from 'react'
import {Link} from 'react-router-dom'

class Builds extends React.Component {
    constructor(props) {
        super(props);
    }

    render () {
        return (
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/home">Home</Link>
                        </li>
                        <li>
                            <Link to="/builds">Builds</Link>
                        </li>
                    </ul>
                </nav>
                This is the home page
            </div>
        );
    }
}

export default Builds