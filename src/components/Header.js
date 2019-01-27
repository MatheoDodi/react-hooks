import React, { useContext } from 'react';

import AuthContext from '../auth-context';

const Header = props => {
  const { status } = useContext(AuthContext);

  return (
    <header>
      {status && <button onClick={props.onLoadTodos}>Todo List</button>} |{' '}
      <button onClick={props.onLoadAuth}>Auth</button>
      <hr />
    </header>
  );
};

export default Header;
