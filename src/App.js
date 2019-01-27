import React, { useState } from 'react';

import Todo from './components/Todo';
import Header from './components/Header';
import Auth from './components/Auth';
import AuthContext from './auth-context';

const App = () => {
  const [page, setPage] = useState(<Todo />);
  const [authStatus, setAuthStatus] = useState(false);

  const switchPage = pageName => {
    setPage(pageName);
  };

  const changeAuthStatus = () => {
    setAuthStatus(!authStatus);
  };

  return (
    <div className='App'>
      <AuthContext.Provider value={{ status: authStatus, changeAuthStatus }}>
        <Header
          onLoadTodos={() => switchPage(<Todo />)}
          onLoadAuth={() => switchPage(<Auth />)}
        />
        {page}
      </AuthContext.Provider>
    </div>
  );
};

export default App;
