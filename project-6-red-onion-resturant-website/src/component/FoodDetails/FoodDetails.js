import { Button, Container, CssBaseline, Grid, InputBase, makeStyles, Paper, TextField, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { foodsData } from '../../data/foods';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

const foodDetail = makeStyles((theme) => ({
    button: {
        borderRadius: '1.5rem',
        padding: '0.5rem 1.5rem',
        marginTop: '1rem'
    },
    input: {
        width: '40%',
        padding: '0 0.5rem'
    },
    from: {
        width: '20%',
        textAlign: 'center',
        borderRadius: '1.5rem'
    }
}));

const FoodDetails = () => {
    const classes = foodDetail()
    const { id } = useParams()
    const food = foodsData.find(food => food.id === id)
    const [add, setAdd] = useState(0)
    const [cart, setCart] = useState([])
    console.log(cart);
    const handleCart = (food) => {
        const newCart = [...cart, food]
        setCart(newCart)
    }
    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="md">
                <Grid container spacing={5}>
                    <Grid item as xs md={6}>
                        <Typography variant="h5">
                            {food.name}
                        </Typography>
                        <Typography variant="body1">
                            {food.full_des}
                        </Typography>
                        {cart.length}
                        <div style={{ display: 'flex' }}>
                            <Typography variant="h6">
                                {food.price}
                            </Typography>
                            <Paper className={classes.from} component="form">
                                <RemoveIcon
                                    // onClick={removeCart}
                                />
                                <InputBase
                                    className={classes.input}
                                    value={cart.length}
                                    inputProps={{ 'aria-label': 'search foods item' }}
                                />
                                <AddIcon
                                />

                            </Paper>
                        </div>
                        <Button
                            variant="contained"
                            color="secondary"
                            className={classes.button}
                            startIcon={<AddShoppingCartIcon />}
                            onClick={() => handleCart(food)}
                        >
                            Add
                        </Button>
                    </Grid>
                    <Grid item as md={6}>
                        <img style={{ width: '100%' }} src={food.image} alt="foods" />
                    </Grid>
                </Grid>
            </Container>
        </React.Fragment>
    );
};

export default FoodDetails;