import React, {useState} from 'react';
import {Button, InputLabel, MenuItem, FormHelperText, 
    FormControl, Select, Container} from '@material-ui/core';
import nEmployHoursEarnsData from '../data/nEmployHoursEarnsData';
import {useHistory} from 'react-router';


function NEmployHoursEarns(props) {
    // react hooks
    // useState("") sets initial value of seasonal to empty string
    // seasonal = variable
    // setSeasonal = function that takes in an argument 
    // that will become the new value of seasonal
    const [seasonal, setSeasonal] = useState("");
    const [supersector, setSupersector] = useState("");
    const [dataType, setDataType] = useState("");
    const [complete, setComplete] = useState("incomplete");
    const history = useHistory();

    // submit form and concatenate seriesID
    const handleClick = (event) => {
        // if the form is incomplete, return
        if (!seasonal || !supersector || !dataType){
            setComplete(false);
            return;
        }
        // console.log(seasonal, supersector, dataType)

        setComplete(true);
        createSeriesID();
    }

    // after form is completed, determine seriesID for fetching data
    const createSeriesID = () => {
        // generate all the codes from data list
        const seriesCode = "CE";
        const seasonalCode = nEmployHoursEarnsData.seasonal[seasonal];
        const supersectorCode = nEmployHoursEarnsData.supersector[supersector];
        const industryCodes = nEmployHoursEarnsData.industry[supersectorCode];
        const dataTypeCode = nEmployHoursEarnsData.dataType[dataType];

        // console.log(seasonalCode, supersectorCode, dataTypeCode, industryCodes);

        // concatenate codes into a seriesID and add to array
        const seriesIDs = industryCodes.map(industryCode => {
                return seriesCode+seasonalCode+industryCode+dataTypeCode
            })
        // max # of IDs allowed to call at once is 50
        // if seriesIDs.length > 49, split the array into 2 arrays, etc
        // create object with key values as an array of 50 index max
        let seriesIDsObject = {}
        seriesIDsObject = {
            // slice array from [index1,index2)
            1: {seriesid: seriesIDs.slice(0,50)},
            2: {seriesid: seriesIDs.slice(50,100)},
            3: {seriesid: seriesIDs.slice(100,150)},
            4: {seriesid: seriesIDs.slice(150,200)},
            5: {seriesid: seriesIDs.slice(200,250)},
        }
        
        
        // console.log(seriesIDsObject);
        
        let category = props.category
        // console.log(category);
        
        let pathString = String(`${category}/${seasonal}&${supersector}/${dataType}`);
        // regex to replace spaces and commas with a dash
        pathString = pathString.replace(/(,\s)/g, '-').replace(/\s+/g, '-');
        
        // console.log(pathString);
        // push url and pass in the seriesIDs props to ApiCall.jsx
        history.push({
            pathname:pathString,
            state:seriesIDsObject,
        })
    }

    return (
        <div>
            {/* seasonal options */}
            <FormControl className={props.classes.formControl} style={{width:"12rem"}}
            error={(!complete && !seasonal)}>
                <InputLabel htmlFor="seasonal">Seasonal Adjustment</InputLabel>
                <Select value={seasonal} 
                onChange={(event) => {setSeasonal(event.target.value)}} 
                inputProps={{name:"seasonal", id:"seasonal"}}>
                    {/* create array of seasonal keys and then map over it */}
                    {Object.keys(nEmployHoursEarnsData.seasonal).map(option => {
                        // console.log(nEmployHoursEarns.seasonal[option])
                        return  <MenuItem value={option} key={option}>
                                    {option}
                                </MenuItem>
                    })}    
                </Select>
            </FormControl>

            {/* supersector/industry options */}
            <FormControl className={props.classes.formControl} 
                error={(!complete && !supersector)}>
                <InputLabel htmlFor="supersector">Industry</InputLabel>
                <Select value={supersector} 
                onChange={(event) => {setSupersector(event.target.value)}}
                inputProps={{name:"supersector", id:"supersector"}}>
                    {Object.keys(nEmployHoursEarnsData.supersector).map(option => {
                        return  <MenuItem value={option} key={option}>
                                    {option}
                                </MenuItem>
                    })}
                </Select>
            </FormControl>

            {/* dataType options */}
            <FormControl className={props.classes.formControl}
            error={(!complete && !dataType)}>
                <InputLabel htmlFor="dataType">Data Type</InputLabel>
                <Select value={dataType} 
                onChange={(event) => {setDataType(event.target.value)}}
                inputProps={{name:"dataType", id:"dataType"}}>
                    {Object.keys(nEmployHoursEarnsData.dataType).map(option => {
                        return  <MenuItem value={option} key={option}>
                                    {option}
                                </MenuItem>
                    })}
                </Select>
            </FormControl>

            <FormHelperText style={{margin:"0rem 0rem 0.5rem 1rem"}}>
                Fill in above options and press submit
            </FormHelperText>
            
            <Button variant="outlined" color="primary" style={{marginLeft:"1rem"}} 
            onClick={event => {handleClick(event.target.value)}}>
                Submit
            </Button>
            
            {/* if there's an incomplete form */}
            {(!complete && (!seasonal || !supersector || !dataType))
                ? <Container className={props.classes.error}>
                    Please complete missing values: <br></br> 
                    {!seasonal ? <li className={props.classes.li}>Seasonal Adjustment</li>: null}
                    {!supersector ? <li className={props.classes.li}>Industry</li> : null}
                    {!dataType ? <li className={props.classes.li}>Data Type</li> : null}
                    </Container>
                : null
            }
        </div>
    );
}

export default NEmployHoursEarns;