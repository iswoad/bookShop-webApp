import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import { Button, Grid } from '@material-ui/core';




const useStyles = makeStyles((theme) => ({
    header: {
        backgroundColor: '#5C5054',
        // color: "black"
    },
    title: {
        color: "white"
    },
    root: {
        '& > *': {
          margin: theme.spacing(1),
        },
      }

}));


const Header = () => {
    const classes = useStyles();

    return (

        <AppBar className={classes.header} elevation = {3} position="sticky">
            <Toolbar>
                <Grid justify="space-between" // Add it here :)
                    container
                    spacing={24}>
                    <Grid item>
                        <Typography variant="h5" className={classes.title}>
                            ANSARY's Bookyard
                        </Typography>
                    </Grid>
                    <Grid>
                        <div className = {classes.root}>
                        <Button  >
                            <Link to='/home' 
                                style={{color: 'white', 
                                textDecoration: 'none'}}>
                                Home
                            </Link>
                        </Button>
                        <Button  >
                            <Link to='/orders' 
                                style={{color: 'white', 
                                textDecoration: 'none'}}>
                                Orders
                            </Link>
                        </Button>
                        <Button >
                            <Link to='/admins' 
                                style={{color: 'white', 
                                textDecoration: 'none'}}>
                                Admins
                            </Link>
                        </Button>
                        <Button  >
                            <Link to='/deals' 
                                style={{color: 'white', 
                                textDecoration: 'none'}}>
                                Deals
                            </Link>
                        </Button>
                        <Button variant="outlined" >
                            <Link to='/login' 
                                style={{color: 'white', 
                                textDecoration: 'none'}}>
                                LOGIN
                            </Link>
                        </Button>
                        </div>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>

    );
};

export default Header;