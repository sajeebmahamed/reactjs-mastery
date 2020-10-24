import React, { useEffect, useState } from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Axios from 'axios';

const useStyles = makeStyles((theme) => ({
    seeMore: {
        marginTop: theme.spacing(3),
    },
}));
const VolunteerList = () => {
    const [events, setEvents] = useState([])
    useEffect(() => {
        Axios('http://localhost:4000/register')
            .then(res => {
                setEvents(res.data)
            })
            .catch(err => {
                console.log(err);
            })
    }, [])
    const classes = useStyles();
    
    return (
        <React.Fragment>
            <Table size="small">
                <TableHead>
                    <TableRow>
                        <TableCell align="center">Name</TableCell>
                        <TableCell align="center">Email ID</TableCell>
                        <TableCell align="center">Registering Date</TableCell>
                        <TableCell align="center">Volunteer List</TableCell>
                        <TableCell align="center">Action</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        events.map(event => (
                            <TableRow>
                                <TableCell align="center"> {event.name} </TableCell>
                                <TableCell align="center"> {event.email} </TableCell>
                                <TableCell align="center"> {event.date} </TableCell>
                                <TableCell align="center"> {event.event} </TableCell>
                                <TableCell align="center">teest1</TableCell>
                            </TableRow>
                        ))
                    }
                </TableBody>
            </Table>
            <div className={classes.seeMore}>
                <Link color="primary" href="#">
                    See more orders
                </Link>
            </div>
        </React.Fragment>
    );
};

export default VolunteerList;