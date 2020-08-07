import React, { Component } from "react";
import Task from "./task";

class Tasks extends Component {
  render() {
    const {
      tasks,
      onTaskDone,
      onTaskDelete,
      onTaskAdd,
      onInputChange,
    } = this.props;
    return (
      <React.Fragment>
        <div className="input-group mb-2 mt-2">
          <input
            type="text"
            className="form-control"
            placeholder="Task Title"
            aria-label="Task Title"
            aria-describedby="basic-addon2"
            onChange={onInputChange}
          ></input>
          <div className="input-group-append">
            <button
              className="btn btn-outline-secondary"
              type="button"
              onClick={onTaskAdd}
            >
              {" "}
              Add
            </button>
          </div>
        </div>

        <ul className="list-group">
          {tasks.map((task) => (
            <Task
              key={task.id}
              task={task}
              onTaskDone={onTaskDone}
              onTaskDelete={onTaskDelete}
            />
          ))}
        </ul>
      </React.Fragment>
    );
  }
}

export default Tasks;
