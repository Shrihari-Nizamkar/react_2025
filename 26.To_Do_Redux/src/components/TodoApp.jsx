import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo } from "../redux/todoActions";

const TodoApp = () => {
  const todos = useSelector((state) => state.todo.todoList);

  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const handleAddTodos = () => {
    dispatch(addTodo(input));
    setInput("");
  };
  return (
    <div>
      <h1>Todo App by Redux not using Slice</h1>
      <div>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={handleAddTodos}>Add Todo</button>
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>
              {todo.title}{" "}
              <button onClick={() => dispatch(deleteTodo(todo.id))}>
                DELETE TODO
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TodoApp;
