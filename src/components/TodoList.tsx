// src/components/TodoList.tsx

// src/components/TodoList.tsx

import React from 'react';
import { Task } from '../types';

interface Props {
  tasks: Task[];
}

const TodoList: React.FC<Props> = ({ tasks }) => (
  <ul>
    {tasks.map((task) => (
      <li key={task.id}>
        {task.text} - Priority: {task.priority}
      </li>
    ))}
  </ul>
);

export default TodoList;


/*import React, { FC } from 'react';
import TodoItem from './TodoItem';
import { Task } from '../types';

interface TodoListProps {
  tasks: Task[];
  onDeleteTask: (id: number) => void;
}

const TodoList: FC<TodoListProps> = ({ tasks, onDeleteTask }) => {
  return (
    <ul>
      {tasks.map(task => (
        <TodoItem key={task.id} task={task} onDelete={onDeleteTask} />
      ))}
    </ul>
  );
};

export default TodoList;*/


/*import React, { useState } from 'react';
import TodoItem from './TodoItem';
import { Task } from '../types';

const TodoList: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([
    // initial tasks if any
  ]);

  const deleteTask = (id: number) => {
    setTasks(prevTasks => prevTasks.filter(task => task.id !== id));
  };

  return (
    <ul>
      {tasks.map(task => (
        <TodoItem key={task.id} task={task} onDelete={deleteTask} />
      ))}
    </ul>
  );
};

export default TodoList;*/



/*import React, { FC } from 'react';
import { Task } from '../types';  // You’ll create this type in next step
import TodoItem from './TodoItem';

interface TodoListProps {
  tasks: Task[];
}

const TodoList: FC<TodoListProps> = ({ tasks }) => {
  return (
    <ul>
      {tasks.map(task => (
        <TodoItem key={task.id} task={task} />
      ))}
    </ul>
  );
};

export default TodoList;*/
