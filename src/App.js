import React from 'react';
import logo from './logo.svg';
import './App.css';
import  SingIn  from './component/SignIn/SignIn';
import Menu from './component/drawers/Menu';

function App() {
  return (
    <div>
        <Menu></Menu>
        <SingIn> </SingIn>
        </div>
  );
}

export default App;
