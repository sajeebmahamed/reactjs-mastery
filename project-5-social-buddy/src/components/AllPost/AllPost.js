import React, { useContext, useEffect, useState } from 'react';
import {Avatar, Button, Card, CardActions, CardContent, CardHeader, Container, CssBaseline, fade, Grid, IconButton, InputBase, makeStyles, Paper, Toolbar, Typography } from '@material-ui/core';

import MoreVertIcon from '@material-ui/icons/MoreVert';
import { UserContext } from '../../App';
import { Link } from 'react-router-dom';

const allPostStyle = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginLeft: 'auto !important',
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(1),
            width: 'auto',
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
}));



const AllPost = (props) => {
    const classes = allPostStyle()
    const users = useContext(UserContext)
    const pic = props.pic
    return (
        <>
            <CssBaseline />
            
            <Container maxWidth="md" component="main">
                <Grid container spacing={3}>
                    {
                        users[0].map(singleUser => (
                            users[1].map(userPost => (
                                pic.map((uImg, i) => (
                                    <>
                                        {singleUser.id === userPost.id &&
                                            <Grid item xs={12} md={4}>
                                                <Paper className={classes.paper}>
                                                    <Card className={classes.root}>
                                                        <CardHeader
                                                            avatar={
                                                                <Avatar aria-label="recipe" className={classes.avatar}>
                                                                <img src={uImg.picture.thumbnail} alt="" />
                                                                </Avatar>
                                                            }
                                                            action={
                                                                <IconButton aria-label="settings">
                                                                    <MoreVertIcon />
                                                                </IconButton>
                                                            }
                                                            title={singleUser.name}
                                                            subheader={singleUser.email}
                                                        />

                                                        <CardContent>
                                                            <Typography variant="h6" component="h2">
                                                                {userPost.title}
                                                            </Typography>

                                                        </CardContent>
                                                        <CardActions>
                                                            <Button size="small">
                                                                <Link to={`/user/${singleUser.id}`}>
                                                                    Read More
                                                            </Link>
                                                            </Button>
                                                        </CardActions>
                                                    </Card>
                                                </Paper>
                                            </Grid>
                                        }
                                    </>
                                ))
                            ))
                        ))
                    }
                </Grid>

                
            </Container>
        </>
    );
};

export default AllPost;