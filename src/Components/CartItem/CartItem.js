import React from 'react';
import './CartItem.css'

const CartItem = ({ book, deleteBtn }) => {
    //console.log(book);
    return (
        <div className='cartItem'>
            <img src={book.img} alt="" />
            <h5>{book.name}</h5>
            <button onClick={() => deleteBtn(book.id)}>Delete</button>
        </div>
    );
};

export default CartItem;