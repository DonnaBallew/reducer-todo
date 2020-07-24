import React, { useState } from "react";

const TodoForm = ({ dispatch }) => {
  const [task, setTask] = useState("");

  const handleChanges = (e) => {
    setTask(e.target.value);
  };

  const submitForm = (e) => {
    e.preventDefault();
    dispatch({
      type: "ADD_TASK",
      payload: task,
    });
    setTask("");
  };

  const clearCompleted = (e) => {
    e.preventDefault();
    dispatch({
      type: "CLEAR",
    });
  };
  return (
    <div className="todoList">
      <form onSubmit={submitForm}>
        <input type="text" name="todo" placeholder="Enter new task" />
        <button onClick={submitForm}>Submit</button>
        <button onClick={clearCompleted}>Clear Completed</button>
      </form>
    </div>
  );
};

export default TodoForm;
