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
    this.getTasks();
  }

  getTasks = async () => {
    await api
      .get("")
      .then((res) => {
        this.setState({ tasks: res.data });
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  handleTaskDone = (task) => {
    const tasks = [...this.state.tasks];
    const index = tasks.indexOf(task);
    tasks[index].completed = !task.completed;
    this.setState({ tasks: tasks });
  };

  handleDelete = (task) => {
    const tasks = this.state.tasks.filter((t) => t.id !== task.id);
    this.setState({ tasks: tasks });

    console.log("delete", tasks);
  };

  handleChange = (e) => {
    this.setState({ input: e.target.value });
  };

  handleAdd = (title) => {
    const tasks = [...this.state.tasks];

    const task = {
      id: tasks && tasks.length ? tasks.pop().id + 1 : 1,
      title: this.state.input,
      completed: false,
    };

    this.setState({ tasks: [...this.state.tasks, task] });
  };

  render() {
    return (
      <React.Fragment>
        <Header
          totalTasks={
            this.state.tasks.filter((t) => t.completed === true).length
          }
        />
        <main className="container">
          <Tasks
            onTaskDone={this.handleTaskDone}
            onTaskDelete={this.handleDelete}
            onTaskAdd={this.handleAdd}
            onInputChange={this.handleChange}
            tasks={this.state.tasks}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
