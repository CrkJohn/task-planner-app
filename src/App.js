import React from 'react';
import './App.css';
import  SignIn  from './component/SignIn/SignIn'
import  SignUp  from './component/SignUp/SignUp'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import EditProfile from './component/editProfile/EditProfile'
import Filter from './component/filter/Filter'
import Index from './component/initial';


class App extends React.Component {





  render() {
    if (localStorage.getItem('isLoggedin') === undefined) {
      localStorage.setItem('isLoggedin', false)
    }
    const SignUpView = () => (
      <SignUp></SignUp>
    );
    const LoginView = () => (
      <div>   
        {localStorage.getItem('isLoggedin') ? <div><Index/> </div> : <SignIn />}
      </div>
    );

  
    return (
      <Router>
        <div>
        <Switch>
          <Route exact path="/" component={LoginView} />
          <Route exact path ="/index" component={Index} />
          <Route exact path="/singUp" component={SignUpView} />
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/editprofile" component={EditProfile}/>
          <Route exact path="/filter" component={Filter}/>
        </Switch>         
        </div>
      </Router>

    );
  }
}

export default App;