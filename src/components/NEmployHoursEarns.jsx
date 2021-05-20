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
    const [industry, setIndustry] = useState("");
    const [dataType, setDataType] = useState("");
    const [complete, setComplete] = useState("incomplete");
    const history = useHistory();

    // submit form and concatenate seriesID
    const handleClick = (event) => {
        // if the form is incomplete, return
        if (!seasonal || !supersector || !industry || !dataType){
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
        const industryCode = nEmployHoursEarnsData.industry[supersector][industry];
        const dataTypeCode = nEmployHoursEarnsData.dataType[dataType];

        console.log(seasonalCode, dataTypeCode, industryCode);

        // concatenate codes into a seriesID and add to array
        const seriesID = seriesCode+seasonalCode+industryCode+dataTypeCode
        // console.log(seriesID)
        
        let category = props.category
        // console.log(category);
        
        let pathString = String(`${category}/${seasonal}&${industry}/${dataType}`);
        // regex to replace spaces and commas with a dash
        pathString = pathString.replace(/(,\s)/g, '-').replace(/\s+/g, '-');
        
        // console.log(pathString);
        // push url and pass in the seriesIDs props to ApiCall.jsx
        history.push({
            pathname:pathString,
            state:seriesID,
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

            {/* supersector options */}
            <FormControl className={props.classes.formControl} 
                error={(!complete && !supersector)}>
                <InputLabel htmlFor="supersector">Sector</InputLabel>
                <Select value={supersector} 
                onChange={(event) => {
                    setSupersector(event.target.value)
                    setIndustry("")
                }}
                inputProps={{name:"supersector", id:"supersector"}}>
                    {Object.keys(nEmployHoursEarnsData.supersector).map(option => {
                        // console.log(nEmployHoursEarnsData.supersector[option])
                        // set value as the value to the supersector key
                        return  <MenuItem value={nEmployHoursEarnsData.supersector[option]} 
                                key={nEmployHoursEarnsData.supersector[option]}>
                                    {option}
                                </MenuItem>
                    })}
                </Select>
            </FormControl>

            {/* once sector is populated, enable industry label */}
            <FormControl className={props.classes.formControl}
            disabled={!supersector} error={(!complete && !industry)}>
                <InputLabel htmlFor="industry">Industry</InputLabel>
                <Select value={industry} 
                onChange={(event) => {setIndustry(event.target.value)}}
                inputProps={{name:"industry", id:"industry"}}>
                    {console.log(supersector)}
                    {/* don't list anything under industry until supersector is completed */}
                    {!supersector 
                        ? null 
                        : Object.keys(nEmployHoursEarnsData.industry[supersector]).map(industry => {
                            return  <MenuItem value={industry} key={industry}>
                                    {industry}
                                </MenuItem> 
                        })
                    }                   
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
            {(!complete && (!seasonal || !supersector || !industry || !dataType))
                ? <Container className={props.classes.error}>
                    Please complete missing values: <br></br> 
                    {!seasonal ? <li className={props.classes.li}>Seasonal Adjustment</li>: null}
                    {!supersector ? <li className={props.classes.li}>Sector</li> : null}
                    {!industry ? <li className={props.classes.li}>Industry</li> : null}
                    {!dataType ? <li className={props.classes.li}>Data Type</li> : null}
                    </Container>
                : null
            }
        </div>
    );
}

export default NEmployHoursEarns;