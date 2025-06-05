import React from 'react';
import { View } from 'react-native';
import { Task } from '../types';
import TodoItem from './TodoItem';

interface TodoListProps {
  tasks: Task[];
  onDeleteTask: (id: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({ tasks, onDeleteTask }) => (
  <View>
    {tasks.map(task => (
      <TodoItem key={task.id} task={task} onDelete={onDeleteTask} />
    ))}
  </View>
);

export default TodoList;
