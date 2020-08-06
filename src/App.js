import React from "react";
import "./App.css";
import Header from "./components/header";
import Footer from "./components/footer";
import Tasks from "./components/tasks";

function App() {
  return (
    <React.Fragment>
      <Header totalTasks={20} />
      <main className="container">
        <Tasks />
      </main>
      <Footer />
    </React.Fragment>
  );
}

export default App;
