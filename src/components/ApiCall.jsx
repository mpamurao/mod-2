import React, { Component } from 'react';
import config from '../config';
import data from '../data/dummydata';
import {Container, Typography, Box, Grid} from '@material-ui/core';

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
        console.log("render")
        console.log(this.state.data.Results)
        return (
            <div>
                Does this work?
                
                <Container>
                    {/* {this.state.data.series.data.map(index => {
                        return console.log(index.year)
                    })} */}
                    {/* {this.state.data.Results.series[0].data.map(index => {
                        <Box> {index.periodName} , {index.year} </Box>
                    })} */}
                </Container>
            </div>
        );
    }
}

export default ApiCall;