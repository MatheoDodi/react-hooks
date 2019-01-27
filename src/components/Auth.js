import React from 'react';
import AuthContext from '../auth-context';

const Auth = props => (
  <AuthContext.Consumer>
    {({ status, changeAuthStatus }) => {
      return (
        <div>
          <h1>{status ? 'Logged In' : 'Logged Out'}</h1>
          <button onClick={changeAuthStatus}>Change Status</button>
        </div>
      );
    }}
  </AuthContext.Consumer>
);

export default Auth;
