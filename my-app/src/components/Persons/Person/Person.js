import React, { Component } from 'react';
import Aux from '../../../hoc/Auxiliary'
import cssClasses from './Person.css'
import withClass from '../../../hoc/withClass'
import PropTypes from 'prop-types'
import AuthContext from '../../../context/auth-context'

class Person extends Component {

    constructor(props) {
        super(props);
        this.inputElementRef = React.createRef();
    }

    static contextType = AuthContext;

    componentDidMount() {
        this.inputElementRef.current.focus();
        console.log(this.context.authenticated);
    }

    render() {
        return (
            <Aux>
                <button className={cssClasses.button}>Button</button>
                <h2 onClick={this.props.click}>Component Person</h2>
                {this.context.authenticated ? <h3>Added information: {this.props.info}</h3> : <h3>Please Log In</h3>}
                <h4>{this.props.children}</h4>
                <p>Random: {Math.floor(Math.random() * 20)}</p>
                <input
                    type="text"
                    onChange={this.props.changed}
                    value={this.props.info}
                    ref={this.inputElementRef} />
            </Aux>
        );
    }

}

Person.propTypes = {
    click: PropTypes.func,
    info: PropTypes.string,
    changed: PropTypes.func,
}

export default withClass(Person, cssClasses.Person);