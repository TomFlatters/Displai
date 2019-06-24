import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import '../App.css';
import { Link, Route, BrowserRouter as Router} from 'react-router-dom';


class Header extends Component{
    render(){
    return(
        <div style={{position: "fixed", width: "100vw"}}>
    <Toolbar style={{borderBottom: "1px solid #c7c7c7", backgroundColor: "#fafafa"}}>
          <Link
              style={{ textDecoration: 'none',color: "black"}}
               to="/">
            <img className="HeaderLogo" src={require("../images/displai.png")}/>
          </Link>
      
      <Typography variant="h6" style={{flexGrow: 1, textAlign:"left"}}>
            Displai
          </Typography>
          {/* <Button variant="contained" size="large" color="secondary">Feed</Button> */}
          <Link style={{textDecoration: 'none'}} to="/login">
          <Button variant="outlined" size="large" color="secondary">Login</Button>
          </Link>
          </Toolbar>
          </div>
    )
}}

export default Header