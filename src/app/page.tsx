"use client"
import { useState } from 'react';
// import FormInput from '@/component/input';

interface Todo {
  text: string;
  completed: boolean;
}

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [input, setInput] = useState<string>('');

  const handleInputChange = (e: any) => {
    setInput(e.target.value);
  };

  const handleAddTodo = () => {
    if (input.trim()) {
      const newTodo: Todo = { text: input, completed: false };
      setTodos([...todos, newTodo]);
      // setInput('');
    }
  };

  const handleToggleTodo = (index: number) => {
    const newTodos = todos.map((todo, i) =>
      i === index ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(newTodos);
  };

  const handleDeleteTodo = (index: number) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <div className='w-1/2 m-auto'>
      <h1 className='text-5xl text-center uppercase'>To-Do List</h1>
      <input
        type="text"
        className='items-center'
        onChange={handleInputChange}
        placeholder="Add a new task"
      />
      <button onClick={handleAddTodo}>Add</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index} style={{ display: 'flex', alignItems: 'center' }}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => handleToggleTodo(index)}
            />
            <span
              style={{
                textDecoration: todo.completed ? 'line-through' : 'none',
                marginLeft: '8px',
              }}
            >
              {todo.text}
            </span>
            <button onClick={() => handleDeleteTodo(index)} style={{ marginLeft: '10px' }}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;