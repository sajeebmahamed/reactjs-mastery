import { Box, Button, CircularProgress, Container, CssBaseline, LinearProgress, makeStyles, Paper, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import eventImg from '../../images/childSupport.png'
import Skeleton from '@material-ui/lab/Skeleton';
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

    useEffect(() => {
        axios('http://localhost:4000/register')
            .then(res => {
                setRegisteredEvent(res.data)
            })
            .catch(err => {
                console.log(err);
            })
    }, [])

    const handleCancel = (id) => {
        axios.delete('http://localhost:4000/cancel/' + id)
            .then(res => {
                console.log(res);
            })
    }

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
                                        {
                                            event === 0 ? <Skeleton variant="rect" width={210} height={118} />
                                            :
                                            <img width="20%" src={eventImg} alt="" />
                                        }
                                        
                                        <div>
                                            {
                                                event === 0 ?
                                                    <Box ml={1}>
                                                        <Skeleton animation="wave" width="40%" />
                                                        <Skeleton width="40%" />
                                                    </Box>
                                                :
                                                <div>
                                                        <Typography variant="h6" align="left" style={{ marginLeft: "1rem" }}> {event.event} </Typography>
                                                        <Typography variant="body1" align="left" style={{ marginLeft: "1rem" }}> {event.date} </Typography>
                                                </div>
                                            }
                                            {
                                                event === 0 ?
                                                    <Skeleton variant="rect" width="40%" height="20%" style={{ marginLeft: "8rem", marginTop: '3rem' }} />
                                                    :
                                                    <Button
                                                        onClick={() => handleCancel(event._id)}
                                                        variant="contained"
                                                        color="info" size="small" style={{ marginLeft: "15rem" }}>
                                                        Cancel
                                                    </Button>
                                            }
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