import React, { useReducer } from "react";

//reducers
import { todo, todoReducer } from "../reducers/reducer";

//components
import TodoForm from "./TodoForm";
import Todo from "./Todo";

const TodoList = () => {
  const [state, dispatch] = useReducer(todoReducer, todo);

  return (
    <div className="list">
      <TodoForm dispatch={dispatch} />
      {state.map((todo) => {
        return <Todo key={todo.id} todo={todo} dispatch={dispatch} />;
      })}
    </div>
  );
};

export default TodoList;
