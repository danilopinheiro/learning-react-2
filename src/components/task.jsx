import React, { Component } from "react";

class Task extends Component {
  state = {};

  handleTaskDone = () => {
    console.log(this.props.task);
  };

  render() {
    return (
      <li className="list-group-item">
        <input
          onChange={this.handleTaskDone}
          className="m-2"
          type="checkbox"
          aria-label="Task done"
        ></input>
        {this.props.task.title}
        <button className="btn btn-sm btn-danger m-2">Delete</button>
      </li>
    );
  }
}

export default Task;
