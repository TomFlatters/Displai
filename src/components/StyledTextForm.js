import React from 'react';

import fire from '../config/firebaseconfig.js';
import firebase from 'firebase'

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';

import StyledTextField from './StyledTextField.js'

import Paper from '@material-ui/core/Paper';
import theme from '../theme.js'


const styles = theme => ({
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
    },
  });

class StyledTextForm extends React.Component {
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
    e.preventDefault()
    this.setState({email: e.target.value})
    console.log(this.state)
}
password(e){
    e.preventDefault()
    this.setState({password: e.target.value})
}


signup(e){
    e.preventDefault()
    console.log("in signup function")
    fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
    .then(
        (user)=>{
            fire.auth().currentUser.updateProfile({ displayName: "" })
      })
    .then((user)=>{
            fire.firestore().collection('users').doc(fire.auth().currentUser.uid)
            .set({ 
                displayName: "",
                photoURL: fire.auth().currentUser.photoURL
            });
            console.log("sign up successful")
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
console.log("login successful")
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
      })
}
  render() {
    const { classes } = this.props;
    return (
      <form className={classes.container} noValidate autoComplete="off">
      <Paper style={{backgroundColor: "white", padding: "1vh 4vw"}} elevation5>
        <StyledTextField inputvalue={this.state.email} oninputchange={this.email} inputname="Email"/>
        <StyledTextField inputvalue={this.state.password} oninputchange={this.password} inputname="Password"/>
        <div>
        <Button onClick={this.login} variant="contained" size="large" color="secondary" style={{width: "10vw", minHeight: "8vh", margin: "2vh 1vw"}}>
            Login
        </Button>
        <Button onClick={this.signup} variant="outlined" size="large" color="secondary" style={{width: "10vw", minHeight: "8vh", margin: "2vh 1vw"}}>
            Sign Up
        </Button>
        </div>
        <hr/>
        <div>
          <Button onClick={this.googleSignIn} variant="contained" size="large" color="primary" style={{width: "20vw", minHeight: "8vh", margin: "2vh 1vw"}}>Sign in with Google</Button>
        </div>
      </Paper>
      </form>
    );
  }
}

StyledTextForm.propTypes = {
    classes: PropTypes.object.isRequired,
  };

  export default withStyles(styles)(StyledTextForm);
