import React, { Component } from 'react';
import config from '../config';
import data from './dummydata';

class Home extends Component {
    async componentDidMount() {
        const apiKey = config.bls;
        // base url
        const url = `https://api.bls.gov/publicAPI/v2/timeseries/data/`;
        const fetchURL = `${url}JLNS14000003`;

        try{
            // const response = await fetch(fetchURL);
            // const data = await response.json();
            console.log(data);

        }
        catch(err){
            console.log(err);
        }

    }
    render() {
        return (
            <div>
                
            </div>
        );
    }
}

export default Home;