import React, {useEffect} from 'react';
import classes from './Cockpit.css'


const cockpit = (props) => {

    useEffect(() => {
        console.log('[cockpit] useEffect');
        //http request...
        setTimeout(() => {
            //alert('Time is Out!');
            console.log('Time is Out!');
        },1000);
    },[props.information]);

    let btnClass = [classes.button];
    const classNames = [];
    
    if(props.showCards)
    {
        if (props.informationLenght <= 2) {
            classNames.push(classes.red);
          }
          if (props.informationLenght <= 1) {
            classNames.push(classes.bold);
          }
          btnClass.push(classes.Red);
    }
    return (
        <div className={classes.Cockpit}>
            <h1 className={classNames.join(' ')}>Component from App.js</h1>
            <button className={btnClass.join(' ')} alt={props.showCards} onClick={props.toggle}>Toggle</button>
        </div>

    );
};

export default React.memo(cockpit);