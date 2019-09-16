import React from 'react';
import './App.css';
import  SignIn  from './component/SignIn/SignIn'
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import Index from './component/Index';


class App extends React.Component {



  LoggedIn(isLoggedI) {
    const LoginView = () => (
      <SignIn />
    );

    const index = () => (
        <Index></Index>
    );
    if (!isLoggedI) {
      return (
        <div>
            <Route exact path="/" component={LoginView} />
        </div>
        );
    }
    else {
    
      return(  
          <div>
            <Route to="/index" component={index} />
          </div>
        );
    }
  }



  render() {
    if (localStorage.getItem('isLoggedin') === undefined) {
      localStorage.setItem('isLoggedin', false)
    }
    const isLoggedI = localStorage.getItem('isLoggedin')
    return (
      <Router>
        <div id = "temp">   
          {this.LoggedIn(isLoggedI)}
        </div>
      </Router>
    );
  }
}

export default App;