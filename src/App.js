import React, { Component } from "react";

import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      message: "Hello Coding Garding",
      newTodo: "",
      todos: [
        {
          title: "Learn React",
          done: false
        },
        {
          title: "Learn redux",
          done: false
        }
      ]
    };
    this.formSubmitted = this.formSubmitted.bind(this);
    this.toggleTodoDone = this.toggleTodoDone.bind(this);
  }

  newTodoChanged(event) {
    this.setState({
      newTodo: event.target.value
    });
  }

  formSubmitted(event) {
    event.preventDefault();

    this.setState({
      newTodo: "",
      todos: [
        ...this.state.todos,
        {
          title: this.state.newTodo,
          done: false
        }
      ]
    });
    // let todos = this.state.todos.slice();
    // todos.push({
    //   title:this.state.newTodo,
    //   done:false
    // })

    // this.setState({
    //   todos: this.state.todos.push({
    //     title: this.state.newTodo,
    //     done: false
    //   })
    // });
  }

  toggleTodoDone(event, index) {
    const todos = [...this.state.todos];
    const todo = todos[index];
    todo.done = event.target.checked;
    this.setState({
      todos
    });
  }
  removeTodo(index) {
    const todos = [...this.state.todos];
    todos.splice(index, 1);
    this.setState({
      todos
    });
  }
  allDone() {
    const todos = this.state.todos.map(todo => {
      return {
        title: todo.title,
        done: true
      };
    });
    this.setState({
      todos
    });
  }

  render() {
    return (
      <div className="App">
        <h1>{this.state.message}</h1>
        <form onSubmit={this.formSubmitted}>
          <label htmlFor="newTodo">New Todo</label>
          <input
            onChange={this.newTodoChanged.bind(this)}
            id="newTodo"
            name="newTodo"
            value={this.state.newTodo}
          />
          <button type="submit">Submit</button>
        </form>
        <button onClick={() => this.allDone()}>All Done</button>
        <ul>
          {this.state.todos.map((todo, index) => {
            return (
              <li key={index}>
                <input
                  onChange={event => this.toggleTodoDone(event, index)}
                  type="checkbox"
                  checked={todo.done}
                />
                <span
                  style={{
                    textDecoration: todo.done ? "line-through" : "inherit"
                  }}
                >
                  {todo.title}
                </span>
                <button
                  style={{ marginLeft: "10px" }}
                  onClick={() => {
                    this.removeTodo(index);
                  }}
                >
                  X
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default App;
