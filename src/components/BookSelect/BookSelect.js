import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
// import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Button, Grid } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles({
    root: {
        maxWidth: 280,
        maxHeight: 450,
        margin: 'auto'
    },
    media: {
        width: '100%',
        height: 350,
        objectFit: 'contain'
    }
});


const BookSelect = (props) => {
    
    const history = useHistory();
    const {image, price, bookName, id} = props.book;
    

    const classes = useStyles();


    const handleBookSelect = () =>{
        history.push(`/checkout/${id}`)
    }


    return (

        <Card className={classes.root}>
            <CardMedia
                component="img"
                className={classes.media}
                alt={bookName}
                image={image}
                title=""
                object-fit="contain"
            />
            
                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="h5">
                        {bookName}
                    </Typography>
                    <Grid container>
                        <Grid item xs={6}>
                            <Typography variant="body2" color="textSecondary" component="p">
                                {price}
                            </Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Button onClick = {() => handleBookSelect(id)} variant="contained" color="primary">
                                Buy Now
                            </Button>
                        </Grid>
                    </Grid>
                </CardContent>
            
        </Card>

    );
};

export default BookSelect;