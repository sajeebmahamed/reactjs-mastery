import { Button } from '@material-ui/core';
import React, { useContext } from 'react';
import { firebaseConfig } from './firebase.config';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Card, CardActionArea, CardContent, CardHeader, CardMedia, Container, CssBaseline, Typography } from '@material-ui/core';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';

import { LoginContext } from '../../App'
import { useHistory, useLocation } from 'react-router-dom';

const firebase = require("firebase/app");
require("firebase/auth");
const provider = new firebase.auth.GoogleAuthProvider();
firebase.initializeApp(firebaseConfig);

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}))

const Login = () => {
    const classes = useStyles();
    const [loggedInUser, setLoggedInUser] = useContext(LoginContext)
    console.log(loggedInUser);
    let history = useHistory();
    let location = useLocation();

    let { from } = location.state || { from: { pathname: "/" } };
    let login = () => {
        loggedInUser.email.authenticate(() => {
            history.replace(from);
        });
    };
    const handleLogin = () => {
        firebase.auth().signInWithPopup(provider)
            .then(res => {
                setLoggedInUser(res.user)
            })
            .catch(err => {
                console.log(err.message);
            })
    }
    
    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="sm">
                <Card>
                    <CardContent>
                        <Typography variant="h6" align="center"> Login With </Typography>
                        <Button
                            variant="contained"
                            color="secondary"
                            className={classes.button}
                            startIcon={<PlayArrowIcon />}
                            onClick={handleLogin}
                        >
                            Continue with google
                        </Button>
                    </CardContent>
                </Card>
            </Container>
        </React.Fragment>
    );
};

export default Login;