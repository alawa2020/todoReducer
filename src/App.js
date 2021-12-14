import React, { useEffect, useReducer } from 'react';
import TodoAdd from './components/TodoAdd';
import TodoList from './components/TodoList';

import todoReducer from './reducers/todoReducer';

// forma del initialState
// const initialState = [
//   {
//     id: '1',
//     todo: 'Aprender React',
//     done: false,
//   },
//   {
//     id: '2',
//     todo: 'Aprender Node',
//     done: false,
//   },
// ];

const init = () => {
  return JSON.parse(localStorage.getItem('todos')) || [];
};

const App = () => {
  const [state, dispatch] = useReducer(todoReducer, [], init);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(state));
  }, [state]);

  const handleClickTodo = (id) => {
    dispatch({
      type: 'update',
      payload: id,
    });
  };

  const handleDeleteClick = (id) => {
    dispatch({
      type: 'delete',
      payload: id,
    });
  };

  const handleAddTodo = (tarea) => {
    dispatch({
      type: 'add',
      payload: {
        id: new Date().getTime(),
        todo: tarea,
        done: false,
      },
    });
  };

  return (
    <div>
      <h1>App Todos</h1>
      <div className="row">
        {/* Lista de todos */}
        <div className="col">
          <h2>ToDo's</h2>

          <TodoList
            state={state}
            handleClickTodo={handleClickTodo}
            handleDeleteClick={handleDeleteClick}
          />
        </div>

        {/* Agregar Todos */}
        <div className="col">
          <TodoAdd handleAddTodo={handleAddTodo} />
        </div>
      </div>
    </div>
  );
};

export default App;
