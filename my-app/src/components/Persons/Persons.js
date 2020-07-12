import React from 'react'

import Person from './Person/Person'

const persons = (props) => props.persons.map( (inform, index) => {
    return <Person
        click={() => props.clicked(index)}
        info={inform.info}
        changed={(event) => props.changed(event, inform.id)} />
});

export default persons;