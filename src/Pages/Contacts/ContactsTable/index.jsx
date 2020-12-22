import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import format from 'date-fns/format'
import parseISO from 'date-fns/parseISO'
import React from "react";
import Box from '@material-ui/core/Box';

import {CopyToClipboardText} from "../../../Components/CopyText";

const useStyles = makeStyles({
    table: {
    },
})

export const ContactsTable = ({data}) => {
    const classes = useStyles()
    return  <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
            <TableHead>
                <TableRow>
                    <TableCell>Avatar</TableCell>
                    <TableCell>Full name</TableCell>
                    <TableCell>Birthday</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Phone number</TableCell>
                    <TableCell>Location</TableCell>
                    <TableCell align="right">Nationality</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {data.map((row) => (
                    <TableRow key={row.login.uuid}>
                        <TableCell component="th" scope="row">
                            <Avatar alt={`${row.name.first}${row.name.last}`} src={row.picture.thumbnail} />
                        </TableCell>
                        <TableCell>{row.name.title}. {row.name.first} {row.name.last}</TableCell>
                        <TableCell>
                            {/*<Typography>{format(parseISO(row.dob.data), "MM/dd/yyyy")}</Typography>*/}
                            <Typography>{row.dob.age} years</Typography>
                        </TableCell>
                        <TableCell>
                            <CopyToClipboardText text={row.email}/>
                        </TableCell>
                        <TableCell>
                            <CopyToClipboardText text = {row.phone}/>
                        </TableCell>
                        <TableCell>{row.location.country}</TableCell>
                        <TableCell align="right">{row.nat}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    </TableContainer>
}
