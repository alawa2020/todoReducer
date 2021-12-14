import React from 'react';

const TodoListItem = ({ todo, handleClickTodo, handleDeleteClick }) => {
  return (
    <li>
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
    </li>
  );
};

export default TodoListItem;
