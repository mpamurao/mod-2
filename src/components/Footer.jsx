import React from 'react';
// import {Link} from 'react-router-dom';
import {Link, BottomNavigation, BottomNavigationAction} from '@material-ui/core';
import footerStyles from './styles/footerStyles';

function Footer() {
    const classes = footerStyles();
    
    return (
        <div>
            <BottomNavigation className={classes.footer}>
                <BottomNavigationAction classes={{label:classes.link}}
                component={Link} href="https://www.bls.gov/bls/overview.htm" 
                target="_blank" value="U..S. Bureau of Labor Statistics" 
                showLabel label="U..S. Bureau of Labor Statistics" />
            </BottomNavigation>
        </div>
    );
}

export default Footer;