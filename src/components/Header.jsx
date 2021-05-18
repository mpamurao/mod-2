import React from 'react';
import {Typography, AppBar, Toolbar, Button} from '@material-ui/core';
import {Link} from 'react-router-dom';
import headerStyles from './styles/headerStyles';

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

                {/* make navBar with buttons */}
                <Toolbar className={classes.toolbar}>
                    <Button>
                        <Link to="/home" className={classes.toolButton}> Home </Link>
                    </Button>
                    <Button>
                        <Link to="/about" className={classes.toolButton}> About </Link>
                    </Button>
                    <Button>
                        <Link to="/about" className={classes.toolButton}> Menu </Link>
                    </Button>
                </Toolbar>
            </AppBar>
        







        </div>
    );
}

export default Header;