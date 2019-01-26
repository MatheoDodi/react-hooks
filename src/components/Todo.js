import React, { Component, useState } from 'react';

const todo = props => {
  const [todo, setTodo] = useState('');

  return (
    <React.Fragment>
      <input
        type='text'
        placeholder='Todo'
        value={todo}
        onChange={e => setTodo(e.value)}
      />
      <button type='button'>Add</button>
      <ul />
    </React.Fragment>
  );
};

export default React.memo(todo);
