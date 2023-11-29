import React from 'react';

const TaskList = ({ tasks, handleComplete, handleDelete }) => {
  return (
    <div className="my-4">
      <h2 className="text-2xl font-bold mb-4">Task List</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task.id} className="flex items-center justify-between mb-2">
            <span
              className={`flex-1 ${task.completed ? 'line-through' : ''}`}
            >
              {task.name}
            </span>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => handleComplete(task.id)}
              className="mx-2"
            />
            <button
              onClick={() => handleDelete(task.id)}
              className="bg-red-500 hover:bg-red-600 text-white py-1 px-2 rounded"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;