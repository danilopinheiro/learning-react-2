import React from "react";

const Header = ({ totalTasks }) => {
  return (
    <nav className="navbar navbar-dark bg-primary">
      <span className="navbar-brand mb-0 h1">
        Daily Task Show
        <span className="badge badge-pill badge-secondary m-2">
          {totalTasks}
        </span>
      </span>
    </nav>
  );
};

export default Header;
