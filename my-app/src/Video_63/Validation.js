import React from 'react'

const validation = (props) => {
    let validationMessage = 'Text enough';

    if (props.inputLenght < 5) {
        validationMessage = 'Text too short';
    }

    return (
        <div>
            <p>{validationMessage}</p>
        </div>
    )

}

export default validation;