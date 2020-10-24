import { Button, Container, CssBaseline, makeStyles, Paper, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import eventImg from '../../images/childSupport.png'
const axios = require('axios');

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    event: {
        display: 'flex'
    }
}))
const EventTask = (props) => {
    const [registeredEvent, setRegisteredEvent] = useState([])
    console.log(registeredEvent);

    useEffect(() => {
        axios('http://localhost:4000/register')
            .then(res => {
                setRegisteredEvent(res.data)
            })
            .catch(err => {
                console.log(err);
            })
    }, [])

    const classes = useStyles()
    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="md">
                <Grid container spacing={3}>
                    { 
                         registeredEvent.map(event => (
                            <Grid item xs={6}>
                                <Paper className={classes.paper}>
                                    <div className={classes.event}>
                                        <img width="20%" src={eventImg} alt="" />
                                        <div>
                                            <Typography variant="h6" align="left" style={{ marginLeft: "1rem" }}> {event.event} </Typography>
                                            <Typography variant="body1" align="left" style={{ marginLeft: "1rem" }}> {event.date} </Typography>
                                            <Button variant="contained" color="info" size="small" style={{ marginLeft: "15rem" }}> Cancel </Button>
                                        </div>
                                    </div>
                                </Paper>
                            </Grid>
                        ))
                    }
                </Grid>
            </Container>
        </React.Fragment>
    );
};

export default EventTask;