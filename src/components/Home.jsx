import React, { Component } from 'react';


// API Walkthrough: https://hashrocket.com/blog/posts/extracting-programmer-employment-data-from-bls
// BLS Wrapper: https://github.com/reaperkrew/bls

class Home extends Component {
    constructor() {
        super()
        
        this.state = {
            data: "",
        }
    }
    
    render() {
        return (
            <div>
                National Employment, Hours, and Earnings
            </div>
        );
    }
}

export default Home;