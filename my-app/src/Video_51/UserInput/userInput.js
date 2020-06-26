import React from 'react'

const style = {
    border: '3px solid black',
};

const userInput = (props) => {
    return <input 
    style={style}
    type="text" 
    onChange={props.changed}
    value={props.currentName} />;
}

export default userInput;