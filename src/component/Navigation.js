import { Component } from "react";
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { NavLink } from "react-router-dom";
import "../App.css"

export default class Navigation extends Component{

    render(){

        return (
            <Box className="box" sx={{ flexGrow: 1 }}>
              <AppBar position="static">
                <Toolbar>
                             
                  <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    <h2>CURSOR.EDUCATION</h2>
                  </Typography>
                  <ul className="nav">
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/public">Public</NavLink></li>
                    <li><NavLink to= "/photo">Photo</NavLink></li>
                    <li><NavLink to= "/contacts">Contacts</NavLink></li>
                  </ul>
                </Toolbar>
              </AppBar>
            </Box>
          );
    }
}