import React, { Component } from 'react';
import config from '../config';

class ApiCall extends Component {
    constructor() {
        super()
        
        this.state = {
            data: "",
        }
    }
    
    async componentDidMount() {
        // path="/:category/:subcategories/:data"
        // seriesIDs was passed in through state
        const {state} = this.props.location
        console.log(state[1].seriesid)
        const apiKey = config.bls;
        // base url https://api.bls.gov/publicAPI/v2/timeseries/data/<seriesID>?registrationkey=${apiKey}
        const url = `https://api.bls.gov/publicAPI/v2/timeseries/data/`;
        // const fetchURL = `${url}OEUN000000000000015113001`;

        try{
            const response = await fetch(url, {
                method:'POST',
                headers:{
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body:JSON.stringify(
                    {
                        seriesid: state[1].seriesid,
                        registrationkey: apiKey,
                    }
                )

                // {"seriesid":["Series1",..., "SeriesN"], "startyear":"yearX", "endyear":"yearY",
                // "catalog":true|false, "calculations":true|false, "annualaverage":true|false,"aspects":true|false,
                // "registrationkey":"apiKey" }
            });


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
                Hello!
            </div>
        );
    }
}

export default ApiCall;