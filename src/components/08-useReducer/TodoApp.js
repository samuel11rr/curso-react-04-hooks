import React, { useReducer, useEffect } from 'react';
import { todoReducer } from './todoReducer';

import { TodoList } from './TodoList';
import { TodoAdd } from './TodoAdd';
import './style.css';

const init = () => {
  return JSON.parse( localStorage.getItem('todos') ) || [];
}


export const TodoApp = () => {
  // nuestro initialState es un arreglo vacio []
  const [ todos, dispatch ] = useReducer(todoReducer, [], init)

  // guardamos en localStorage cada vez que la lista de todos se modifique
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify( todos ));
  }, [ todos ]);

  const handleDelete = (todoId) => {
    const action = {
      type: 'delete',
      payload: todoId
    }

    dispatch(action);
  }

  const handleToggle = (todoId) => {
    dispatch({
      type: 'toggle',
      payload: todoId
    })
  }

  const handleAddTodo = ( newTodo ) => {
    dispatch({
      type: 'add',
      payload: newTodo
    });
  }

  return (
    <div>
      <h1> TodoApp ({ todos.length }) </h1>
      <hr />

      <div className="row">
        <div className="col-7">
          <TodoList 
            todos={ todos }
            handleDelete={ handleDelete }
            handleToggle={ handleToggle }
          />
        </div>

        <div className="col-5">
          <TodoAdd 
            handleAddTodo={ handleAddTodo }
          />
        </div>
      </div>
    </div>
  )
}
