import React, { useState, useRef } from 'react';

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const taskInput = useRef();

  const addTask = (e) => {
    e.preventDefault();
    const taskText = taskInput.current.value.trim();
    if (taskText.length > 0) {
      setTasks([...tasks, taskText]);
      taskInput.current.value = '';
    }
  };

  return (
    <div>
      <h1>Lista de Tarefas</h1>
      <form onSubmit={addTask}>
        <input ref={taskInput} type="text" placeholder="Digite uma tarefa" />
        <button type="submit">Adicionar Tarefa</button>
      </form>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
