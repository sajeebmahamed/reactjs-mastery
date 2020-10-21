import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import { Container } from '@material-ui/core';
import logo from '../../logos/logo.png'
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        paddingBottom: '5rem'
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

const MenuBar = () => {
    const classes = useStyles()
    return (
        <div className={classes.root}>
                <AppBar position="fixed" color="default">
                    <Container maxWidth="lg">
                    <Toolbar>
                        <img width="15%" src={logo} alt=""/>
                        <Typography variant="body1" className={classes.title} align="right">
                            Home
                        </Typography>
                        <Link>
                            <Typography variant="body1" className={classes.title} align="right">
                                Duration
                        </Typography>
                        </Link>
                        <Typography variant="body1" className={classes.title} align="right">
                            Events
                        </Typography>
                        <Typography variant="body1" className={classes.title} align="right">
                            Blog
                        </Typography>
                        <Button variant="contained" color="primary" size="small">
                            Register
                        </Button>
                        <Button variant="contained" color="primary" size="small">
                            Admin
                        </Button>
                    </Toolbar>
                    </Container>
                </AppBar>
        </div>
    );
};

export default MenuBar;