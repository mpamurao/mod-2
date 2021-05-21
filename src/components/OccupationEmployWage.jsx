import React, {useState} from 'react';
import {Button, InputLabel, MenuItem, FormHelperText, 
    FormControl, Select, Container} from '@material-ui/core';
import occupationEmployWageData from '../data/occupationEmployWageData';
import {useHistory} from 'react-router';


function OccupationEmployWage(props) {
    const [seasonal, setSeasonal] = useState("");
    const [areaType, setareaType] = useState("");
    const [area, setArea] = useState("");
    const [supersector, setSupersector] = useState("");
    const [industry, setIndustry] = useState("");
    const [occupationCategory, setOccupationCategory] = useState("");
    const [occupation, setOccupation] = useState("");
    const [dataType, setDataType] = useState("");
    const [complete, setComplete] = useState("incomplete");
    const history = useHistory();

    // submit form and concatenate seriesID
    const handleClick = (event) => {
        // if the form is incomplete, return
        if (!seasonal|| !areaType || !area || !supersector 
            || !industry || !occupationCategory 
            || !occupation || !dataType){
            setComplete(false);
            return;
        }

        setComplete(true);
        createSeriesID();
    }

    // after form is completed, determine seriesID for fetching data
    const createSeriesID = () => {
        // generate all the codes from data list
        const seriesCode = "SM";
        const seasonalCode = occupationEmployWageData.seasonal[seasonal];
        const areaCode = occupationEmployWageData.area[areaType][area];
        const industryCode = occupationEmployWageData.industry[supersector][industry];
        const dataTypeCode = occupationEmployWageData.dataType[dataType];

        // console.log(seasonalCode, areaTypeCode, areaCode, dataTypeCode, industryCode);

        // concatenate codes into a seriesID and add to array
        const seriesID = 
            seriesCode+seasonalCode+areaType+areaCode+industryCode+dataTypeCode;
        // console.log(seriesID)
        
        let category = props.category;
        // console.log(category);
        
        // find key from the areaType value
        // create array of object keys and then return key when .areaType[key] === areaType
        const areaTypeKey = 
            Object.keys(occupationEmployWageData.areaType)
                .find(key => occupationEmployWageData.areaType[key] === areaType);

        console.log(areaTypeKey);

        let pathString = String(`${category}/${areaTypeKey}&${area}&${seasonal}&${industry}/${dataType}`);
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
                error={(!complete && !seasonal)}
            >
                <InputLabel htmlFor="seasonal">Seasonal Adjustment</InputLabel>
                <Select value={seasonal} 
                    inputProps={{name:"seasonal", id:"seasonal"}}
                    onChange={(event) => {setSeasonal(event.target.value)}} 
                >
                    {/* create array of seasonal keys and then map over it */}
                    {Object.keys(occupationEmployWageData.seasonal).map(option => {
                        // console.log(nEmployHoursEarns.seasonal[option])
                        return  <MenuItem value={option} key={option}>
                                    {option}
                                </MenuItem>
                    })}    
                </Select>
            </FormControl>

            {/* areaType options */}
            <FormControl className={props.classes.formControl} style={{width:"12rem"}}
                error={(!complete && !areaType)}
            >
                <InputLabel htmlFor="areaType">Area Type</InputLabel>
                <Select value={areaType} 
                    inputProps={{name:"areaType", id:"areaType"}}
                    onChange={(event) => {setareaType(event.target.value)}} 
                >
                    {/* create array of areaType keys and then map over it */}
                    {Object.keys(occupationEmployWageData.areaType).map(option => {
                        // console.log(occupationEmployWageData.areaType[option])
                        return  <MenuItem value={occupationEmployWageData.areaType[option]} 
                                    key={occupationEmployWageData.areaType[option]}
                                >
                                    {option}
                                </MenuItem>
                    })}    
                </Select>
            </FormControl>

            {/* area options */}
            <FormControl className={props.classes.formControl} style={{width:"12rem"}}
                disabled={!areaType} error={(!complete && !area)}
            >
                <InputLabel htmlFor="area">Area Code</InputLabel>
                <Select value={area} 
                    inputProps={{name:"area", id:"area"}}
                    onChange={(event) => {setArea(event.target.value)}} 
                >
                    {!areaType
                        ? null 
                        // create array of area keys and then map over it
                        : Object.keys(occupationEmployWageData.area[areaType]).map(option => {
                            return  <MenuItem value={option} key={option}>
                                        {option}
                                    </MenuItem>
                    })}
                </Select>
            </FormControl>

            {/* supersector options */}
            <FormControl className={props.classes.formControl} 
                error={(!complete && !supersector)}
            >
                <InputLabel htmlFor="supersector">Sector</InputLabel>
                <Select value={supersector} 
                    inputProps={{name:"supersector", id:"supersector"}}
                    onChange={(event) => {
                        setSupersector(event.target.value);
                        setIndustry("");
                    }}
                >
                    {Object.keys(occupationEmployWageData.supersector).map(option => {
                        // console.log(nEmployHoursEarnsData.supersector[option])
                        // set value as the value to the supersector key
                        return  <MenuItem value={occupationEmployWageData.supersector[option]} 
                                    key={occupationEmployWageData.supersector[option]}
                                >
                                    {option}
                                </MenuItem>
                    })}
                </Select>
            </FormControl>

            {/* once sector is populated, enable industry label */}
            <FormControl className={props.classes.formControl}
                disabled={!supersector} error={(!complete && !industry)}
            >
                <InputLabel htmlFor="industry">Industry</InputLabel>
                <Select value={industry} 
                    inputProps={{name:"industry", id:"industry"}}
                    onChange={(event) => {setIndustry(event.target.value)}}
                >
                    {/* {console.log(supersector)} */}
                    {/* don't list anything under industry until supersector is completed */}
                    {!supersector 
                        ? null 
                        : Object.keys(occupationEmployWageData.industry[supersector]).map(industry => {
                            return  <MenuItem value={industry} key={industry}>
                                        {industry}
                                    </MenuItem> 
                        })
                    }                   
                </Select>
            </FormControl>

            {/* dataType options */}
            <FormControl className={props.classes.formControl}
                error={(!complete && !dataType)}
            >
                <InputLabel htmlFor="dataType">Data Type</InputLabel>
                <Select value={dataType} 
                    onChange={(event) => {setDataType(event.target.value)}}
                    inputProps={{name:"dataType", id:"dataType"}}
                >
                    {Object.keys(occupationEmployWageData.dataType).map(option => {
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
                onClick={event => {handleClick(event.target.value)}}
            >
                Submit
            </Button>
            
            (!seasonal|| !areaType || !area || !supersector 
            || !industry || !occupationCategory 
            || !occupation || !dataType)
            {/* if there's an incomplete form */}
            {(!complete && (!seasonal || !areaType || !area || !supersector || !industry || !dataType))
                ? <Container className={props.classes.error}>
                        Please complete missing values: <br></br> 
                        {!seasonal ? <li className={props.classes.li}>Seasonal</li> : null}
                        {!areaType ? <li className={props.classes.li}>Area Type</li> : null}
                        {!area ? <li className={props.classes.li}>Area Code</li> : null}
                        {!supersector ? <li className={props.classes.li}>Sector</li> : null}
                        {!industry ? <li className={props.classes.li}>Industry</li> : null}
                        {!occupationCategory ? <li className={props.classes.li}>Occupation Category</li> : null}
                        {!occupation ? <li className={props.classes.li}>Occupation Title</li> : null}
                        {!dataType ? <li className={props.classes.li}>Data Type</li> : null}
                    </Container>
                : null
            }
        </div>
    );
}

export default OccupationEmployWage;