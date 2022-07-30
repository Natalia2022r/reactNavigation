import React from 'react';
import { TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Paper }from "@mui/material"
import Avatar from '@mui/material/Avatar';
import {contacts } from './contact';
import { Link } from "react-router-dom";




function stringToColor(string) {
    let hash = 0;
 let i;

 for (i = 0; i < string.length; i += 1) {
   hash = string.charCodeAt(i) + ((hash << 5) - hash);
 }

 let color = '#';

 for (i = 0; i < 3; i += 1) {
   const value = (hash >> (i * 8)) & 0xff;
   color += `00${value.toString(16)}`.slice(-2);
 }
 return color;
}

function Contacts() {
 

    return (
         <div className='table'>  
    <TableContainer  component={Paper}>
        <Table aria-label="simple table">
            <TableHead>
                <TableRow>
                    <TableCell align='center'>Avatar</TableCell>
                    <TableCell>First Name</TableCell>
                    <TableCell>Last Name</TableCell>
                    <TableCell align='center'>Phone</TableCell>
                    <TableCell align='center'>Info</TableCell>
                  
                </TableRow>
            </TableHead>
            <TableBody>
                {
                    contacts.map((row, index) => (
                        <TableRow
                        key = {row.id}
                        sx = {{'&: last-child td, &: last-child th':{ border : 0}}}>
                            <TableCell >
                            <Avatar className='avatar' sx= { {"bgcolor": stringToColor(row.firstName)}}>{row.firstName[0].toUpperCase()}</Avatar>
                            </TableCell>
                            <TableCell>{row.firstName}</TableCell>
                            <TableCell>{row.lastName}</TableCell>
                            <TableCell align='center'>{row.phone} </TableCell>
                        <TableCell align='center'>
                        <Link to={`/contacts/${index}`} style={{color: "blue" }}>info</Link>
                        </TableCell>
                            
                        </TableRow>
                    ))
                }
            </TableBody>
        </Table>
        </TableContainer>
        </div>  
         
    )
}

export default Contacts;