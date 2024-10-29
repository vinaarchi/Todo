import React from "react";

interface ToDoInputProps {
  taskName: string;
  onInputChange: (e: any) => void;
  onAddTask: () => void;
}

const ToDoInput: React.FC<ToDoInputProps> = ({
  taskName,
  onInputChange,
  onAddTask,
}) => {
  return (
    <div className="flex flex-col items-center mb-4">
      <input
        type="text"
        className="border border-gray-300 rounded p-2 mb-2"
        value={taskName}
        onChange={onInputChange}
        placeholder="Add a new task"
      />
      <button
        className="bg-blue-500 text-white p-2 rounded"
        onClick={onAddTask}
      >
        Add Task
      </button>
    </div>
  );
};

export default ToDoInput;
