import React, { useState, useEffect } from 'react'
import fakeData from '../../fakeData'
import Product from '../Product/Product'
import { Container, Row, Col } from 'react-bootstrap'
import Cart from '../Cart/Cart'
import { addToDatabaseCart } from '../../utilities/databaseManager'

const Shop = () => {
    const data = fakeData.slice(0, 10)
    const [product, setProduct] = useState(data)

    const [cart, setCart] = useState([])

    const [keyWord, setKeyword] = useState([])
    // console.log(keyWord);
    
    const handleAddProduct = (product) => {
        const newCart = [...cart, product]
        setCart(newCart)
        const sameProduct = newCart.filter(pd=> pd.key === product.key)
        const count = sameProduct.length
        addToDatabaseCart(product.key, count)
    }

    const handleSearchReult = (e) => {
        setKeyword(e.target.value)
    }
    
    return (
        <Container>
            <input onChange={handleSearchReult}  placeholder="Search Product" />
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
                    <Cart cart={cart} ></Cart>
                </Col>
            </Row>
        </Container>
    )
}
export default Shop