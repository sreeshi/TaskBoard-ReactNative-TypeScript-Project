import React from "react";
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

export default TodoItem;
