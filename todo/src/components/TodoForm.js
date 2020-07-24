import React from "react";

const TodoForm = () => {
  return (
    <div className="form-contain">
      <form>
        <input type="text" name="todo" placeholder="Enter todo item" />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default TodoForm;
