import React from 'react'
import './Popup.css'

const Popup = (props) => {
    const { name, price } = props.randomBook
    const cancelHandler = props.cancelHandler
    return (
        <div className='popup'>
            <h1>{name}</h1>
            <p>{price}</p>
            <button onClick={() => cancelHandler()}>Cancel</button>
        </div>
    )
}

export default Popup