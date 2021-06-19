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
    const {imageLink, price, name, id, aName} = props.book;
    

    const classes = useStyles();


    const handleBookSelect = () =>{
        history.push(`/checkout/${id}`)
    }


    return (

        <Card className={classes.root}>
            <CardMedia
                component="img"
                className={classes.media}
                alt={name}
                image={imageLink}
                title=""
                object-fit="contain"
            />
            
                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="h3">
                        <strong>{name}</strong>
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="h6">
                        {aName}
                    </Typography>
                    
                    <Grid container spacing = {1}>
                        <Grid item xs={6}>
                            <Typography variant="body2" color="textSecondary" component="h6">
                                Price:{price}$
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