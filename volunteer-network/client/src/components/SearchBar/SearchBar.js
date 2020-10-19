import { Button, Container, CssBaseline, IconButton, InputBase, makeStyles, Paper, Typography } from '@material-ui/core';
import React from 'react';
const useStyles = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(2),
    },
    inputPaper: {
        padding: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        width: 400,
        margin: '1rem 16.5rem'
    },
    input: {
        marginLeft: theme.spacing(1),
        flex: 1,
    },
    iconButton: {
        padding: 10,
    },
}))
const SearchBar = () => {
    const classes = useStyles()
    return (
        <React.Fragment>
            <CssBaseline />
            <Container className={classes.root} maxWidth="md">
                <Typography variant="h4" align="center">
                    I grow by helping people in need.
                </Typography>
                <Paper component="form" className={classes.inputPaper}>
                    <InputBase
                        className={classes.input}
                        placeholder="Search..."
                        inputProps={{ 'aria-label': 'search google maps' }}
                    />
                    <Button variant="contained" color="primary">
                        Search
                    </Button>
                </Paper>
                
            </Container>
        </React.Fragment>
    );
};

export default SearchBar;