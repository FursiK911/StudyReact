import React, { Component } from 'react';
import cssClasses from './Person.css'

class Person extends Component {
    render() {
        return (
            <div className={cssClasses.divStyled}>
                <button className={cssClasses.button}>Button</button>
                <h2 onClick={this.props.click}>Component Person</h2>
                <h3>Added information: {this.props.info}</h3>
                <h4>{this.props.children}</h4>
                <p>Random: {Math.floor(Math.random() * 20)}</p>
                <input type="text" onChange={this.props.changed} value={this.props.info} />
            </div>
        );
    }

}

export default Person;