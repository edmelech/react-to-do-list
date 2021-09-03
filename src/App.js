import React from "react";
import './App.css';
//Importing Components
import Form from "./components/Form";

function App() {
  return (
    <div className="App">
      <header>
        <h1>Ed's Todo list</h1>
      </header>
      <Form />
    </div>
  );
}

export default App;
