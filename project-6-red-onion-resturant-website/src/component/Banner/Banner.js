import React from 'react';
import { Button, Container, CssBaseline, InputBase, makeStyles, Paper, Typography } from '@material-ui/core';
import './Banner.css'

const bannerStyle = makeStyles((theme) => ({
    root: {
        display: 'flex',
        alignItems: 'center',
        width: 400,
        margin: '0 auto',
        borderRadius: '1rem'
    },
    searchBtn: {
        borderRadius: '1rem',
        textTransform: 'lowercase',
        padding: '0.5rem 2rem'
    },
    input: {
        marginLeft: theme.spacing(1),
        flex: 1,
        borderRadius: '10%',
    },
    iconButton: {
        padding: 10,
    },
    divider: {
        height: 28,
        margin: 4,
    },
}));
const Banner = () => {
    const classes = bannerStyle()
    return (
        <React.Fragment>
            <CssBaseline />
            <Container id="banner" style={{ height: 'auto' }} maxWidth={false}>
                <div style={{padding: '8rem' }}>
                    <Typography style={{ textAlign: 'center'}}>
                        <h1> Best food waiting for your belly </h1>
                    </Typography>
                    <Paper component="form" className={classes.root}>
                        <InputBase
                            className={classes.input}
                            placeholder="Search food items"
                            inputProps={{ 'aria-label': 'search foods item' }}
                        />
                        <Button className={classes.searchBtn} variant="contained" color="secondary">
                            Search
                        </Button>

                    </Paper>
                </div>
            </Container>

        </React.Fragment>
    );
};

export default Banner;