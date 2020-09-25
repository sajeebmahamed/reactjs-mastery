import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { Container, CssBaseline } from '@material-ui/core';

const commentStyle = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 'auto',
        backgroundColor: theme.palette.background.paper,
    },
    inline: {
        display: 'inline',
    },
}));

const Comments = (props) => {
    const classes = commentStyle()
    const { id } = useParams()
    const [showComments, setShowComments] = useState([])
    const pic = props.pic
    useEffect(() => {
        async function Comments() {
            const res = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
            const data = await res.json()
            setShowComments(data)
        }
        Comments()
    }, [])
    return (
        <>
            <CssBaseline />
            <Container maxWidth="md">
                <List className={classes.root}>
                    {
                        showComments.map(comments => (
                            // pic.map(uPic => (
                                <ListItem alignItems="flex-start">
                                    <ListItemAvatar>
                                        {/* <Avatar alt="Remy Sharp" src={uPic.picture.thumbnail} /> */}
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary={comments.name}
                                        secondary={
                                            <React.Fragment>
                                                <Typography
                                                    component="span"
                                                    variant="body2"
                                                    className={classes.inline}
                                                    color="textPrimary"
                                                >
                                                    {comments.email}
                                                </Typography>
                                                {comments.body}
                                            </React.Fragment>
                                        }
                                    />
                                </ListItem>
                            ))
                        // ))
                    }
                    <Divider variant="inset" component="li" />
                </List>
            </Container>
        </>
    );
};

export default Comments;