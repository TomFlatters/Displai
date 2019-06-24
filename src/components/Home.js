import React from 'react';
import Button from '@material-ui/core/Button';
import '../App.css';

function Home() {
    return (
        <div className="Panel">
          <div className="PanelCol">
            <div className="Title">
              Displai is the learning community that lets you showcase what you know, and learn what you don't.
            </div>
            <div>
              <Button variant="contained" size="large" color="secondary" style={{width: "15vw", minHeight: "8vh"}}>
                + GET STARTED 
              </Button>
            </div>
          </div>
        </div>
    );
  }

  export default Home