import React, { Component } from "react";
import Task from "./task";

class Tasks extends Component {
  render() {
    const { tasks, onTaskDone, onTaskDelete } = this.props;
    return (
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
    );
  }
}

export default Tasks;
