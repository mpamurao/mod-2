import React from 'react';
import {Link} from 'react-router-dom';
import {Toolbar, Box, Grid, Button} from '@material-ui/core';

const NavBarArr = ["Home", "About", "BLS-API"]

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
                            {NavBarArr.map(index => {
                                return (
                                    <Grid item>
                                        <Button>
                                            <Link to={`/${index}`} className={props.classes.toolButton}> 
                                                {index} 
                                            </Link>
                                        </Button>
                                    </Grid>
                                )
                            })}
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