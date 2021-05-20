import React from 'react';
import {Container, Box, ListItem} from '@material-ui/core';
import infoStyles from './styles/infoStyles';

const technologies = ["JavaScript", "React", "Material-UI", "ChartJS", "U.S. Bureau of Labor Statistics API"];

function About() {
    const classes = infoStyles();
    return (
        <div className={classes.infoContainer}>
            <Container className={classes.infoTitle}>
                About
            </Container>
            <Container className={classes.content}>
                <Container>
                    <Box className={classes.subtitle}>
                        Website Content
                    </Box>
                    <Box className={classes.bottom}>
                        The BLS API Search application fetches data from the U.S. Bureau of Labor Statistics.
                        Since the BLS website contains a lot of information in addition to survey data,
                        it can be cumbersome to navigate through the site. As a user who may not normally
                        visit the BLS site frequently, it can be overwhelming to find desired data.
                    </Box>
                    <Box className={classes.bottom}>
                        To make it easier to retrieve data, this application is a simple search tool that
                        generates charts. It is currently a Minimum Viable Product, and so
                        it can only generate one data set at a time. However, it is possible to generate 
                        multiple data sets to compare using the BLS API. If this app goes to full production,
                        it would be capable of generating charts and tables for single or multiple data set(s) 
                        at a time. It would also contain more survey data available to choose from and the
                        flexibility to choose which years to gather data from.
                    </Box>
                </Container>
                <Container>
                    <Box className={classes.subtitle}>
                        Progamming Technologies
                    </Box>
                    <Box>
                        This site utilized the following languages and tools:
                        <ul>
                            {technologies.map(item => {
                                return <ListItem key={item} style={{listDecoration:"square"}}>{item}</ListItem>
                            })}
                        </ul>
                    </Box>
                </Container>
                <Container>
                    <Box className={classes.subtitle}>
                        Walkthrough
                    </Box>
                    
                    <Box className={classes.bottom}>
                        <Box className={classes.subtitle2}>
                            Home
                        </Box>
                        <Box className={classes.bottom}>
                            The Home page contains a form. The initial field selection refers to the
                            main categories of survey data. The current category selection focuses on the
                            subsets under Employment and Unemployment.
                        </Box>
                        <Box className={classes.bottom}>
                            After selecting a category, additional fields appear. These fields include
                            parameters required to complete in order to determine the series ID.
                            By completing these fields and submitting, the series ID will generate and 
                            correspond to the data set desired.
                        </Box>

                        <Box className={classes.subtitle2}>
                            Chart
                        </Box>
                        <Box className={classes.bottom}>
                            A query is sent to the BLS API to retrieve JSON data.
                            From this data, a chart will be generated for each year provided in the response.
                            Hovering over a data point will show its specific value.
                        </Box>
                        <Box className={classes.bottom}>
                            To make a new search request, click on the Home button in the top left of the nav bar.
                        </Box>

                        <Box className={classes.subtitle2}>
                            About
                        </Box>
                        <Box className={classes.bottom}>
                            The About page is what you're currently on.
                            This page includes info about the application.
                        </Box>

                        <Box className={classes.subtitle2}>
                            BLS-API
                        </Box>
                        <Box className={classes.bottom}>
                            The BLS-API page goes over the usage of the API. 
                            It reviews how to create a URL request using an API key and 
                            how to generate a series ID. It also contains links to the BLS website.
                        </Box>

                        <Box className={classes.subtitle2}>
                            Menu
                        </Box>
                        <Box className={classes.bottom}>
                            The Menu button currently does not have a functionality. In the future,
                            it can provide a drop-down nav bar to the main categories.
                        </Box>

                        <Box className={classes.subtitle2}>
                            Footer
                        </Box>
                        <Box className={classes.last}>
                            The Footer contains the link to the BLS general website.
                        </Box>
                    </Box>
                </Container>
            </Container>
        </div>
    );
}

export default About;