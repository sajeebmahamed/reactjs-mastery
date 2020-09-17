import React, { useContext, useEffect, useState } from 'react';
import { Avatar, Button, Card, CardActions, CardContent, CardHeader, Container, CssBaseline, fade, Grid, IconButton, makeStyles, Paper, Typography } from '@material-ui/core';
import { Link, useHistory, useParams } from 'react-router-dom';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { UserContext } from '../../../App';

const singlePostStyle = makeStyles((theme) => ({
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

const SinglePost = () => {
    const classes = singlePostStyle()
    const {id} = useParams()

    const [singleUser, setSingleUser] = useState({})
    const [singlePost, setSinglePost] = useState({})
    // console.log(singleUser, singlePost);
    useEffect(() => {
        async function userSingle() {
            const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
            const data = await res.json()
            setSingleUser(data)
        }
        userSingle()
        async function postSingle() {
            const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            const data = await res.json()
            setSinglePost(data)
        }
        postSingle()
    })
    const history = useHistory()
    const handleComment = (id) => {
        history.push(`/comments/${id}`)
    }
    return (
        <>
            <CssBaseline/>
            <Container maxWidth="md" component="main">
                <Grid container spacing={3}>
                    {
                        <Grid item xs={12} md={12}>
                        <Paper className={classes.paper}>
                            <Card className={classes.root}>
                                <CardHeader
                                    avatar={
                                        <Avatar aria-label="recipe" className={classes.avatar}>
                                            {/* <img src={photos.picture.large} alt=""/> */}
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
                                            {singlePost.title}
                                    </Typography>
                                    <Typography variant="body2" component="p">
                                            {singlePost.body}
                                        <br />
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    {/* <Button onClick={() => handleClick(singleUser.id)} size="small">Read More</Button> */}
                                        <Button style={{visibility:'hidden'}} onClick={() => handleComment(singlePost.id)} size="small">
                                            Show Comments
                                    </Button>
                                </CardActions>
                            </Card>
                        </Paper>
                    </Grid>
                    }
                </Grid>
            </Container>
        </>
    );
};


export default SinglePost;