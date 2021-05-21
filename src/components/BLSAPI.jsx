import React from 'react';
import {Container, Box, Link, Card} from '@material-ui/core';
import infoStyles from './styles/infoStyles';
import nEmploy from "./images/nEmployHoursEarns-image.png";

function BLSAPI() {
    const classes = infoStyles();
    return (
        <div className={classes.infoContainer}>
            <Container className={classes.infoTitle}>
                U.S. Bureau of Labor Statistics API
            </Container>
            <Container className={classes.content}>
                <Container>
                    <Box className={classes.subtitle}>
                        The API
                    </Box>
                    <Box className={classes.bottom}>
                        The U.S. Bureau of Labor Statistics provides a free API to search its databases.
                        General info about the BLS API can be found on the&nbsp;
                        <Link href="https://www.bls.gov/developers/home.htm" target="_blank"> 
                            BLS website
                        </Link>. 
                        If using the API, please remember to read the&nbsp;
                        <Link href="https://www.bls.gov/developers/home.htm" target="_blank"> 
                            Terms of Services
                        </Link>.
                    </Box>
                
                    <Box className={classes.bottom}>
                        The API is free to use without a key at a daily limit of <b>25 queries
                        and up to 10 years of data per query</b>.
                        With an API key, the daily limit increases to <b>500 queries and up to 20 years of 
                        data per query</b>.
                    </Box>

                    <Box className={classes.bottom}>
                        Info to register for a key can be found on the&nbsp;
                        <Link href="https://www.bls.gov/developers/api_faqs.htm" target="_blank"> 
                            BLS FAQ page
                        </Link>.
                        Below is the URL format using a key to send a query for a single response:
                        
                        <Box>
                            <Card className={classes.imageContainer}>
                                <i>https://api.bls.gov/publicAPI/v2/timeseries/data/
                                    <b>seriesID</b>?registrationkey=<b>apiKey</b>
                                </i>
                            </Card>
                        </Box>

                        The <b>seriesID</b> corresponds to the BLS data set to be called. 
                    </Box>
                </Container>
                <Container>
                    <Box className={classes.subtitle}>
                        Series ID Tutorial
                    </Box>
                    <Box>
                        The <Link href="https://www.bls.gov/help/hlpforma.htm#CE" target="_blank"> 
                                Series ID Formats Tutorial
                            </Link>
                        &nbsp;can help guide through how to determine a series ID without using the 
                        BLS Data Finder. For example, the <i>National Employment, Hours, and Earnings</i> 
                        &nbsp;has an endpoint that can be reached by using the 13-character long series ID 
                        that starts with the prefix 'CE'.
                    </Box>

                    <Card className={classes.imageContainer}>
                        <img className={classes.image}
                            src={nEmploy}
                            alt="National Employment, Hours, and Earnings seriesID format"
                        />
                    </Card>

                    <Box className={classes.last}>
                        When dynamically generating a series ID for a data set, you can
                        test the URL with the series ID through the browser instead of the console.
                        Try checking out the below URL in Chrome:

                        <Box>
                            <Card className={classes.imageContainer}>
                                <i>https://api.bls.gov/publicAPI/v2/timeseries/data/CEU0800000003</i>
                            </Card>
                            <p style={{margin:"2rem"}}>or this:</p>
                            <Card className={classes.imageContainer}>
                                <i>https://api.bls.gov/publicAPI/v2/timeseries/data/OEUN000000011100011000001</i>
                            </Card>
                        </Box>

                        There are some endpoints that do not contain data even though the series ID format is
                        correct and the endpoint exists. If the series ID receives a response message 
                        saying the series does not exist, then the data is not available.
                        Try finding another set of data in a different category/subcategory to use instead.
                        <br></br>
                        <br></br>
                        <b>Happy Navigating!</b>
                    </Box>
                </Container>
            </Container>
        </div>
    );
}

export default BLSAPI;