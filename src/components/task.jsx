import React, { Component } from "react";

class Task extends Component {
  render() {
    const { task, onTaskDone } = this.props;

    return (
      <li className="list-group-item">
        <input
          onChange={() => onTaskDone(task)}
          className="m-2"
          type="checkbox"
          aria-label="Task done"
        ></input>
        {task.title}
        <button className="btn btn-sm btn-danger m-2">Delete</button>
      </li>
    );
  }
}

export default Task;
