import React from 'react';
import {Typography, AppBar, Toolbar, Box, Grid, Button} from '@material-ui/core';
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
                    <Grid container justify="space-between">
                        {/* place gridItems in boxes to space-between home/about 
                        and menu */}
                        {/* Box is like a div tag */}
                        <Box>
                            <Grid container justify="space-between">
                                <Grid item>
                                    <Button>
                                        <Link to="/home" className={classes.toolButton}> 
                                            Home 
                                        </Link>
                                    </Button>
                                </Grid>
                                <Grid item>
                                    <Button>
                                        <Link to="/about" className={classes.toolButton}> 
                                            About 
                                        </Link>
                                    </Button>
                                </Grid>
                            </Grid>
                        </Box>
                        <Box>
                            <Grid item justify="right">
                                <Button>
                                    <Link to="/about" className={classes.toolButton} 
                                    style={{textAlign:"right"}}> 
                                        Menu 
                                    </Link>
                                </Button>
                            </Grid>
                        </Box>
                    </Grid>
                </Toolbar>
            </AppBar>
        







        </div>
    );
}

export default Header;