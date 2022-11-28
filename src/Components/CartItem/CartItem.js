import React from 'react';
import './CartItem.css'

const CartItem = ({ book }) => {
    //console.log(book);
    return (
        <div className='cartItem'>
            <img src={book.img} alt="" />
            <h5>{book.name}</h5>
            <button>Delete</button>
        </div>
    );
};

export default CartItem;