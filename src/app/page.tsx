"use client";
import { useState } from "react";
import ToDoInput from "@/component/TodoInput";
import TodoList from "@/component/TodoList";
import DoneList from "@/component/DoneList";

interface Todo {
  text: string;
  completed: boolean;
}

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [completedCount, setCompletedCount] = useState<number>(0);
  const [input, setInput] = useState<string>("");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const handleInputChange = (e: any) => {
    setInput(e.target.value);
  };

  const handleSearchChange = (e: any) => {
    setSearchQuery(e.target.value);
  };

  const handleAddTodo = () => {
    if (input.trim()) {
      const newTodo: Todo = { text: input, completed: false };
      setTodos([...todos, newTodo]);
    }
  };

  const handleToggleTodo = (index: number) => {
    const newTodos = todos.map((todo, i) =>
      i === index ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(newTodos);

    const isCurrentlyCompleted = newTodos[index].completed;
    if (isCurrentlyCompleted) {
      setCompletedCount(completedCount + 1);
    } else {
      setCompletedCount(completedCount - 1);
    }
  };

  const handleDeleteTodo = (index: number) => {
    const isCurrentlyCompleted = todos[index].completed;
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
    if (isCurrentlyCompleted) {
      setCompletedCount(completedCount - 1);
    }
  };

  const filteredTodos = todos.filter(todo =>
    todo.text.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="w-1/2 m-auto flex flex-col items-center">
      <h1 className="text-5xl text-center uppercase">To-Do List</h1>
      <ToDoInput
        taskName={input}
        onInputChange={handleInputChange}
        onAddTask={handleAddTodo}
      />
      <input
        type="text"
        placeholder="Search tasks..."
        value={searchQuery}
        onChange={handleSearchChange}
        className="mt-4 p-2 border rounded"
      />
      <TodoList
        todos={filteredTodos}
        onToggleTodo={handleToggleTodo}
        onDeleteTodo={handleDeleteTodo}
      />
      <DoneList completedCount={completedCount} />
    </div>
  );
};

export default App;
