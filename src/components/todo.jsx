import React from "react";

const Todo = (props) => {
    const {todo} = props;
  return (
    <li key={todo.id} className='list-group-item todo'>
      <span style={{ textDecoration: todo.completed ? "line-through" : "" }}>
        {todo.title}
      </span>
      <div className='actions'>
        <button
          className={`btn btn${todo.completed ? "" : "-outline"}-success`}
          onClick={() => props.handleCheck(todo.id)}
        >
          ✓
        </button>
        <button
          className='btn btn-outline-danger ml-4'
          onClick={() => props.handleDelete(todo.id)}
        >
          Delete
        </button>
      </div>
    </li>
  );
};

export default Todo;
