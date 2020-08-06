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
    //console.log("execute");
    const tasks = [...this.state.tasks];
    const index = tasks.indexOf(task);
    tasks[index].completed = !task.completed;
    this.setState({ tasks: tasks });

    //console.log("tasks", this.state.tasks);
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
