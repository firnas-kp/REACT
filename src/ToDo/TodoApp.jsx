import React, { useState } from 'react';
import './TodoApp.css';

function TodoApp() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState('');
  const [editIndex, setEditIndex] = useState(null);

  const handleInputChange = (e) => setInput(e.target.value);

  const addTask = () => {
    if (input.trim() === '') return;
    if (editIndex !== null) {
      const updatedTasks = [...tasks];
      updatedTasks[editIndex].text = input;
      setTasks(updatedTasks);
      setEditIndex(null);
    } else {
      setTasks([...tasks, { text: input, completed: false }]);
    }
    setInput('');
  };

  const deleteTask = (index) => {
    const newList = tasks.filter((_, i) => i !== index);
    setTasks(newList);
  };

  const toggleComplete = (index) => {
    const newList = [...tasks];
    newList[index].completed = !newList[index].completed;
    setTasks(newList);
  };

  const editTask = (index) => {
    setInput(tasks[index].text);
    setEditIndex(index);
  };

  const clearAllTasks = () => setTasks([]);

  const taskCount = tasks.length;

  return (
    <div className="todo-container">
      <h1>Todo List</h1>
      <div className="input-container">
        <input
          type="text"
          placeholder="Add a new task"
          value={input}
          onChange={handleInputChange}
        />
        <button onClick={addTask}>{editIndex !== null ? 'Update' : 'Add'}</button>
      </div>
      <div className='task-actions'><span>Total Tasks:{taskCount}</span>
      <button onClick={clearAllTasks} className='clear-btn'>Clear All</button></div>
      <ul className="task-list">
        {tasks.map((task, index) => (
          <li
            key={index}
            className={task.completed ? 'task completed' : 'task'}
          >
            <span onClick={() => toggleComplete(index)}>
              {task.text}
            </span>
            <div className="buttons">
              <button onClick={() => editTask(index)}>Edit</button>
              <button onClick={() => deleteTask(index)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;