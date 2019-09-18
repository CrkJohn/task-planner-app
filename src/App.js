import React from 'react';
import './App.css';
import  SignIn  from './component/SignIn/SignIn'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Index from './component/initial';


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
            <Route exact path ="/index" component={index} />
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
          <Switch>
            {this.LoggedIn(isLoggedI)}
        </Switch>
      </Router>

    );
  }
}

export default App;