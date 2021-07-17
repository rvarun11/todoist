import React, { useState, useEffect } from 'react';
import Header from './Header';
import InputTodo from './InputTodo';
import TodosList from './TodosList';
import { v4 as uuidv4 } from 'uuid';

const TodoContainer = () => {
  // loading todos
  const getTodos = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
  };

  const [todos, setTodos] = useState(getTodos);

  // this method calls an additional re-rendering which isn't required,
  // even though React doesn't have a problem with this
  // useEffect(() => {
  //   const loadedTodos = JSON.parse(localStorage.getItem('todos'));
  //   if (loadedTodos) {
  //     setTodos(loadedTodos);
  //   }
  // }, []);

  // storing todos
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  // for checking/unchecking todos
  const markTodo = (id) => {
    setTodos((prevState) => ({
      todos: prevState.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      }),
    }));
  };

  const addTodo = (title) => {
    const newTodo = {
      id: uuidv4(),
      title,
      completed: false,
    };
    setTodos([newTodo, ...todos]);
  };

  const updateTodo = (updatedTitle, id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.title = updatedTitle;
        }
        return todo;
      })
    );
  };

  const deleteTodo = (id) => {
    setTodos([...todos.filter((todo) => todo.id !== id)]);
  };

  return (
    <div className='container'>
      <div className='inner'>
        <Header />
        <InputTodo addTodoProps={addTodo} />
        <TodosList
          todos={todos}
          markTodo={markTodo}
          deleteTodo={deleteTodo}
          updateTodo={updateTodo}
        />
      </div>
    </div>
  );
};

export default TodoContainer;
