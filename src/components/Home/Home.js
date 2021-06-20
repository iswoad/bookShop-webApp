import React, { useEffect, useState } from 'react';
import './Home.css';
import { Container, Grid, makeStyles, CssBaseline } from '@material-ui/core';
import bgImage from '../../images/5487845.jpg'
import BookSelect from '../BookSelect/BookSelect';


const useStyles = makeStyles({
    root: {
        minHeight: '100vh',
        backgroundImage: `url(${bgImage})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'

    },

    bookMenu: {
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',


    }
});

const Home = () => {
    const classes = useStyles();

    const [books, setBooks] = useState([]);
    useEffect(() => {
        fetch('http://localhost:4000/books')
        .then(res => res.json())
        .then(data => {
            setBooks(data)
            console.log(data)
        })
    }, [])
    
    return (

        <div className={classes.root}>
            <Container className={classes.bookMenu}>
                <Grid container spacing={4}>
                    {
                        books.map(book =>
                            <Grid item lg={4} style={{marginTop: '30px'}}>
                                <BookSelect book={book} ></BookSelect>
                            </Grid>
                        )
                    }
                </Grid>
            </Container>
            <CssBaseline />
        </div>

    );
};

export default Home;