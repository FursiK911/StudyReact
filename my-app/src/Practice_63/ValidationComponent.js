import React, { useState } from 'react'

const validationComponent = (props) => {

    const [validationState, setValidationState] = useState({
        warnings: [
            { text: "Too short" },
            { text: "Too long" },
            { text: "That`s good!" },
        ],
    });

    let warningText = null;
    if (props.count < 5) {
        warningText = validationState.warnings[0].text;
    }
    else if (props.count > 10) {
        warningText = validationState.warnings[1].text;
    }
    else {
        warningText = validationState.warnings[2].text;
    }

    console.log(warningText);
    return (
        <div className="validation-component">
            <p>{props.count}</p>
            <p>{warningText}</p>
        </div>
    );
}

export default validationComponent;