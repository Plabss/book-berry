import React, { useEffect, useState } from 'react';
import Book from '../Book/Book';
import CartItem from '../CartItem/CartItem';
import Popup from '../Popup/Popup';
import Warning from '../Warning/Warning';
import './Shop.css'
import gif from '../../GIF/UKzC.gif'

const Shop = () => {
    const [books, setBooks] = useState([]);
    const [selectedBooks, setSelectedBooks] = useState([]);
    const [randomBook, setRandomBook] = useState({});
    const [warning, setWarning] = useState("");

    const selectBtn = (book) => {
        if (selectedBooks.length === 4) {
            setWarning("Four Books are already selected")
        }
        else if (!selectedBooks.includes(book)) {
            const books = [...selectedBooks, book];
            setSelectedBooks(books);
        }
        else {
            setWarning("This Book is Already Selected")
        }
    }

    const deleteBtn = (id) => {
        const remain = selectedBooks.filter(book => book.id !== id)
        setSelectedBooks(remain)
    }

    const eraseAllBtn = () => {
        setSelectedBooks([]);
        setRandomBook({});
    }

    const pickOneBtn = () => {
        if (selectedBooks.length === 4) {
            const randomIndx = Math.floor(Math.random() * selectedBooks.length);
            setRandomBook(selectedBooks[randomIndx])
        }
        else {
            setWarning("You have to select 4 Books")
        }
    }

    useEffect(() => {
        fetch("fakeData.json")
            .then(res => res.json())
            .then(data => setBooks(data));
    }, [])

    const cancelHandler = () => {
        setRandomBook({})
    }

    const cancelHandlerWarning = () => {
        setWarning("")
    }

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
                {selectedBooks.length > 0 &&
                    <div>
                        <div className='cart'>
                            {
                                selectedBooks.map(book => <CartItem
                                    key={book.id}
                                    book={book}
                                    deleteBtn={deleteBtn}
                                ></CartItem>)
                            }
                            <button onClick={pickOneBtn} className="pickUpBtn">Pick One for me!</button>
                            <br />
                            <button onClick={eraseAllBtn} className="eraseAllBtn">Erase All</button>
                        </div>
                        {randomBook.id &&
                            <Popup randomBook={randomBook} cancelHandler={cancelHandler} />
                        }
                        {warning.length > 0 &&
                            <Warning msg={warning} cancelHandlerWarning={cancelHandlerWarning}></Warning>
                        }
                    </div>
                }
                {!selectedBooks.length &&
                    <div>
                        <img src={gif} alt="" />
                        <h1>“The more that you read, the more things you will know. The more that you learn, the more places you’ll go.”</h1>
                    </div>
                }

            </div>
        </div>
    );
};

export default Shop;