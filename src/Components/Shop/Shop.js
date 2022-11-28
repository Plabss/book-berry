import React, { useEffect, useState } from 'react';
import Book from '../Book/Book';
import CartItem from '../CartItem/CartItem';
import './Shop.css'

const Shop = () => {
    const [books, setBooks] = useState([]);
    const [selectedBooks, setSelectedBooks] = useState([]);

    const selectBtn = (book) => {
        const books = [...selectedBooks, book];
        setSelectedBooks(books);
    }

    useEffect(() => {
        fetch("fakeData.json")
            .then(res => res.json())
            .then(data => setBooks(data));
    }, [])

    return (
        <div>
            <h1>Shop Component</h1>
            <div className='shop'>
                <div>
                    <h1>Books list</h1>
                    <div className='books-container'>
                        {
                            books.map(book => <Book
                                book={book}
                                key={book.id}
                                selectBtn={selectBtn}
                            ></Book>)
                        }
                    </div>
                </div>
                <div>
                    <h1>Cart</h1>
                    {
                        selectedBooks.map(book => <CartItem
                            key={book.id}
                            book={book}
                        ></CartItem>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Shop;