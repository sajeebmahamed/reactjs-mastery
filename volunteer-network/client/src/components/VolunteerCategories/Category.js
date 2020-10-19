import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Card, CardActionArea, CardContent, CardHeader, CardMedia, Container, CssBaseline, Typography } from '@material-ui/core';

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

const Category = ({ categorie }) => {
    const classes = useStyles();
    return (
        <React.Fragment>
            <CssBaseline />
                <Card>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            alt="Contemplative Reptile"
                            height="140"
                            image={require(`../../images/${categorie.image}`)}
                            title="Contemplative Reptile"
                        />
                    </CardActionArea>
                    <CardContent>
                        <Typography variant="body1" align="center">
                            {categorie.name}
                        </Typography>
                    </CardContent>
                </Card>
        </React.Fragment>
    );
};


export default Category;