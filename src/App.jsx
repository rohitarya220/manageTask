import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import TaskList from './componants/AddTaskForm';
import AddTaskForm from './componants/TaskList';

const App = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(storedTasks);
  }, []); // Run once on mount

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]); // Run whenever tasks change

  const handleComplete = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleDelete = (taskId) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  const handleAddTask = (newTask) => {
    setTasks((prevTasks) => [...prevTasks, { ...newTask, id: Date.now(), completed: false }]);
  };

  return (
    <Router>
      <div className="container mx-auto p-4">
        <nav className="mb-4">
          <ul className="flex">
            <li className="mr-4">
              <Link to="/" className="text-blue-500 hover:underline">
                Task List
              </Link>
            </li>
            <li>
              <Link to="/add" className="text-blue-500 hover:underline">
                Add Task
              </Link>
            </li>
          </ul>
        </nav>

        <hr className="mb-4" />

        <Routes>
          <Route
            path="/"
            element={<TaskList tasks={tasks} handleComplete={handleComplete} handleDelete={handleDelete} />}
          />
          <Route
            path="/add"
            element={<AddTaskForm handleAddTask={handleAddTask} />}
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
