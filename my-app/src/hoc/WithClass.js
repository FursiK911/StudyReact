import React from 'react';

const withClass = (WrappedElement, className) => {
    return props => (
        <div className={className}>
            <WrappedElement {...props}/>
        </div>
    )
};

export default withClass;