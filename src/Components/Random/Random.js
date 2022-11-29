import React from 'react';

const Random = ({ book }) => {
    console.log(book)
    return (
        <div>
            <h1>Randomly Selected Element is {book.name}</h1>
        </div>
    );
};

export default Random;