import React from 'react';

const withClass = (WrappedCompoent, className) => {
    return (props) => (
        <div className={className}>
            <WrappedCompoent />
        </div>
    )
}

export default withClass;
