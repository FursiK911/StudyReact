import React from 'react';
import classes from './Cockpit.css'


const cockpit = (props) => {
    let btnClass = [classes.button];
    const classNames = [];
    
    if(props.showCards)
    {
        if (props.information.length <= 2) {
            classNames.push(classes.red);
          }
          if (props.information.length <= 1) {
            classNames.push(classes.bold);
          }
          btnClass.push(classes.Red);
    }
    return (
        <div className={classes.Cockpit}>
            <h1 className={classNames.join(' ')}>Component from App.js</h1>
            <button className={btnClass.join(' ')} alt={props.showCards} onClick={props.toggle}>Toggle</button>
            {
                props.infoCards
            }
        </div>

    );
};

export default cockpit;