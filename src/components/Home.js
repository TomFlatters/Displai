import React from 'react';
import Button from '@material-ui/core/Button';
import '../App.css';

// leave router in to link to pages that load when logged in
import { Link, Route, BrowserRouter as Router} from 'react-router-dom';

// trial one page login system, with Routeronly used when loggedIn == TRUE
import Login from './Login.js'

import ScrollIntoView from 'react-scroll-into-view'

export default class Home extends React.Component{
  constructor(){
        super()
        this.state=({
            currentScrollHeight: 0
        })
    }

    componentDidMount () {      
        window.focus()
        window.onscroll =()=>{
            this.setState({currentScrollHeight: window.scrollY})
       }
     }
    
    render(){
      if(this.state.currentScrollHeight > 200){
        var opacity2 = Math.min((this.state.currentScrollHeight-350) / 200 , 1);
        var opacity = 0;
      }
      else{
          var opacity2 = 0;
          var opacity = Math.min(8 / this.state.currentScrollHeight  , 1);
        }
    return (
        <div>
          <div className="Panel animate" style={{backgroundColor: `theme.palette.secondary.main`}}>
            <div className="PanelCol" style={{opacity: opacity}}>
              <div className="Title" style={{color: "white"}}>
                Show and tell, for the real world.
              </div>
              <ScrollIntoView selector="#loginform" style={{cursor: "pointer"}}>
              <Button variant="contained" size="large" style={{width: "22vw", minHeight: "8vh"}}>
                  Get Started
                </Button>
              </ScrollIntoView>
              <div>
              </div>
            </div>
          </div>
          <div className="Panel animate" >
            <div className="PanelCol" id="loginform" style={{opacity: opacity2}}>
                <Login/>
            </div>
          </div>
          </div>
    );
  }
  }