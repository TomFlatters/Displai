import React from 'react';
import './App.css';
import Home from './components/Home.js';
import Login from './components/Login.js';
import Header from './components/Header.js';


import { ThemeProvider } from "@material-ui/styles";
import theme from './theme.js';


import { Link, Route, BrowserRouter as Router} from 'react-router-dom';

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
    <div className="App">
      <Header />

        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />

    </div>
    </ThemeProvider>
    </Router>

  );
}

export default App;
