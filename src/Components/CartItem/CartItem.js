import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './CartItem.css'

const CartItem = ({ book, deleteBtn }) => {
    //console.log(book);
    return (
        <div className='cartItem'>
            <img src={book.img} alt="" />
            <h5>{book.name}</h5>
            <FontAwesomeIcon icon={faTrash} onClick={() => deleteBtn(book.id)} className="deleteBtn"></FontAwesomeIcon>
        </div>
    );
};

export default CartItem;