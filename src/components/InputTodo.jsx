import React, { useState } from 'react';

const InputTodo = () => {
  const [description, setDescription] = useState('');

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const body = { description };
      const response = await fetch('http://localhost:5000/todos', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
      });

      if (response.ok) {
        setDescription('');
        window.location = '/';
      }
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <div className="container fade-in">
      <div className="form-container">
        <h2>Add New Todo</h2>
        <form className="d-flex" onSubmit={onSubmitForm}>
          <input
            type="text"
            className="form-control"
            value={description}
            onChange={e => setDescription(e.target.value)}
            placeholder="What needs to be done?"
            required
          />
          <button className="btn btn-success">Add Todo</button>
        </form>
      </div>
    </div>
  );
};

export default InputTodo; 
