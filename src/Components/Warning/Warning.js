import React from 'react';
import './Warning.css'

const Warning = ({ msg, cancelHandlerWarning }) => {
    return (
        <div className='warning'>
            <h1>{msg}</h1>
            <button onClick={() => cancelHandlerWarning()} className="btn">Close</button>
        </div>
    );
};

export default Warning;