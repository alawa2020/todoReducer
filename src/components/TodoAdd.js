import React from 'react';
import useform from '../hooks/useform';

const TodoAdd = ({ handleAddTodo }) => {
  const [{ tarea }, handleValuesChange, resetForm] = useform({ tarea: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (tarea.trim().length > 2) {
      handleAddTodo(tarea);
      resetForm();
      console.log('submit done!');
      return;
    }
    console.log('error!');
  };

  return (
    <>
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
    </>
  );
};

export default TodoAdd;
