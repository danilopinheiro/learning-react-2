import React, { Component } from "react";
import Task from "./task";

class Tasks extends Component {
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
      <div>
        <ul className="list-group">
          {this.state.tasks.map((task) => (
            <Task
              key={task.id}
              task={task}
              onTaskDone={this.handleTaskDone}
              onTaskDelete={this.handleDelete}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default Tasks;
