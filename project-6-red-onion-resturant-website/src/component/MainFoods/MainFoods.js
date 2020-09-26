import React from 'react';
import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, Container, CssBaseline, Grid, makeStyles, Paper, Tab, Tabs, Typography } from '@material-ui/core';

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
        height: 0,
        paddingTop: '100%', // 16:9
    },
}));
const MainFoods = ({foods}) => {
    const classes = cardStyle()
    console.log(foods);
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <React.Fragment>
            <CssBaseline/>
            <Container maxWidth="md">
                <div className={classes.root}>
                    <Paper style={{padding: '3rem', boxShadow:'none'}} className={classes.root}>
                        <Tabs
                            value={value}
                            onChange={handleChange}
                            indicatorColor="primary"
                            textColor="primary"
                            centered
                        >
                            <Tab label="Item One" />
                            <Tab label="Item Two" />
                            <Tab label="Item Three" />
                        </Tabs>
                    </Paper>
                    <Grid container spacing={3}>
                        {
                            foods.map(food => (
                                <Grid item xs md={4}>
                                    <Card className={classes.root}>
                                        <CardMedia
                                            className={classes.media}
                                            image={food.image}
                                        />
                                        <CardContent style={{textAlign:'center'}}>
                                            <Typography variant="body2" color="textSecondary" component="h6">
                                                {food.name}
                                            </Typography>
                                            <Typography variant="body2" color="textSecondary" component="p">
                                                {food.short_des}
                                            </Typography>
                                            <Typography variant="body2" color="textSecondary" component="h6">
                                                {food.price}
                                            </Typography>
                                        </CardContent>
                                    </Card>
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