import React, { Component } from 'react';
import '../App.css';

import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

import StyledTextField from './StyledTextField.js'

import fire from '../config/firebaseconfig.js'

class SetName extends Component{
    constructor(props){
        super()
        this.username=this.username.bind(this)
        this.setname=this.setname.bind(this)
        this.state={
            username: ""
        }
    }
    username(e){
        e.preventDefault()
        this.setState({username: e.target.value})
        console.log(this.state.username)
    }
    setname(){
        // set the displayName in auth
        fire.auth().currentUser.updateProfile({ displayName: this.state.username })
        .then(() => {console.log("Updated username to " + this.state.username + ".")})
        // then update the database profile
        fire.firestore().collection('users').doc(fire.auth().currentUser.uid)
            .set({ 
                displayName: this.state.username,
            })
            .then(() => {console.log("Updated database profile aswell.")})
        this.props.setname()
    }

    render() { 
    return(
        <div className="namescreen">
            <div className="LoginScreen">
        <div className="FlexLeft">
            <h1 className="LoginText">...What should we call you?</h1>
            <h3 className="LoginSubtext">
                {/* Displai lets you discover, share, and learn from creative, original projects. All within a community of talented and interesting people - just like you. */}
            </h3>
        </div>
        <div style={{width: "40vw", marginRight: "10vw"}}>
        <form className="flex" noValidate autoComplete="off">
            <Paper style={{backgroundColor: "white", padding: "1vh 4vw"}} elevation5>
                    <StyledTextField inputvalue={this.state.username} oninputchange={this.username} inputname="Name"/>
                    <div>
                        <Button onClick={this.setname} variant="contained" size="large" color="secondary" style={{width: "20vw", minHeight: "8vh", margin: "2vh 1vw"}}>
                            Go To Feed
                        </Button>
                    </div>
            </Paper>
        </form>
        </div>
        </div>
        </div>
    )
    }
  }

  export default SetName;