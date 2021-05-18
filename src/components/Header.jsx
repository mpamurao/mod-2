import React from 'react';
import {Typography, AppBar, Toolbar} from '@material-ui/core';
import {Link as RouterLink} from 'react-router-dom';
import headerStyles from './styles/headerStyles';

function Header(props) {
    // call css props from headerStyles
    const classes = headerStyles();

    return (
        <div className="header">
            {/* create AppBar for heading */}
            <AppBar position="relative" className={classes.appBar}>
                <Typography>
                    API SEARCH PROJECT USING DATA FROM U.S. BUREAU OF LABOR STATISTICS
                </Typography>
                <Typography>
                    ***BLS.gov cannot vouch for the data or analyses derived from these data after 
                    the data have been retrieved from BLS.gov.
                </Typography>

                <Toolbar>
                    <Typography variant="subtitle1"><RouterLink to="/home"> Home </RouterLink></Typography>
                    <Typography variant="subtitle1"><RouterLink to="/about"> About </RouterLink></Typography>

                </Toolbar>
            </AppBar>
        







        </div>
    );
}

export default Header;