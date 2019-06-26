import React from 'react';
import Button from '@material-ui/core/Button';
import '../App.css';
import { Link, Route, BrowserRouter as Router} from 'react-router-dom';

function Home() {
    return (
        <div className="Panel">
          <div className="PanelCol">
            <div className="Title">
              Displai is the learning community that lets you showcase what you know, and learn what you don't.
            </div>
            <div>
            <Link style={{textDecoration: 'none'}} to="/login">
              <Button variant="contained" size="large" color="secondary" style={{width: "15vw", minHeight: "8vh"}}>
                + GET STARTED 
              </Button>
              </Link>
            </div>
          </div>
        </div>
    );
  }

  export default Home