import React, { Component } from 'react';
import '../App.css';

import StyledTextForm from './StyledTextForm.js'

class Login extends Component{

    render() { 
    return (
        <div className="LoginScreen">
        <div className="FlexLeft">
            <h1 className="LoginText">Share better:</h1>
            <h3 className="LoginSubtext">
                Displai lets you discover, share, and learn from creative, original projects. All within a community of talented and interesting people - just like you.
            </h3>
        </div>
        <div style={{width: "40vw", marginRight: "10vw"}}>
            <StyledTextForm/>
        </div>
        </div>
            );
            }
  }

  export default Login;