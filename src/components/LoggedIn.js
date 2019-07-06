import React, { Component } from 'react';
import '../App.css';

import Feed from './Feed.js'
import SetName from './SetName.js'

import fire from '../config/firebaseconfig.js'

class LoggedIn extends Component{
    constructor(){
        super()
        this.setname = this.setname.bind(this)
        this.state={
            hasSetName: false
        }
    }
    
    setname(e){
        console.log(!this.state.hasSetName)
        this.setState({ hasSetName: !this.state.hasSetName})
        console.log(fire.auth().currentUser.displayName)
    }

    render() { 
    console.log(this.props.username)
    if (this.props.username !== null){
        return(
        <Feed />
        )
    }
    else if(this.state.hasSetName === true){
        return(
            <Feed />
        )
    }
    else{
        return(
        <SetName setname={this.setname}/>
        )
    }
       
            }
  }

  export default LoggedIn;