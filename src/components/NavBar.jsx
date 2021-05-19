import React from 'react';
import {Link} from 'react-router-dom';
import {Toolbar, Box, Grid, Button} from '@material-ui/core';

function NavBar(props) {
    return (
        <div>
            {/* make navBar with buttons */}
            <Toolbar className={props.classes.toolbar}>
                <Grid container justify="space-between">
                    {/* place gridItems in boxes to space-between home/about 
                    and menu */}
                    {/* Box is like a div tag */}
                    <Box>
                        <Grid container>
                            <Grid item>
                                <Button>
                                    <Link to="/" className={props.classes.toolButton}> 
                                        Home 
                                    </Link>
                                </Button>
                            </Grid>
                            <Grid item>
                                <Button>
                                    <Link to="/about" className={props.classes.toolButton}> 
                                        About 
                                    </Link>
                                </Button>
                            </Grid>
                        </Grid>
                    </Box>
                    <Box>
                        <Grid item>
                            <Button className={props.classes.toolButton}>
                                Menu
                            </Button>
                        </Grid>
                    </Box>
                </Grid>
            </Toolbar>
        </div>
    );
}

export default NavBar;