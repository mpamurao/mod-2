import React, {useState} from 'react';
import {Container, Button, InputLabel, MenuItem, FormHelperText, 
    FormControl, Select} from '@material-ui/core';
import nEmployHoursEarnsData from '../data/nEmployHoursEarnsData';


function NEmployHoursEarns(props) {
    // react hooks
    // useState("") sets initial value of seasonal to empty string
    // seasonal = variable
    // setSeasonal = function that takes in an argument 
    // that will be the new value of seasonal
    const [seasonal, setSeasonal] = useState("");
    const [supersector, setSupersector] = useState("");
    return (
        <div>
            <Container>
                    {/* seasonal options */}
                    <FormControl className={props.classes.formControl}>
                    <InputLabel htmlFor="seasonal">Seasonal Adjustment</InputLabel>
                    <Select value={seasonal} 
                    onChange={(event) => {setSeasonal(event.target.value)}} 
                    inputProps={{name:"seasonal", id:"seasonal"}}>
                        <MenuItem value="">
                                None
                        </MenuItem>

                        {/* create array of seasonal keys and then map over it */}
                        {Object.keys(nEmployHoursEarnsData.seasonal).map(option => {
                            // console.log(nEmployHoursEarns.seasonal[option])
                            return  <MenuItem value={option}>
                                        {option}
                                    </MenuItem>
                        })}
                        
                    </Select>
                    </FormControl>

                    {/* supersector/industry options */}
                    <FormControl className={props.classes.formControl}>
                        <InputLabel htmlFor="supersector">Industries</InputLabel>
                        <Select value={supersector} 
                        onChange={(event) => {setSupersector(event.target.value)}}
                        inputProps={{name:"supersector", id:"supersector"}}>
                            {Object.keys(nEmployHoursEarnsData.supersector).map(option => {
                                return  <MenuItem value={option}>
                                            {option}
                                        </MenuItem>
                            })}
                        </Select>
                    </FormControl>

                </Container>
                
        </div>
    );
}

export default NEmployHoursEarns;