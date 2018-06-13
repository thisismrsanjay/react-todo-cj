import React from "react";

const TodoItem = props => {
  return (
    <li key={props.index}>
      <input
        onChange={event => props.toggleTodoDone(event, props.index)}
        type="checkbox"
        checked={props.todo.done}
      />
      <span
        style={{
          textDecoration: props.todo.done ? "line-through" : "inherit"
        }}
      >
        {props.todo.title}
      </span>
      <button
        style={{ marginLeft: "10px" }}
        onClick={() => {
          props.removeTodo(props.index);
        }}
      >
        X
      </button>
    </li>
  );
};

export default TodoItem;
