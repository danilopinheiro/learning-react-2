import React, { Component } from "react";
import "./App.css";
import Header from "./components/header";
import Footer from "./components/footer";
import Tasks from "./components/tasks";

class App extends Component {
  state = {
    tasks: [
      {
        id: 1,
        title: "Morning workout",
        completed: true,
      },
      {
        id: 2,
        title: "Breakfast",
        completed: false,
      },
      {
        id: 3,
        title: "Rendering project 1",
        completed: true,
      },
    ],
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
            tasks={this.state.tasks}
          />
        </main>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
