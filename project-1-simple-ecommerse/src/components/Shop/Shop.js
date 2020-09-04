import React, { useState } from 'react'
import fakeData from '../../fakeData'
import Product from '../Product/Product'
import { Container, Row, Col } from 'react-bootstrap'
import Cart from '../Cart/Cart'

const Shop = () => {
    const data = fakeData.slice(0, 10)
    const [product, setProduct] = useState(data)

    const [cart, setCart] = useState([])

    const handleAddProduct = (product) => {
        const newCart = [...cart, product]
        setCart(newCart)
    }
    
    return (
        <Container>
            <Row>
                <Col md={8}>
                    {
                        product.map(pd => 
                            <Product
                                key={pd.key}
                                product={pd}
                                handleAddProduct={handleAddProduct}
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