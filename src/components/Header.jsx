import React from 'react';
import {Typography, AppBar} from '@material-ui/core';
import headerStyles from './styles/headerStyles';
import NavBar from './NavBar';

function Header(props) {
    // call css props from headerStyles
    const classes = headerStyles();

    return (
        <div className="header">
            {/* create AppBar for heading */}
            <AppBar position="relative" className={classes.appBar}>
                <Typography className={classes.heading} variant="h4" gutterBottom>
                    API SEARCH PROJECT USING DATA FROM U.S. BUREAU OF LABOR STATISTICS
                </Typography>
                <Typography variant="subtitle2" gutterBottom>
                    ***BLS.gov cannot vouch for the data or analyses derived from these 
                    data after the data have been retrieved from BLS.gov.***
                </Typography>

                <NavBar classes={classes}/>
            </AppBar>
        </div>
    );
}

export default Header;