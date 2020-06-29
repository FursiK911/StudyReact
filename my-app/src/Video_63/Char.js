import React from 'react'
import '../Practice_63/CharComponent.css'

const char = (props) => {
    return(
        <div className="char-component" onClick={props.click}>
            <p>{props.character}</p>
        </div>
    );
}

export default char;