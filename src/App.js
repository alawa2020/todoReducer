import React, { useReducer } from 'react';
import useform from './hooks/useform';
import todoReducer from './reducers/todoReducer';

const initialState = [
  {
    id: '1',
    todo: 'Aprender React',
    done: false,
  },
  {
    id: '2',
    todo: 'Aprender Node',
    done: false,
  },
];

const App = () => {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  const [{ tarea }, handleValuesChange, resetForm] = useform({ tarea: '' });

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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (tarea.trim().length > 2) {
      dispatch({
        type: 'add',
        payload: {
          id: 3,
          todo: tarea,
          done: false,
        },
      });
      resetForm();
      console.log('submit done!');
      return;
    }
    console.log('error!');
  };

  return (
    <div>
      <h1>App Todos</h1>
      <div className="row">
        {/* Lista de todos */}
        <div className="col">
          <h2>ToDo's</h2>
          <ol>
            {state.map((todo) => (
              <div key={todo.id}>
                <p
                  onClick={() => handleClickTodo(todo.id)}
                  className={`${todo.done && 'complete'}`}
                >
                  {todo.todo}
                </p>
                <button
                  type="button"
                  onClick={() => handleDeleteClick(todo.id)}
                  className="btn btn-outline-primary"
                >
                  Borrar
                </button>
              </div>
            ))}
          </ol>
        </div>

        {/* Agregar Todos */}
        <div className="col">
          <h2>Add Todo</h2>

          <form onSubmit={handleSubmit}>
            <input
              className="form-control"
              type="text"
              placeholder="todo para agregar"
              name="tarea"
              value={tarea}
              onChange={handleValuesChange}
            />

            <input
              type="submit"
              className="btn btn-outline-success"
              value="Agregar"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default App;
