import React, {useState} from 'react';
import {Button, InputLabel, MenuItem, FormHelperText, 
    FormControl, Select, Container} from '@material-ui/core';
import nEmployHoursEarnsData from '../data/nEmployHoursEarnsData';


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
    const [seriesID, setSeriesID] = useState("");

    // submit form and concatenate seriesID
    const handleClick = (event) => {
        // if the form is incomplete, return
        if (!seasonal || !supersector || !dataType){
            setComplete(false);
            return;
        }
        console.log(seasonal, supersector, dataType)

        setComplete(true);
    }
    return (
        <div>
            {/* seasonal options */}
            <FormControl className={props.classes.formControl} style={{width:"12rem"}}>
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
            <FormControl className={props.classes.formControl}>
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
            <FormControl className={props.classes.formControl}>
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
                    Please complete missing values: 
                    {!seasonal ? " Seasonal Adjustment " : null}
                    {!supersector ? "Supersector " : null}
                    {!dataType ? "Data Type" : null}
                    </Container>
                : null
            }
        </div>
    );
}

export default NEmployHoursEarns;