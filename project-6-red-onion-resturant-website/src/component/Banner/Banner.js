import React from 'react';
import { Container, CssBaseline, Typography } from '@material-ui/core';
import './Banner.css'

const Banner = () => {
    return (
        <React.Fragment>
            <CssBaseline />
            <Container id="banner" style={{height: 'auto' }} maxWidth={false}>
                <Typography>
                    <h1> Best food waiting for your belly </h1>
                </Typography>
            </Container>

        </React.Fragment>
    );
};

export default Banner;