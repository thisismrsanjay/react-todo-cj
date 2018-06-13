import React, { Component } from "react";
import NewTodoForm from "./NewTodoForm";
import TodoList from "./TodoList";
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
    this.newTodoChanged = this.newTodoChanged.bind(this);
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
        <NewTodoForm
          newTodo={this.state.newTodo}
          formSubmitted={this.formSubmitted}
          newTodoChanged={this.newTodoChanged}
        />
        <button onClick={() => this.allDone()}>All Done</button>
        <TodoList
          todos={this.state.todos}
          toggleTodoDone={this.toggleTodoDone}
          removeTodo={this.removeTodo.bind(this)}
        />
      </div>
    );
  }
}

export default App;
