import React, { useState } from "react";

const TodoForm = ({ dispatch }) => {
  const [item, setItem] = useState("");

  const handleChanges = (e) => {
    setItem(e.target.value);
  };

  const submitForm = (e) => {
    e.preventDefault();
    dispatch({
      type: "ADD_TASK",
      payload: item,
    });
    setItem("");
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
        <input
          type="text"
          name="todo"
          placeholder="Enter new task"
          onChange={handleChanges}
        />
        <button onClick={submitForm}>Add Task</button>
        <button onClick={clearCompleted}>Remove Completed Task</button>
      </form>
    </div>
  );
};

export default TodoForm;
