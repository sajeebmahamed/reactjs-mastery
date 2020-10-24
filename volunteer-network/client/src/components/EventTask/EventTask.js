import { Button, Container, CssBaseline, makeStyles, Paper, Typography } from '@material-ui/core';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import eventImg from '../../images/childSupport.png'

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
    const classes = useStyles()
    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="md">
                <Grid container spacing={3}>
                    <Grid item xs={6}>
                        <Paper className={classes.paper}>
                            <div className={classes.event}>
                                <img width="20%" src={eventImg} alt=""/>
                                <div>
                                    <Typography variant="h6" align="left" style={{marginLeft:"1rem"}}> Humanity More </Typography>
                                    <Typography variant="body1" align="left" style={{marginLeft:"1rem"}}> 29 sep, 2020 </Typography>
                                    <Button variant="contained" color="info" size="small" style={{ marginLeft: "15rem" }}> Cancel </Button>
                                </div>
                            </div>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </React.Fragment>
    );
};

export default EventTask;