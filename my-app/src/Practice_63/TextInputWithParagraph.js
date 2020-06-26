import React, {useState} from 'react'

const inputWithParagraph = (props) => {
    return (
        <div className="inputs">
            <p>{props.text}</p>
            <input onChange={props.changed} value={props.text} type="text"></input>
        </div>
      );
}

export default inputWithParagraph;