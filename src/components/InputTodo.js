import React, { useState } from 'react';
import { FaPlusCircle } from 'react-icons/fa';

const InputTodo = (props) => {
  const [inputText, setInputText] = useState({
    title: '',
  });

  // destructuring has to be done when passing object inside useState
  // read here why: https://ibaslogic.com/react-hooks-tutorial/
  const onChange = (e) => {
    setInputText({
      ...inputText,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputText.title.trim()) {
      props.addTodoProps(inputText.title);
      setInputText('');
    } else {
      alert('Please enter a Todo');
    }
  };

  return (
    <form onSubmit={handleSubmit} className='form-container'>
      <input
        type='text'
        className='input-text'
        placeholder='Add todo...'
        value={inputText.title}
        name='title'
        onChange={onChange}
      />
      <button className='input-submit'>
        <FaPlusCircle
          style={{ color: 'darkcyan', fontSize: '30px', marginTop: '2px' }}
        />
      </button>
    </form>
  );
};

export default InputTodo;
