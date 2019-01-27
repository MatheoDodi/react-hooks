import React, { useContext } from 'react';
import AuthContext from '../auth-context';

const Auth = props => {
  const { status, changeAuthStatus } = useContext(AuthContext);

  return (
    <div>
      <h1>{status ? 'Logged In' : 'Logged Out'}</h1>
      <button onClick={changeAuthStatus}>Change Status</button>
    </div>
  );
};

export default Auth;
