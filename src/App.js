  
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import HomePage from './components/HomePage';
import LoginPage from './components/LoginPage';
import LoggedInLand from './components/logged_in_pg';
import UserProfilePage from './components/user_profile_page';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Router>
        <Switch>
          <Route exact path="/" render={HomePage} />
          <Route exact path="/login" render={LoginPage} />
          <Route exact path="/LoggedInLand" render={LoggedInLand}/>
          <Route exact path="/UserProfilePage" render={UserProfilePage} />
        </Switch>
      </Router>
      </header>
    </div>
  );
}

export default App;