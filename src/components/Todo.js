import React, { Component, useState } from 'react';

const todo = props => {
  const [todo, setTodo] = useState('');

  const inputChangeHandler = e => {
    setTodo(e.target.value);
  };

  return (
    <React.Fragment>
      <input
        type='text'
        placeholder='Todo'
        value={todo}
        onChange={inputChangeHandler}
      />
      <button type='button'>Add</button>
      <ul />
    </React.Fragment>
  );
};

export default React.memo(todo);
