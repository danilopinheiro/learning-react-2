import React, { Component } from "react";
import "./App.css";
import Header from "./components/header";
import Tasks from "./components/tasks";
import axios from "axios";

const api = axios.create({
  //baseURL: "https://my-json-server.typicode.com/danilopinheiro/data/db",
  baseURL: "http://localhost:3000/ds.json",
});

class App extends Component {
  state = {
    tasks: [],
    input: null,
  };

  constructor() {
    super();
    api
      //.get("/")
      .get("")
      .then((res) => {
        this.setState({ tasks: res.data });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  handleTaskDone = (task) => {
    const tasks = [...this.state.tasks];
    const index = tasks.indexOf(task);
    tasks[index].completed = !task.completed;
    this.setState({ tasks: tasks });
  };

  handleDelete = (task) => {
    const tasks = this.state.tasks.filter((t) => t.id !== task.id);
    this.setState({ tasks: tasks });
  };

  handleChange = (e) => {
    this.setState({ input: e.target.value });
  };

  handleAdd = (title) => {
    let counter = this.state.tasks.length;

    const task = {
      id: counter + 1,
      title: this.state.input,
      completed: false,
    };

    const tasks = [...this.state.tasks, task];
    this.setState({ tasks: tasks });
  };

  render() {
    console.log("render", this.state);
    return (
      <React.Fragment>
        <Header
          totalTasks={
            this.state.tasks.filter((t) => t.completed === true).length
          }
        />
        <main className="container">
          <div className="input-group mb-2 mt-2">
            <input
              type="text"
              className="form-control"
              placeholder="Task Title"
              aria-label="Task Title"
              aria-describedby="basic-addon2"
              onChange={this.handleChange}
            ></input>
            <div className="input-group-append">
              <button
                className="btn btn-outline-secondary"
                type="button"
                onClick={this.handleAdd}
              >
                Add
              </button>
            </div>
          </div>
          <Tasks
            onTaskDone={this.handleTaskDone}
            onTaskDelete={this.handleDelete}
            tasks={this.state.tasks}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
