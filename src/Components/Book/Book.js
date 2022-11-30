import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './Book.css'

const Book = ({ book, selectBtn }) => {
    //console.log(book);
    const { img, name, price } = book;
    return (
        <div className='book'>
            <img src={img} alt="" />
            <h4>{name}</h4>
            <h5>{price}</h5>
            <button onClick={() => selectBtn(book)} className='select-btn'>
                <p>Select</p>
                <FontAwesomeIcon icon={faCartShopping} className="icon"></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Book;