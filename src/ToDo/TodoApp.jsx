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

  const pendingTasks = tasks.filter(task => !task.completed);
  const completedTasks = tasks.filter(task => task.completed);

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
      <div className='task-actions'>
        <span>Total Tasks: {tasks.length}</span>
        <button onClick={clearAllTasks} className='clear-btn'>Clear All</button>
      </div>

      <div className="tasks-section">
        <h2>Pending Tasks ({pendingTasks.length})</h2>
        <ul className="task-list">
          {pendingTasks.map((task, index) => (
            <li key={index} className="task">
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleComplete(tasks.indexOf(task))}
              />
              <span>{task.text}</span>
              <div className="buttons">
                <button onClick={() => editTask(tasks.indexOf(task))}>Edit</button>
                <button onClick={() => deleteTask(tasks.indexOf(task))}>Delete</button>
              </div>
            </li>
          ))}
        </ul>

        <h2>Completed Tasks ({completedTasks.length})</h2>
        <ul className="task-list completed">
          {completedTasks.map((task, index) => (
            <li key={index} className="task completed">
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleComplete(tasks.indexOf(task))}
              />
              <span>{task.text}</span>
              <div className="buttons">
                <button onClick={() => editTask(tasks.indexOf(task))}>Edit</button>
                <button onClick={() => deleteTask(tasks.indexOf(task))}>Delete</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TodoApp;