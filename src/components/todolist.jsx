import React, { Component } from "react";
import Todo from "./todo";

class TodoList extends Component {
  state = {
    todoList: [
      { id: 1, title: "study", completed: false },
      { id: 2, title: "shopping", completed: false },
      { id: 3, title: "go to the gym", completed: false },
    ],
    title: "",
  };

  handleChange = (e) => {
    const title = e.target.value;
    this.setState({ title: title });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const data = { id: Date.now(), title: this.state.title, completed: false };
    const todoList = [data, ...this.state.todoList];
    this.setState({ todoList, title: "" });
  };

  handleDelete = (id) => {
    const todoList = this.state.todoList.filter((todo) => todo.id !== id);
    this.setState({ todoList });
  }

  handleCheck = (id) => {
    const { todoList } = this.state;
    const index = todoList.findIndex((todo) => todo.id === id);
    todoList[index].completed = !todoList[index].completed;
    this.setState({ todoList });
  }

  render() {
    return (
      <div>
        <h1>Todo List</h1>
        <form className='myform' onSubmit={this.handleSubmit}>
          <input
            type='text'
            value={this.state.title}
            className='form-control'
            onChange={this.handleChange}
          />
          <button type='submit' className='btn btn-primary'>
            ADD
          </button>
        </form>
        <ul className='list-group mt-4'>
          {this.state.todoList.map((todo) => (
            <Todo todo={todo} handleCheck={this.handleCheck} handleDelete={this.handleDelete} ></Todo>
          ))}
        </ul>
      </div>
    );
  }
}

export default TodoList;
