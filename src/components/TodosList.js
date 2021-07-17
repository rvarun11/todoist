import React from 'react';
import TodoItem from './TodoItem';

const TodosList = (props) => {
  return (
    <ul>
      {props.todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          markTodo={props.markTodo}
          updateTodo={props.updateTodo}
          deleteTodo={props.deleteTodo}
        />
      ))}
    </ul>
  );
};

export default TodosList;
