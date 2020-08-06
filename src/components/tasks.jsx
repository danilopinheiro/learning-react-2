import React, { Component } from "react";

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

  handleTaskDone = () => {
    console.log(this.props);
  };

  render() {
    return (
      <React.Fragment>
        <ul className="list-group">
          {this.state.tasks.map((t) => (
            <li className="list-group-item" key={t.id}>
              <input
                onChange={this.handleTaskDone}
                className="m-2"
                type="checkbox"
                aria-label="Task done"
              ></input>
              {t.title}
              <button className="btn btn-sm btn-danger m-2">Delete</button>
            </li>
          ))}
        </ul>
      </React.Fragment>
    );
  }
}

export default Tasks;
