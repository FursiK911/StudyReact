import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person'

const app = (props) => {

    const [ informationState, setInformationState] = useState({
        information: [
            {info: "Hello"},
            {info: "Hi"},
            {info: "Good day"},
            {info: "Good evening"},
        ],
        additional_infomation: [
            {additional: "Some text"},
        ]
    });
    console.log(informationState);
    
 const onClickButtonHandler = () => {
    console.log("Click!");
    setInformationState({
        information: [
            {info: "Have are nice day!"},
            {info: "Good bye!"},
            {info: "Bye-bye!"},
            {info: "See you later!"},
        ],
        additional_infomation: informationState.additional_infomation
    });
  }

    return (
        <div className="App">
          <h1>Component from AppWithFunction.js</h1>
          <button onClick={onClickButtonHandler}>Some buttons</button>
          <Person info={informationState.information[0].info}/>
          <Person info={informationState.information[1].info}/>
          <Person info={informationState.information[2].info}/>
          <Person info={informationState.information[3].info}>{informationState.additional_infomation[0].additional}</Person>
        </div>
      );

}

export default app;
