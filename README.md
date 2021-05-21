<h3>Website Content<h3>

<p>The BLS API Search application fetches data from the U.S. Bureau of Labor Statistics.
Since the BLS website contains a lot of information in addition to survey data,
it can be cumbersome to navigate through the site. As a user who may not normally
visit the BLS site frequently, it can be overwhelming to find desired data.</p>

<p>To make it easier to retrieve data, this application is a simple search tool that
generates charts. This is currently a Minimum Viable Product, and so
it can only generate one data set at a time. However, it is possible to generate 
multiple data sets to compare using the BLS API. If this app goes to full production,
it would have features added to generate charts and tables for single or multiple data set(s) 
at a time. It would also contain more survey data available to choose from and the
flexibility to choose which years to gather data from.</p>

<h3>Progamming Technologies</h3>

<p>This site utilized the following languages and tools:</p>
<ul>
    <li>JavaScript</li>
    <li>React</li>
    <li>Material-UI</li>
    <li>ChartJS</li>
    <li>U.S. Bureau of Labor Statistics API</li>
</ul>

<p>This application can be viewed on Heroku:&nbsp;
<Link href="https://mod2-statistics.herokuapp.com/" target="_blank">
https://mod2-statistics.herokuapp.com/
</Link></p>

<h3>Walkthrough<h3>

<h4>Home</h4>

<p>The Home page contains a form. The initial field selection refers to the
main categories of survey data. The current category selection focuses on the
subsets under the Employment and Unemployment division.</p>

<p>After selecting a category, additional fields appear. These fields include
parameters required to complete in order to determine the series ID.
By completing these fields and submitting, the series ID will generate and 
correspond to the data set desired.</p>

<h4>Chart</h4>

<p>A query is sent to the BLS API to retrieve JSON data.
From this data, a chart will be generated for each year provided in the response.
Hovering over a data point will show its specific value.</p>

<p>To make a new search request, click on the Home button in the top left of the nav bar.</p>

<h4>About</4>

<p>The About page is what you're currently on.
This page includes info about the application.</p>

<h4>BLS-API</h4>

</p>The BLS-API page goes over the usage of the API. 
It reviews how to create a URL request using an API key and 
how to generate a series ID. It also contains links to the BLS website.</p>

<h4>Menu</h4>

<p>The Menu button currently does not have a functionality. In the future,
it can provide a drop-down nav bar to the main categories.</p>

<h4>Footer</h4>

<p>The Footer contains the link to the BLS general website.</p>