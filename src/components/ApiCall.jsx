import React, { Component } from 'react';
import config from '../config';
// import data from '../data/dummydata';
import {Container, Box, withStyles} from '@material-ui/core';
import apiCallStyles from './styles/apiCallStyles';
import ChartDisplay from './ChartDisplay';

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
        const {state} = this.props.location;
        // console.log(state)
        const apiKey = config.bls;
        // base url https://api.bls.gov/publicAPI/v2/timeseries/data/<seriesID>?registrationkey=${apiKey}
        const url = `https://api.bls.gov/publicAPI/v2/timeseries/data/${state}?registrationkey=${apiKey}`;

        try{
            const response = await fetch(url);
            const data = await response.json();

            // if query was successful but series doesn't exist
            if (data.message[0] && data.message[0].includes("Series does not exist")){
                console.log(data.message[0]);
                this.props.history.push({
                    pathname:"/Home",
                    state:data.message[0],
                })
            }
            this.setState({data});
        }
        catch(err){
            console.log(err);
        }
    }
    
    render() {
        const {classes} = this.props;
        const {category, subcategories, data} = this.props.match.params;

        return (
            <div>
                <Container>   
                    {/* if data hasn't been added to state yet, this is null */}
                    {!this.state.data
                        ? <div></div>
                        : <Box className={classes.seriesID}>Series ID: {this.state.data.Results.series[0].seriesID}</Box>
                    }   
                    <Box className={classes.chartContainer}>
                        {!this.state.data
                            ? <div></div>
                            : <ChartDisplay fetchData={this.state.data} category={category} 
                                subcategories={subcategories} data={data}/>
                        }
                    </Box>
                </Container>
            </div>
        );
    }

    componentWillUnmount = () => {
        this.setState({data:""});
    }
}

export default withStyles(apiCallStyles)(ApiCall);