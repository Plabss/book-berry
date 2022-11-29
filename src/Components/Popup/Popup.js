import React from 'react'
import './Popup.css'

const Popup = (props) => {
    const { name, price, img, stock } = props.randomBook
    const cancelHandler = props.cancelHandler
    return (
        <div className='popup'>
            <div className='bookDetails'>
                <img src={img} alt="" />
                <h3>{name}</h3>
                <h4>Price : {price}</h4>
                <p>Stock : {stock}</p>
            </div>
            <button className='btnBuy'>Buy Now!</button>
            <button onClick={() => cancelHandler()} className="btn">Cancel</button>
        </div>
    )
}

export default Popup