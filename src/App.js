import React from 'react';
import './App.css';
import Home from './components/Home.js';
import LoggedIn from './components/LoggedIn.js';
import Header from './components/Header.js';


import { ThemeProvider } from "@material-ui/styles";
import theme from './theme.js';


import { Link, Route, BrowserRouter as Router} from 'react-router-dom';
import { Redirect } from 'react-router';
import fire from './config/firebaseconfig';


class App extends React.Component{
  constructor(props){
    super()
    this.checkForUser = this.checkForUser.bind(this);
    this.state={
      username: null,
      loggedIn: false,
      loading: true
    }
  }
  checkForUser = () => {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        // User is signed in.
        console.log(user.displayName + " is logged in now.")
        console.log(user)
        this.setState({
          username: user.displayName,
          loggedIn: true,
          loading: false
        })
      } else {
        // No user is signed in.
        console.log("No user is logged in.")
        this.setState({
          username: null,
          loggedIn: false,
          loading: false
        })
      }
    });
  }

  componentDidMount(){
    this.checkForUser()
    console.log(this.state.username)
  }

  // ***need to unsubscribe on dismount... (memory leak )
  // componentWillUnmount() {
  //   this.authSubscription();
  // }

  render(){
  if(this.state.loading){
    return(<div></div>)
  }
  else{
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <div className="App" style={{backgroundColor: `${theme.palette.secondary.dark}`}}>
          <Header />
          <ThemeProvider theme={theme}>
            {this.state.loggedIn ? (<Redirect push to={"/feed"} />) : (<Redirect push to={"/"} />) }
            <Route exact path="/" component={Home} />
            <Route exact path={"/feed"} render={(props) => <LoggedIn username={this.state.username} />}/>
          </ThemeProvider>
        </div>
      </ThemeProvider>
    </Router>

  );
  }
}
}

export default App;
