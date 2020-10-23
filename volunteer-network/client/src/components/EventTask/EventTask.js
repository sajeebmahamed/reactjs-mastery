import { Container, CssBaseline, makeStyles, Paper } from '@material-ui/core';
import React from 'react';
import Grid from '@material-ui/core/Grid';

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
const EventTask = (props) => {
    console.log(props.location.state);
    const classes = useStyles()
    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="md">
                <Grid container spacing={3}>
                    <Grid item xs={6}>
                        <Paper className={classes.paper}>
                            <div>

                            </div>
                        </Paper>
                    </Grid>
                    <Grid item xs={6}>
                        <Paper className={classes.paper}>xs=6</Paper>
                    </Grid>
                </Grid>
            </Container>
        </React.Fragment>
    );
};

export default EventTask;