import React, { useState } from 'react'
import fakeData from '../../fakeData'
import Product from '../Product/Product'
import { Container, Row, Col } from 'react-bootstrap'

const Shop = () => {
    const data = fakeData.slice(0, 10)
    const [product, setProduct] = useState(data)

    const handleAddProduct = (product) => {
        console.log("click hyse", product);
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
                    <h4> Order Summary </h4>
                    <p> Items Ordered </p>
                    <p> Shipping Cost </p>
                    <p> Tax </p>
                    <p> Total </p>
                </Col>
            </Row>
        </Container>
    )
}
export default Shop