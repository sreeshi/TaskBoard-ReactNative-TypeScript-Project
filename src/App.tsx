// src/App.tsx

import React, { useState, useCallback } from 'react';
import { Task } from './types';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

const App = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = useCallback((text: string) => {
    const newTask: Task = { id: Date.now(), text };
    setTasks(prevTasks => [...prevTasks, newTask]);
  }, []);

  const deleteTask = useCallback((id: number) => {
    setTasks(prevTasks => prevTasks.filter(task => task.id !== id));
  }, []);

  return (
    <div>
      <h1>To-Do List</h1>
      <TodoInput onAddTask={addTask} />
      <TodoList tasks={tasks} onDeleteTask={deleteTask} />
    </div>
  );
};


/*const App = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = useCallback((text: string) => {
    const newTask: Task = {
      id: Date.now(),
      text,
    };
    setTasks(prevTasks => [...prevTasks, newTask]);
  }, []);

  return (
    <div>
      <h1>To-Do List</h1>
      <TodoInput onAddTask={addTask} />
      <TodoList tasks={tasks} />
    </div>
  );
};*/

export default App;



/*import React, { useState } from "react";
import TodoItem from "./components/TodoItem";

export interface Todo {
  id: number;
  text: string;
}

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [input, setInput] = useState("");

  const handleAdd = () => {
    if (!input.trim()) return;
    const newTodo: Todo = {
      id: Date.now(),
      text: input.trim(),
    };
    setTodos([...todos, newTodo]);
    setInput("");
  };

  const handleDelete = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div style={{ padding: "20px", maxWidth: "400px", margin: "auto" }}>
      <h2>ToDo List</h2>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add a task"
      />
      <button onClick={handleAdd}>Add</button>
      <ul>
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} onDelete={handleDelete} />
        ))}
      </ul>
    </div>
  );
};

export default App;*/
