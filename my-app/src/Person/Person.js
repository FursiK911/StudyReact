import React from 'react';

const person = (props) => {
    return (
    <div className='Person'>
        <h2 onClick={props.click}>Component Person</h2>
        <h3>Added information: {props.info}</h3>
        <h4>{props.children}</h4>
        <p>Random: {Math.floor(Math.random()*20)}</p>
        <input type="text" onChange={props.changed} value={props.info}/>
    </div>
    );
}

export default person;