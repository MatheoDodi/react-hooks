import React, { useState } from 'react';

const todo = props => {
  const [todoName, setTodoName] = useState('');
  const [todos, setTodos] = useState([]);

  const inputChangeHandler = e => {
    setTodoName(e.target.value);
  };

  const addTodoHandler = todo => {
    setTodos([...todos, todo]);
    setTodoName('');
  };

  return (
    <React.Fragment>
      <input
        type='text'
        placeholder='Todo'
        value={todoName}
        onChange={inputChangeHandler}
      />
      <button type='button' onClick={() => addTodoHandler(todoName)}>
        Add
      </button>
      <ul>
        {todos.map(todo => (
          <li>{todo}</li>
        ))}
      </ul>
    </React.Fragment>
  );
};

export default React.memo(todo);
