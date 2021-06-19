import { Container } from '@material-ui/core';
import React from 'react';
import { useParams } from 'react-router-dom';
import FakeData from '../../FakeData/FakeData.json';

const CheckOut = () => {
    const { bookId } = useParams();
    const selectedBook = FakeData.find(bk => bk.id == bookId);
    const { bookName, price } = selectedBook;
    return (
        <div>
            <Container>
                <h1>this is the selected Book: {bookName}  and price is {price}: </h1>
            </Container>
        </div>
    );
};

export default CheckOut;