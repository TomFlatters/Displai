import React, { Component } from 'react';
import '../App.css';

import fire from '../config/firebaseconfig.js';

class Feed extends Component{
    render() { 
    return(
        <div className="feed">
            welcome to the news feed,
            here are some panels of projects
        </div>
    )
    }
  }

  export default Feed;