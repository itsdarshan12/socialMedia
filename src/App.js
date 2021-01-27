import React, { useState, useContext } from 'react';
import classes from './App.module.css';
import Cockpit from './Components/Cockpit/Cockpit';
import { AuthContext } from './HOC/Auth-Context/auth-context';
import AuthPage from './Containers/Authentication/Authentication';
import { Route } from 'react-router-dom';
const App = () => {
  const authContext = useContext(AuthContext);
  return (
    <div className={classes.App}>
      {!authContext.isAuthenticated ?
        <AuthPage />
        :
        <Cockpit />
      }
    </div>
  );
}

export default App;
