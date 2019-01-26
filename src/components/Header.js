import React from 'react';

const Header = props => (
  <header>
    <button onClick={props.onLoadTodos}>Todo List</button> |{' '}
    <button onClick={props.onLoadAuth}>Auth</button>
    <hr />
  </header>
);

export default Header;
