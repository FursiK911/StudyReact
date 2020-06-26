import React from 'react'
import './CharComponent.css'

const charComponent = (props) => {
    return(
        <div className="char-component" onClick={props.click}>
            <p>{props.char}</p>
        </div>
    );
}

export default charComponent;