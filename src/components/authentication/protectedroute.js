import React, { Fragment } from 'react';
import { Route, Redirect } from 'react-router-dom';
import ComingSoon from './registration'


const ProtectedRoute = () => {

  const checkValidToken = () => {
    const token = localStorage.getItem('userToken');
  
    console.log(token)
    if( token){
      return true
    }
    else {
        return false
    }
    
    // Validation logic...
  }

  return (
    <Fragment>
      {checkValidToken()
          ? <Route  exact path="/comingsoon" component={ComingSoon} />
          : <Redirect to="/loginregister" />
      }
    </Fragment>
  );
}

export default ProtectedRoute