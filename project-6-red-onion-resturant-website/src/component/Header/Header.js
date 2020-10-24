import React from 'react';
import { AppBar, Button, Container, CssBaseline, IconButton, makeStyles, Toolbar, Typography } from '@material-ui/core';
import logo from '../../img/logo2.png'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import {Link} from 'react-router-dom'

const headerStyle = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menu: {
        color: '#2d2d2d',
        backgroundColor: '#fff',
        boxShadow: 'none'
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

const Header = () => {
    const classes = headerStyle();
    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="lg">
                <AppBar className={classes.menu} position="static">
                    <Toolbar>
                        <Link to="/">
                            <Typography>
                                <img style={{ width: '20%', marginRight: 'auto' }} src={logo} alt="" />
                            </Typography>
                        </Link>
                        <div style={{marginLeft:'auto'}}>
                            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                                <ShoppingCartIcon />
                            </IconButton>
                            <Button color="inherit">Login</Button>
                            <Button color="inherit">Sign up</Button>
                        </div>
                    </Toolbar>
                </AppBar>
            </Container>
        </React.Fragment>

    );
};

export default Header;