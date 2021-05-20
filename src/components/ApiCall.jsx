import React, { Component } from 'react';
import config from '../config';
import data from '../data/dummydata';
import {Container, Typography, Box, Grid, withStyles} from '@material-ui/core';
import apiCallStyles from './styles/apiCallStyles';

class ApiCall extends Component {
    constructor() {
        super()
        
        this.state = {
            data: "",
        }
    }
    
    componentDidMount = async () => {
        // path="/:category/:subcategories/:data"
        // seriesIDs was passed in through state
        const {state} = this.props.location
        console.log(state)
        const apiKey = config.bls;
        // base url https://api.bls.gov/publicAPI/v2/timeseries/data/<seriesID>?registrationkey=${apiKey}
        const url = `https://api.bls.gov/publicAPI/v2/timeseries/data/${state}?registrationkey=${apiKey}`;

        try{
            // const response = await fetch(url);
            // const data = await response.json();
            // console.log(data);

            this.setState({data});
            
        }
        catch(err){
            console.log(err);
        }
    }
    
    render() {
        const {classes} = this.props;

        return (
            <div>
                <Container>
                    Does this work?
                    {!this.state.data
                        ? null
                        : <Box className={classes.seriesID}>{this.state.data.Results.series[0].seriesID}</Box>
                    }
                </Container>
            </div>
        );
    }
}

export default withStyles(apiCallStyles)(ApiCall);