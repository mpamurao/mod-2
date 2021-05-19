import React, { Component } from 'react';
import {Typography, AppBar, Toolbar, Box, Grid, Button} from '@material-ui/core';
import homeStyles from './styles/homeStyles';
import { withStyles } from '@material-ui/core/styles';

// API Walkthrough: https://hashrocket.com/blog/posts/extracting-programmer-employment-data-from-bls
// BLS Wrapper: https://github.com/reaperkrew/bls

class Home extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            data: "",
        }
    }
    
    render() {
        const {classes} = this.props;
        return (
            <div>
                <Box>
                    {/* <select> = creates drop down menu */}
                    {/* name = references the data submitted */}
                    {/* id = associate list to label */}
                    <label htmlFor="generalCategory">
                        <Box className={classes.homeTitle}>
                            Search data: Hello!
                        </Box>
                    </label>
                    <select name="generalCategory" id="generalCategory">
                        {/* <optgroup> = groups option tags under a heading */}
                        <optgroup label="General Categories">
                            <option value="National Employment, Hours, and Earnings">
                                National Employment, Hours, and Earnings
                            </option>
                        </optgroup>
                    </select>


                </Box>
            </div>
        );
    }
}

export default withStyles(homeStyles)(Home);