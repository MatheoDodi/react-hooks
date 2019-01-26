import React, { useState } from 'react';

import Todo from './components/Todo';
import Header from './components/Header';
import Auth from './components/Auth';

const App = () => {
  const [page, setPage] = useState(<Todo />);

  const loadTodosHandler = () => {
    setPage(<Todo />);
  };

  const loadAuthHandler = () => {
    setPage(<Auth />);
  };

  return (
    <div className='App'>
      <Header onLoadTodos={loadTodosHandler} onLoadAuth={loadAuthHandler} />
      {page}
    </div>
  );
};

export default App;
