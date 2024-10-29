import React from "react";

interface Todo {
  text: string;
  completed: boolean;
}

interface TodoListProps {
  todos: Todo[];
  onToggleTodo: (index: number) => void;
  onDeleteTodo: (index: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({
  todos,
  onToggleTodo,
  onDeleteTodo,
}) => {
  return (
    <ul>
      {todos.map((todo, index) => (
        <li key={index} style={{ display: "flex", alignItems: "center" }}>
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => onToggleTodo(index)}
          />
          <span
            style={{
              textDecoration: todo.completed ? "line-through" : "none",
              marginLeft: "8px",
            }}
          >
            {todo.text}
          </span>
          <button
            onClick={() => onDeleteTodo(index)}
            style={{ marginLeft: "10px" }}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
