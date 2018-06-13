import React from "react";

const NewTOdoForm = props => {
  return (
    <form onSubmit={props.formSubmitted}>
      <label htmlFor="newTodo">New Todo</label>
      <input
        onChange={props.newTodoChanged}
        id="newTodo"
        name="newTodo"
        value={props.newTodo}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default NewTOdoForm;
