// src/components/TodoItem.tsx

import React, { FC } from 'react';
import { Task } from '../types';

interface TodoItemProps {
  task: Task;
  onDelete: (id: number) => void;  // Add onDelete callback prop
}

const TodoItem: FC<TodoItemProps> = ({ task, onDelete }) => {
  return (
    <li style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <span>{task.text}</span>
      <button
        onClick={() => onDelete(task.id)}  // Call onDelete with this task's id
        style={{
          background: 'none',
          border: 'none',
          color: 'red',
          fontWeight: 'bold',
          cursor: 'pointer',
          fontSize: '20px',
          lineHeight: '20px',
        }}
        aria-label="Delete task"
        title="Delete task"
      >
        &times;
      </button>
    </li>
  );
};

export default TodoItem;


/*import React, { FC } from 'react';
import { Task } from '../types';

interface TodoItemProps {
  task: Task;
}

const TodoItem: FC<TodoItemProps> = ({ task }) => {
  return <li>{task.text}</li>;
};

export default TodoItem;*/




/*import React from "react";
import { Todo } from "../App";

interface Props {
  todo: Todo;
  onDelete: (id: number) => void;
}

const TodoItem: React.FC<Props> = ({ todo, onDelete }) => {
  return (
    <li style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px" }}>
      {todo.text}
      <button onClick={() => onDelete(todo.id)}>❌</button>
    </li>
  );
};

export default TodoItem;*/
