import React from 'react';
import {Container, Box, Link, Card, CardMedia} from '@material-ui/core';
import aboutStyles from './styles/aboutStyles';
import nEmploy from "./images/nEmployHoursEarns-image.png";

function About(props) {
    const classes = aboutStyles();
    return (
        <div>
            <Container className={classes.aboutTitle}>
                ABOUT
            </Container>
            <Container className={classes.content}>
                <Box padding={1}>
                <Box className={classes.subtitle}>
                        U.S. Bureau of Labor Statistics API
                    </Box>
                    The U.S. Bureau of Labor Statistics provides a free API to search its databases.
                    General info about the BLS API can be found on the &nbsp;
                    <Link href="https://www.bls.gov/developers/home.htm" target="_blank"> 
                       BLS website
                    </Link>. If using the API, please remember to read the &nbsp;
                    <Link href="https://www.bls.gov/developers/home.htm" target="_blank"> 
                       Terms of Services
                    </Link>.
                </Box>
                <Box padding={1}>
                    The API is free to use without a key at a daily limit of <b>25 queries </b> 
                    and up to 10 years of data per query.
                    With an API key, the daily limit increases to <b>500 queries</b> and up to 20 years of 
                    data per query.
                </Box>

                <Box padding={1}>
                    Info to register for a key can be found on the &nbsp;
                    <Link href="https://www.bls.gov/developers/api_faqs.htm" target="_blank"> 
                       BLS FAQ page
                    </Link>.
                    Below is the URL format using a key to send a query for a single response:
                    
                    <Box margin={2}>
                        <i>https://api.bls.gov/publicAPI/v2/timeseries/data/
                            <b>seriesID</b>?registrationkey=<b>apiKey</b></i>
                    </Box>

                    The <b>seriesID</b> corresponds to the BLS data set to be called. 
                </Box>
                <Box padding={1}>
                    <Box className={classes.subtitle}>
                        Series ID Tutorial
                    </Box>
                    The <Link href="https://www.bls.gov/help/hlpforma.htm#CE" target="_blank"> 
                            Series ID Formats Tutorial
                        </Link> can help guide through how to 
                    determine a series ID without using the BLS Data Finder.
                    For example, the <i>National Employment, Hours, and Earnings</i> has an endpoint
                    that can be reached by using the 13-character long series ID that starts with 
                    the prefix 'CE'.

                    <Card className={classes.imageContainer}>
                        <img className={classes.image}
                            src={nEmploy}
                            alt="National Employment, Hours, and Earnings seriesID format"
                            // style={{width:"50%"}}
                        />
                    </Card>

                    <Box padding={1}>
                        There are some endpoints that are unsuccessful even if the series ID is
                        correct. Before trying to generate a series ID for a data set,
                        test the example series ID given in the Format Tutorial. If the example 
                        series ID retrieves a bad response, then the endpoint is bad.
                    </Box>
                </Box>
            </Container>
        </div>
    );
}

export default About;