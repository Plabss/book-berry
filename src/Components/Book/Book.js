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
            </button>
        </div>
    );
};

export default Book;