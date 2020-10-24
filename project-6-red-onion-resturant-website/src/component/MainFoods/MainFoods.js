import React, { useState } from 'react';
import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, Container, CssBaseline, Grid, makeStyles, Paper, Tab, Tabs, Typography } from '@material-ui/core';
import './MainFoods.css'
import { Link } from 'react-router-dom';


const cardStyle = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    media: {
        width: theme.spacing(20),
        height: theme.spacing(20),
        margin: '0 auto'
    },
    card: {
        boxShadow: 'none'
    },
}));
const MainFoods = ({ foods }) => {
    const classes = cardStyle()
    const [value, setValue] = useState(0);
    const [selectedFoodType, setSelectedFoodType] = useState("breakfast")
    const selectedType = foods.filter(food => food.type === selectedFoodType)
    console.log(selectedType);

    const handleChange = (event, newValue) => {
        if (newValue === 0) {
            setSelectedFoodType("breakfast")
        }
        if (newValue === 1) {
            setSelectedFoodType("lunch")
        }
        if (newValue === 2) {
            setSelectedFoodType("dinner")
        }
        setValue(newValue);
    };
    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="md">
                

                <div className={classes.root}>
                    <Paper style={{ padding: '3rem', boxShadow: 'none' }} className={classes.root}>
                        <Tabs
                            value={value}
                            onChange={handleChange}
                            indicatorColor="primary"
                            textColor="primary"
                            centered
                        >
                            <Tab label="Breakfast" />
                            <Tab label="Lunch" />
                            <Tab label="Dinner" />
                        </Tabs>
                    </Paper>
                    <Grid container spacing={10}>
                        
                        {
                            selectedType.map(food => (
                                <Grid item xs md={4}>
                                    <Link style={{textDecoration:'none'}} to={`/item/${food.id}`}>
                                        <Card id="cardItem" className={classes.card}>
                                            <CardMedia
                                                className={classes.media}
                                                image={food.image}
                                            />
                                            <CardContent style={{ textAlign: 'center' }}>
                                                <Typography variant="h6" color="textSecondary" component="p">
                                                    {food.name}
                                                </Typography>
                                                <Typography variant="body2" color="textSecondary" component="p">
                                                    {food.short_des}
                                                </Typography>
                                                <Typography variant="h5" color="textSecondary" component="p">
                                                    {food.price}
                                                </Typography>
                                            </CardContent>
                                        </Card>
                                    </Link>
                                </Grid>
                            ))
                        }
                    </Grid>
                </div>
            </Container>
        </React.Fragment>
    );
};

export default MainFoods;