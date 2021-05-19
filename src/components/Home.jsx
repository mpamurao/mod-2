import React, { Component } from 'react';
import config from '../config';
import data from '../data/dummydata';

// API Walkthrough: https://hashrocket.com/blog/posts/extracting-programmer-employment-data-from-bls
// BLS Wrapper: https://github.com/reaperkrew/bls

class Home extends Component {
    constructor() {
        super()
        
        this.state = {
            data: "",
        }
    }
    async componentDidMount() {
        const apiKey = config.bls;
        // base url https://api.bls.gov/publicAPI/v2/timeseries/data/<seriesID>?registrationkey=${apiKey}
        const url = `https://api.bls.gov/publicAPI/v2/timeseries/data/`;
        // const fetchURL = `${url}OEUN000000000000015113001`;

        try{
            const response = await fetch(fetchURL);
            const data = await response.json();
            console.log(data);

            this.setState({data});

        }
        catch(err){
            console.log(err);
        }

    }
    render() {
        return (
            <div>
                {/* {this.state.data} */}
            </div>
        );
    }
}

export default Home;