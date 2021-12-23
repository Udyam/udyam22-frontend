import React, { Fragment } from 'react';
import { Route, Redirect } from 'react-router-dom';
import RegisterForm from './loginregform'


const RouteProtected = () => {

  const ValidToken = () => {
    const token = localStorage.getItem('userToken');
  
    console.log(token)
    if( token){
      return false
    }
    else {
        return true
    }
    
    // Validation logic...
  }

  return (
    <Fragment>
      {ValidToken()
          ? <Route  exact path="/loginregister" component={RegisterForm} />
          : <Redirect to="/comingsoon" />
      }
    </Fragment>
  );
}

export default RouteProtected