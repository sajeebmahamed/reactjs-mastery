import { Container, CssBaseline, Grid, makeStyles, Paper, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import { categories } from '../../data/categories';
import Category from './Category';

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
const VolunteerCategories = () => {
    const [data, setData] = useState([...categories])
    console.log(data);
    const classes = useStyles();
    return (
        <React.Fragment>
            <CssBaseline />
            <main>
                <Container maxWidth="lg">
                    <Grid container spacing={3}>

                        {
                            data.map(categorie => (
                                <Grid item xs={6} md={3}>
                                    <Category categorie={categorie}></Category>
                                </Grid>
                            ))
                        }
                    </Grid>
                </Container>
            </main>
        </React.Fragment>
    );
};

export default VolunteerCategories;