import React from 'react';
import { useParams } from 'react-router-dom';
import FakeData from '../../FakeData/FakeData.json';

const CheckOut = () => {
    const { bookId } = useParams();
    const selectedBook = FakeData.find( bk => bk.id == bookId);
    const {  bookName, price } = selectedBook;
    return (
        <div>
            <h1>this is the selected Book: {bookName}  and price is {price}: </h1>
        </div>
    );
};

export default CheckOut;