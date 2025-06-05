import React from 'react';
import { View, Text, Button } from 'react-native';
import { Task } from '../types';

interface TodoItemProps {
  task: Task;
  onDelete: (id: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ task, onDelete }) => (
  <View style={{ marginBottom: 10 }}>
    <Text>{task.text} (Priority: {task.priority})</Text>
    <Button title="Delete" onPress={() => onDelete(task.id)} />
  </View>
);

export default TodoItem;
