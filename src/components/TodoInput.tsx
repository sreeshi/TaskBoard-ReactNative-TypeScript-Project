// src/components/TodoInput.tsx

import React, { useState, FC, FormEvent } from 'react';

interface TodoInputProps {
  onAddTask: (taskText: string) => void;
}

const TodoInput: FC<TodoInputProps> = ({ onAddTask }) => {
  const [input, setInput] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    onAddTask(input.trim());
    setInput('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add a task"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default TodoInput;
