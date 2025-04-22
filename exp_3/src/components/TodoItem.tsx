import React from 'react';

interface TodoItemProps {
  text: string;
  completed: boolean;
  onToggle: () => void;
  onDelete: () => void;
}

function TodoItem({ text, completed, onToggle, onDelete }: TodoItemProps) {
  return (
    <li className={`todo-item ${completed ? 'completed' : ''}`}>
      <input
        type="checkbox"
        checked={completed}
        onChange={onToggle}
      />
      <span onClick={onToggle} style={{ marginLeft: '10px', cursor: 'pointer' }}>
        {text}
      </span>
      <button onClick={onDelete}>Delete</button>
    </li>
  );
}

export default TodoItem