import React, { useEffect, useState } from 'react';
import Book from '../Book/Book';
import CartItem from '../CartItem/CartItem';
import './Shop.css'

const Shop = () => {
    const [books, setBooks] = useState([]);
    const [selectedBooks, setSelectedBooks] = useState([]);

    const selectBtn = (book) => {
        if (selectedBooks.length === 4) {
            console.log("Four Books are already selected")
        }
        else if (!selectedBooks.includes(book)) {
            const books = [...selectedBooks, book];
            setSelectedBooks(books);
        }
        else {
            console.log("Already Exist")
        }
    }

    const deleteBtn = (id) => {
        const remain = selectedBooks.filter(book => book.id !== id)
        setSelectedBooks(remain)
    }

    const eraseAllBtn = () => {
        setSelectedBooks([])
    }

    const ran = []
    const pickOneBtn = () => {
        const randomIndx = Math.floor(Math.random() * selectedBooks.length);
        ran.push(selectedBooks[randomIndx])
    }

    useEffect(() => {
        fetch("fakeData.json")
            .then(res => res.json())
            .then(data => setBooks(data));
    }, [])

    return (
        <div className='shop'>
            <div className='left'>
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
            <div className='right'>
                <div className='cart'>
                    {
                        selectedBooks.map(book => <CartItem
                            key={book.id}
                            book={book}
                            deleteBtn={deleteBtn}
                        ></CartItem>)
                    }
                    <button onClick={pickOneBtn}>Pick One for me!</button>
                    <br />
                    <button onClick={eraseAllBtn}>Erase All</button>
                </div>
            </div>
        </div>
    );
};

export default Shop;