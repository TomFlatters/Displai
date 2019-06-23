import React, { Component } from 'react';
import '../App.css';
import fire from '../config/firebaseconfig.js';
import firebase from 'firebase';

class Login extends Component {

    constructor(props){
        super()
        this.login = this.login.bind(this)
        this.state = {
            email: "",
            password: ""
        }
    }

    login(e){
        e.preventDefault()
        console.log("in login function")
        fire.auth().createUserWithEmailAndPassword("tflats@tom.com", "password123123nddjdnjdak").catch(function(error) {
            // Handle Errors here.
            console.log("error");
            // var errorCode = error.code;
            // var errorMessage = error.message;
            // ...
    })
    }

    render() { 
    return (
        <div className="Panel">
            <div className="Form">
            <div className="FormContainer">
            <div className="FlexLeft">
                <span className="LoginSubtext">EMAIL</span>
                <input className="Input"></input>
                <div className="LoginSubtext">PASSWORD</div>
                <input className="Input"></input>
            </div>
            <button className="LoginButton" onClick={this.login}>
                + SIGN UP
            </button>
            </div>

            <hr className="LineWidth"/>
            
            <div>

            </div>

            </div>
        </div>
            );
            }
  }

  export default Login;