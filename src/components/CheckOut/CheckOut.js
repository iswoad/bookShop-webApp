import { Table } from "react-bootstrap";
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useContext } from "react";
import { UserContext } from "../../App";


const CheckOut = () => {
    const { bookId } = useParams();
    const [ selectedBook, setSelectedBook ] = useState({});
    const [ loggedInUser, setLoggedInUser ] = useContext(UserContext);

    useEffect( () => {
        fetch(`http://localhost:4000/book/${bookId}`)
        .then(res => res.json())
        .then(data => setSelectedBook(data));
    }, [bookId])


    const { name, price } = selectedBook;

    const handleCheckOut = () => {
        console.log('order complete');
        const orderDetails = {...loggedInUser, boughtBook: selectedBook}


        fetch('http://localhost:4000/addOrder', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(orderDetails)
        })
        .then(res => res.json())
        .then(data => {
            if(data){
                alert('Your order placed Successfully');
            }
        })
    }

    return (
        <div style={{  height: "700px" }}>
      <div style={{ width: "800px", marginLeft: "350px" }}>
        <h1
          style={{ textAlign: "center", color: "green", margin: "20px 20px" }}
        >
          CheckOut
        </h1>
        <Table responsive="lg">
          <thead>
            <tr>
              <th>Description</th>
              <th>Quantity</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{name}</td>
              <td>1</td>
              <td>${price}</td>
            </tr>
            <tr>
              <td>Total</td>
              <td>1</td>
              <td>${price}</td>
            </tr>
          </tbody>
        </Table>
        <div style={{ display: "flex", flexDirection: "row-reverse" }}>
          <button style={{border: '2px solid green', padding: '10px', borderRadius: '5px'}} onClick = {() => handleCheckOut()} variant="primary">
            CheckOut
          </button>
        </div>
      </div>
    </div>
    );
};

export default CheckOut;