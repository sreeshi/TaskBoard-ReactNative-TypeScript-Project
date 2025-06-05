// src/components/TaskForm.tsx

import React, { useState } from 'react';

interface TaskFormProps {
  onAddTask: (text: string, priority: number) => void;
}

const TaskForm: React.FC<TaskFormProps> = ({ onAddTask }) => {
  const [text, setText] = useState('');
  const [priority, setPriority] = useState('');
  const [error, setError] = useState('');

  const validate = () => {
    if (!text.trim()) return "Task cannot be empty";
    const prio = Number(priority);
    if (isNaN(prio) || prio < 1 || prio > 5) return "Priority must be between 1 and 5";
    return '';
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const err = validate();
    if (err) {
      setError(err);
      return;
    }
    onAddTask(text.trim(), Number(priority));
    setText('');
    setPriority('');
    setError('');
  };

  const isFormValid = !validate();

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Task"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <input
        type="number"
        placeholder="Priority (1–5)"
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
      />
      <button type="submit" disabled={!isFormValid}>Add Task</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </form>
  );
};

export default TaskForm;
