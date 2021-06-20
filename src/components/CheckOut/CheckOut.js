import { Container } from '@material-ui/core';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
// import FakeData from '../../FakeData/FakeData.json';

const CheckOut = () => {
    const { bookId } = useParams();
    // const selectedBook = FakeData.find(bk => bk.id == bookId);
    // const { bookName, price } = selectedBook;
    const [ selectedBook, setSelectedBook ] = useState({});

    useEffect( () => {
        fetch('http://localhost:4000/checkout/'+bookId)
        .then(res => res.json())
        .then(data => setSelectedBook(data));
    }, [bookId])

    return (
        <div>
            <Container>
                <h1>this is the selected Book: {selectedBook.name}  and price is {selectedBook.price}: </h1>
            </Container>
        </div>
    );
};

export default CheckOut;