import React from 'react'

import './userOutput.css'

const userOutput = (props) => {
    return (
        <div className="user-output">
            <p>Username: {props.userName}</p>
            <p>Some text too</p>
        </div>
    );
}

export default userOutput;