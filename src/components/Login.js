import React, { Component } from 'react';
import '../App.css';
import fire from '../config/firebaseconfig.js';
import firebase from 'firebase'

import Paper from '@material-ui/core/Paper';

import StyledTextForm from './StyledTextForm.js'

class Login extends Component{

    render() { 
    return (
        <div className="LoginScreen">
        <div className="FlexLeft">
            <h1 className="LoginText">Share better</h1>
            <h3 className="LoginSubtext">
                It's time to show and share your work in all it's glory, for better or for worse
            </h3>
        </div>
        <div style={{width: "40vw", marginRight: "10vw"}}>
            <StyledTextForm/>
        </div>
        </div>
/* 
            <div className="UpperForm">
            <div className="FormContainer">
            <div className="FlexLeft">
            
                <span className="LoginSubtext">EMAIL</span>
                <input value={this.state.email} onChange={this.email} className="Input"></input>
                <div className="LoginSubtext">PASSWORD</div>
                <input value={this.state.password} onChange={this.password} className="Input"></input>
            </div>
            <div>
            <button className="LoginButton" onClick={this.login}>
                + LOGIN
            </button>
            <button className="LoginButton" onClick={this.signup}>
                + SIGN UP
            </button>
            </div>
            </div>
            </div>
            <div className="LowerForm">
                <div className="LowerFormContainer">
                <button onClick={this.googleSignIn}>Sign in with Google</button>
                </div>
            </div> */
            );
            }
  }

  export default Login;