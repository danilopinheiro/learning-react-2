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
        completed: false,
      },
    ],
  };

  handleTaskDone = (task) => {
    console.log(task);
  };

  render() {
    return (
      <div>
        <ul className="list-group">
          {this.state.tasks.map((task) => (
            <Task key={task.id} task={task} onTaskDone={this.handleTaskDone} />
          ))}
        </ul>
      </div>
    );
  }
}

export default Tasks;
