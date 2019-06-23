import React from 'react';
import './App.css';
import Home from './components/Home.js';
import Login from './components/Login.js';

import { Link, Route, BrowserRouter as Router} from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
      <div className="Header">
        <div className="HeaderItemLeft">
          <Link
              style={{ textDecoration: 'none',color: "white"}}
               to="/">
                  <img className="HeaderLogo" src={require("./images/displai_grey.png")}/>
               </Link>
        </div>
        <div className="HeaderItem">
          Feed
        </div>
        <div className="HeaderItem">
        <Link style={{textDecoration: 'none', color: 'white'}} to="/login">
          Login
        </Link>
        </div>
        <div className="HeaderItem">
          Sign up
        </div>
      </div>

        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />

    </div>
    </Router>

  );
}

export default App;
