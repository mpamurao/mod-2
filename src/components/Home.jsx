import React, { Component } from 'react';
import {Container, InputLabel, MenuItem, FormHelperText, 
        FormControl, Select} from '@material-ui/core';
import homeStyles from './styles/homeStyles';
import { withStyles } from '@material-ui/core/styles';
import NEmployHoursEarns from './NEmployHoursEarns';

// API Walkthrough: https://hashrocket.com/blog/posts/extracting-programmer-employment-data-from-bls
// BLS Wrapper: https://github.com/reaperkrew/bls

class Home extends Component {
    constructor() {
        super()

        this.state = {
            category:"",
        }
    }
    
    // set state when main category is selected
    handleChangeCategory = (event) => {
        event.preventDefault();
        // console.log(event)
        this.setState({category:event.target.value});
    }

    render() {
        // console.log(this.state.category)
        // object destructure this.props.classes (which has value of homeStyles)
        const {classes} = this.props;

        return (
            <div>
                <Container className={classes.homeTitle}>
                    SEARCH STATISTICAL EMPLOYMENT AND LIVING DATA
                </Container>

                {/* container to wrap form options */}
                <Container>
                    {/* FormControl wraps around only one InputLabel */}
                    <FormControl className={classes.formControl}>
                        <InputLabel htmlFor="generalCategory">Category</InputLabel>
                        {/* <select> = creates drop down menu */}
                        {/* id = associate list to label */}
                        {/* name = defines name for drop down menu */}
                        <Select value={this.state.category} 
                        onChange={this.handleChangeCategory} 
                        inputProps={{name:"generalCategory", id: "generalCategory"}}>
                            {/* MenuItem = option */}
                            <MenuItem value="National Employment, Hours, and Earnings" 
                            key="National Employment, Hours, and Earnings">
                                National Employment, Hours, and Earnings
                            </MenuItem>
                        </Select>
                        <FormHelperText>Select a category</FormHelperText>
                    </FormControl>
                </Container>

                <Container>
                    {/* if option is National Employment, show more options to select  from */}
                    {!(this.state.category === "National Employment, Hours, and Earnings")
                        ? <div></div>
                        // show seasonal and supersector/industry options
                        : <NEmployHoursEarns classes={classes} category={this.state.category}/>
                
                    }

                </Container>
                  
            </div>
        );
    }
}

//  call withStyles passing in argument homeStyles as a prop.classes to Home.js
export default withStyles(homeStyles)(Home);