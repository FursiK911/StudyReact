import React, { Component } from 'react'

import Person from './Person/Person'

class Persons extends Component {
    shouldComponentUpdate(nextProps, nextState) {
        if (nextProps.inform !== this.props.inform) { //позволяет увеличить производительность. Т.к. render не происходит пока не изменится state.inform
            return true;
        }
        else {
            return false;
        }
    }

    render() {
        return this.props.persons.map((inform, index) => {
            return <Person
                click={() => this.props.clicked(index)}
                info={inform.info}
                changed={(event) => this.props.changed(event, inform.id)} />
        });
    }
}

export default Persons;