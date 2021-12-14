import React from 'react';
import TodoListItem from './TodoListItem';

const TodoList = ({ state, handleClickTodo, handleDeleteClick }) => {
  return (
    <ol>
      {state.map((todo) => (
        <TodoListItem
          key={todo.id}
          todo={todo}
          handleClickTodo={handleClickTodo}
          handleDeleteClick={handleDeleteClick}
        />
      ))}
    </ol>
  );
};

export default TodoList;
