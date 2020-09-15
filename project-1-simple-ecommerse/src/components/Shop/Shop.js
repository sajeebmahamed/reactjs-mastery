import React, { useState, useEffect } from 'react'
import fakeData from '../../fakeData'
import Product from '../Product/Product'
import { Container, Row, Col, Button } from 'react-bootstrap'
import Cart from '../Cart/Cart'
import { addToDatabaseCart, getDatabaseCart } from '../../utilities/databaseManager'
import { Link } from 'react-router-dom'

const Shop = () => {
    const data = fakeData.slice(0, 10)
    const [product, setProduct] = useState(data)

    const [cart, setCart] = useState([])

    const [keyWord, setKeyword] = useState([])
    // console.log(keyWord);

    const handleAddProduct = (product) => {
        const addedKey = product.key;
        const sameProduct = cart.find(pd => pd.key === addedKey);
        let count = 1;
        let newCart;
        if (sameProduct) {
            count = sameProduct.quantity + 1;
            sameProduct.quantity = count;
            const others = cart.filter(pd => pd.key !== addedKey);
            newCart = [...others, sameProduct];
        }
        else {
            product.quantity = 1;
            newCart = [...cart, product];
        }
        setCart(newCart);
        addToDatabaseCart(product.key, count);
    }

    useEffect(() => {
        const savedCart = getDatabaseCart();
        const productKeys = Object.keys(savedCart);
        const previousCart = productKeys.map(existingKey => {
            const product = fakeData.find(pd => pd.key === existingKey);
            product.quantity = savedCart[existingKey];
            return product;
        })
        setCart(previousCart)
    }, [])

    const handleSearchReult = (e) => {
        setKeyword(e.target.value)
    }

    return (
        <Container>
            <input onChange={handleSearchReult} placeholder="Search Product" />
            <Row>
                <Col md={8}>
                    {
                        product.map(pd =>
                            <Product
                                key={pd.key}
                                product={pd}
                                handleAddProduct={handleAddProduct}
                                showAddToCart={true}
                            >


                            </Product>)
                    }
                </Col>
                <Col md={4}>
                    <Cart cart={cart} >
                        <Link to="/review">
                            <Button>Review Order</Button>
                        </Link>
                    </Cart>
                </Col>
            </Row>
        </Container>
    )
}
export default Shop