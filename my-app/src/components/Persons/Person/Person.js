import React, { Component } from 'react';
import Aux from '../../../hoc/Auxiliary'
import cssClasses from './Person.css'

class Person extends Component {
    render() {
        return (
            <Aux>
                <button className={cssClasses.button}>Button</button>
                <h2 onClick={this.props.click}>Component Person</h2>
                <h3>Added information: {this.props.info}</h3>
                <h4>{this.props.children}</h4>
                <p>Random: {Math.floor(Math.random() * 20)}</p>
                <input type="text" onChange={this.props.changed} value={this.props.info} />
            </Aux>
        );
    }

}

export default Person;