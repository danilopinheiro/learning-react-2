import React, { Component } from "react";

class Task extends Component {
  handleCheckBox(completed) {
    const textLineThrough = {
      textDecoration: "line-through",
    };

    if (completed) {
      return textLineThrough;
    }
  }

  render() {
    const { task, onTaskDone, onTaskDelete } = this.props;

    return (
      <li className="list-group-item">
        <input
          onChange={() => onTaskDone(task)}
          className="m-2"
          type="checkbox"
          checked={task.completed}
          aria-label="Task done"
        ></input>
        <span className="taskTitle" style={this.handleCheckBox(task.completed)}>
          {task.title}
        </span>
        <button
          className="btn btn-sm btn-danger m-2"
          onClick={() => onTaskDelete(task)}
        >
          Remove
        </button>
      </li>
    );
  }
}

export default Task;
