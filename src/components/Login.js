import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
import '../App.css';
import fire from '../config/firebaseconfig.js';
import firebase from 'firebase'

class Login extends Component {

    constructor(props){
        super()
        this.login = this.login.bind(this)
        this.signup = this.signup.bind(this)
        this.email = this.email.bind(this)
        this.password = this.password.bind(this)
        this.googleSignIn = this.googleSignIn.bind(this)
        this.state = {
            email: "",
            password: ""
        }
    }

    email(e){
        this.setState({email: e.target.value})
    }
    password(e){
        this.setState({password: e.target.value})
    }


    signup(e){
        e.preventDefault()
        console.log("in signup function")
        fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
        .then(
            (user)=>{
                fire.auth().currentUser.updateProfile({ displayName: "Tom" })
          })
        .then((user)=>{
                fire.firestore().collection('users').doc(fire.auth().currentUser.uid)
                .set({ 
                    displayName: "Tom",
                    photoURL: fire.auth().currentUser.photoURL
                });
            })
        .catch(function(error) {
            // Handle Errors here.
            console.log(error);
            // var errorCode = error.code;
            // var errorMessage = error.message;
            // ...
    })
    }
    login(e){
        e.preventDefault()
        console.log("in login function")
        fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
        .catch(function(error) {
            // Handle Errors here.
            console.log("error");
            // var errorCode = error.code;
            // var errorMessage = error.message;
            // ...
    })
    }

    googleSignIn(e){
        console.log("STARTING sign in with Google")
        e.preventDefault()
        var provider = new firebase.auth.GoogleAuthProvider();
        fire.auth().signInWithPopup(provider).then(function(result) {
            // This gives you a Google Access Token. You can use it to access the Google API.
            var token = result.credential.accessToken;
            // The signed-in user info.
            var user = result.user;
            console.log("google sign in COMPLETE")
            console.log(user)
            console.log(token)
            // ...
          }).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
          });
    }

    render() { 
    return (
        <div className="LoginScreen">
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
            </div>
        </div>
            );
            }
  }

  export default Login;