import React from 'react';
import {Container, Link, BottomNavigation} from '@material-ui/core';
import footerStyles from './styles/footerStyles';

function Footer(props) {
    const classes = footerStyles();
    
    return (
        <div>
            <BottomNavigation className={classes.footer}>
                <Link className={classes.link} href="https://www.bls.gov/bls/overview.htm" 
                target="_blank" >
                    U.S. Bureau of Labor Statistics 
                </Link>
            </BottomNavigation>
        </div>
    );
}

export default Footer;