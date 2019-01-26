import React, { useState, useEffect } from 'react';
import axios from 'axios';

const todo = props => {
  const [todoName, setTodoName] = useState('');
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios
      .get('https://react-hooks-matthew.firebaseio.com/todos.json')
      .then(res => {
        const ids = res.data;
        const fetchedTodos = [];
        for (const key in ids) {
          fetchedTodos.push(ids[key].name);
        }

        setTodos(fetchedTodos);
      });

    return () => {
      console.log('cleanup!');
    };
  }, []);

  const inputChangeHandler = e => {
    setTodoName(e.target.value);
  };

  const addTodoHandler = () => {
    setTodos([...todos, todoName]);
    setTodoName('');
    axios
      .post('https://react-hooks-matthew.firebaseio.com/todos.json', {
        name: todoName
      })
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };

  return (
    <React.Fragment>
      <input
        type='text'
        placeholder='Todo'
        value={todoName}
        onChange={inputChangeHandler}
      />
      <button type='button' onClick={addTodoHandler}>
        Add
      </button>
      <ul>
        {todos.map(todo => (
          <li key={todo + Date.now().toString()}>{todo}</li>
        ))}
      </ul>
    </React.Fragment>
  );
};

export default React.memo(todo);
