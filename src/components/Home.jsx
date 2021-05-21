import React, { Component } from 'react';
import {Container, InputLabel, MenuItem, FormHelperText, 
        FormControl, Select, withStyles} from '@material-ui/core';
import homeStyles from './styles/homeStyles';
import NEmployHoursEarns from './NEmployHoursEarns';
import SEmployHoursEarns from './SEmployHoursEarns';
import OccupationEmployWage from './OccupationEmployWage';

// API Walkthrough: https://hashrocket.com/blog/posts/extracting-programmer-employment-data-from-bls

// list of main categories
const categoriesArr = [
    "National Employment, Hours, and Earnings", 
    "State and Area Employment, Hours, and Earnings",
    "Occupational Employment and Wage Statistics",
]

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
            <div className={classes.home}>
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
                            {categoriesArr.map(category => {
                                return <MenuItem value={category} key={category}>
                                            {category}
                                        </MenuItem>
                            })}   
                        </Select>
                        <FormHelperText>Select a category</FormHelperText>
                    </FormControl>
                </Container>

                <Container>
                    {(this.state.category === "National Employment, Hours, and Earnings")
                        // if option is National Employment, show more options to select  from 
                        ? <NEmployHoursEarns classes={classes} category={this.state.category} />
                        : (this.state.category === "State and Area Employment, Hours, and Earnings")
                            ? <SEmployHoursEarns classes={classes} category={this.state.category} />
                        : (this.state.category === "Occupational Employment and Wage Statistics")
                            ? <OccupationEmployWage classes={classes} category={this.state.category} />
                        : <div></div>
                    }

                    {/* if series doesn't exist, redirect to Home from ApiCall */}
                    {/* show error message until category field is re-entered */}
                    <Container className={classes.error}>
                        {(this.props.location.state && !this.state.category)
                            ? this.props.location.state 
                            : <div></div>}
                    </Container>
                </Container>
                  
            </div>
        );
    }
}

//  call withStyles passing in argument homeStyles as a prop.classes to Home.js
export default withStyles(homeStyles)(Home);