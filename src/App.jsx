import React from 'react';
import InputTodo from './components/InputTodo';
import ListTodos from './components/ListTodo';
import './App.css';

function App() {
  return (
    <div className="container">
      <h1 className="text-center mt-5">Todo List</h1>
      <InputTodo />
      <ListTodos />
    </div>
  );
}

export default App;
