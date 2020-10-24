import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const useStyles = makeStyles((theme) => ({
    seeMore: {
        marginTop: theme.spacing(3),
    },
}));
const VolunteerList = () => {
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
                    <TableRow>
                        <TableCell align="center">test</TableCell>
                        <TableCell align="center">test</TableCell>
                        <TableCell align="center">test</TableCell>
                        <TableCell align="center">test</TableCell>
                        <TableCell align="center">teest1</TableCell>
                    </TableRow>
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