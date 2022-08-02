import React from 'react';
import Tasks from './Tasks';
import AddTask from './AddTask';

const TaskMangement = ({ tasks, showAddTask, addTask, deleteTask, toggleReminder }) => {
  return (
    <>
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        'No Tasks To Show'
      )}
    </>
  );
};

export default TaskMangement;
