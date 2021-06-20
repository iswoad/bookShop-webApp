import { Container } from '@material-ui/core';
import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useForm } from "react-hook-form";
import "./Admin.css";

const Admin = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const [ imageUrl, setImageUrl ] = useState(null);

    const onSubmit = data => {
        const bookData = {
            name:data.bookName,
            aName: data.authorName,
            price: data.bookPrice,
            imageLink: imageUrl
        }
        const url = `https://mysterious-bayou-10236.herokuapp.com/addBook`
        console.log(bookData);
        fetch(url,{
            method: 'POST',
            headers:{
                'content-Type' : 'application/json'
            },
            body: JSON.stringify(bookData)
        })
        .then(res => console.log('server side response', res))
    };

    const handleImageUpload = (event)=> {
        const imageData = new FormData();
        imageData.set('key',  'e337ee47dfd720c893875c61d5c17f72');
        imageData.append('image', event.target.files[0])

        axios.post('https://api.imgbb.com/1/upload', imageData)
          .then(function (response) {
            setImageUrl(response.data.data.display_url);
          })
          .catch(function (error) {
            console.log(error);
          });
        console.log(event.target.file);
    }


    return (
        <div>
            <Container>
            <form onSubmit={handleSubmit(onSubmit)}>
                <h1>Book Name</h1>
                <input style={{border: '2px solid black', padding: '10px', borderRadius: '5px'}} type= "text" name="bookName" defaultValue="" {...register("bookName")}/>
                <br></br>
                <h1>Author Name</h1>
                <input style={{border: '2px solid black', padding: '10px', borderRadius: '5px'}} type= "text" name="authorName" defaultValue="" {...register("authorName")}/>
                <br></br>
                <h1>Book Price</h1>
                <input style={{border: '2px solid black', padding: '10px', borderRadius: '5px'}} type= "text" name="bookPrice" defaultValue="" {...register("bookPrice")} />
                <br></br>
                <h1>Book Image</h1>
                <input style={{border: '2px solid black', padding: '10px', borderRadius: '5px'}} type = "file" onChange = {handleImageUpload}/>
                <br />
                {errors.exampleRequired && <span>This field is required</span>}
                <br />
                <input style={{border: '2px solid green', padding: '10px', borderRadius: '5px'}} type="submit" />
            </form>
            </Container>
            
        </div>
    );
};

export default Admin;