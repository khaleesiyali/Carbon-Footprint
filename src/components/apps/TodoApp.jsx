import React, { useState } from 'react';

const TodoList = () => {
  const [todos, setTodos] = useState([
    { id: 1, task: 'Pick up kids from school', isCompleted: false },
    { id: 2, task: 'Prepare for presentation', isCompleted: true },
    { id: 3, task: 'Print Statements', isCompleted: false },
    { id: 4, task: 'Create invoice', isCompleted: false },
    { id: 5, task: 'Call John', isCompleted: true },
    { id: 6, task: 'Meeting with Alisa', isCompleted: false }
  ]);

  const [inputValue, setInputValue] = useState('');

  const statusChangedHandler = (event, index) => {
    const updatedTodos = todos.map((todo, i) => 
      i === index ? { ...todo, isCompleted: event.target.checked } : todo
    );
    setTodos(updatedTodos);
  };

  const addTodo = (event) => {
    event.preventDefault();
    const newTodo = {
      id: Date.now(),
      task: inputValue,
      isCompleted: false
    };
    setTodos([newTodo, ...todos]);
    setInputValue('');
  };

  const removeTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  const inputChangeHandler = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div>      
      <form className="add-items d-sm-flex" onSubmit={addTodo}>
        <input
          type="text"
          className="form-control h-auto"
          placeholder="What do you need to do today?"
          value={inputValue}
          onChange={inputChangeHandler}
          required
        />
        <button type="submit" className="btn btn-primary fw-bold">Add</button>
      </form>
      <div className="list-wrapper">
        <ul className="d-flex flex-column todo-list">
          {todos.map((todo, index) => (
            <ListItem
              key={todo.id}
              isCompleted={todo.isCompleted}
              changed={(event) => statusChangedHandler(event, index)}
              remove={() => removeTodo(index)}
            >
              {todo.task}
            </ListItem>
          ))}
        </ul>
      </div>
    </div>
  );
};

const ListItem = ({ isCompleted, changed, remove, children }) => (
  <li className={isCompleted ? 'completed' : null}>
    <div className="form-check">
      <label htmlFor="" className="form-check-label">
        <input
          className="checkbox"
          type="checkbox"
          checked={isCompleted}
          onChange={changed}
        /> {children} <i className="input-helper"></i>
      </label>
    </div>
    <i className="remove mdi mdi-close-circle-outline" onClick={remove}></i>
  </li>
);

export default TodoList;
