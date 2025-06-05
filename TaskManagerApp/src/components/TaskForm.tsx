import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';

interface TaskFormProps {
  onAddTask: (text: string, priority: number) => void;
}

const TaskForm: React.FC<TaskFormProps> = ({ onAddTask }) => {
  const [text, setText] = useState('');
  const [priority, setPriority] = useState('');
  const [error, setError] = useState('');

  const validate = () => {
    if (!text.trim()) return 'Task cannot be empty';
    const prio = Number(priority);
    if (isNaN(prio) || prio < 1 || prio > 5) return 'Priority must be between 1 and 5';
    return '';
  };

  const handleSubmit = () => {
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
    <View>
      <TextInput
        placeholder="Task"
        value={text}
        onChangeText={setText}
        style={styles.input}
      />
      <TextInput
        placeholder="Priority (1-5)"
        value={priority}
        onChangeText={setPriority}
        keyboardType="numeric"
        style={styles.input}
      />
      <Button title="Add Task" onPress={handleSubmit} disabled={!isFormValid} />
      {error ? <Text style={styles.error}>{error}</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    borderColor: 'gray',
    borderWidth: 1,
    padding: 8,
    marginBottom: 10,
  },
  error: {
    color: 'red',
  },
});

export default TaskForm;
